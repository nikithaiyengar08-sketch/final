import http from "node:http";
import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { destinations, vibes, packages, hiddenGems } from "./src/data.js";
import { recommendTrips } from "./src/recommender.js";
import { searchReddit, searchGoogle } from "./src/integrations.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");
const publicDir = path.join(root, "frontend", "public");
const port = Number(process.env.PORT || 5174);

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon"
};

function sendJson(res, status, body) {
  res.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(body));
}

async function readBody(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  if (!chunks.length) return {};
  try {
    return JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch {
    return {};
  }
}

function serveStatic(res, pathname) {
  const safePath = pathname === "/" ? "/index.html" : pathname;
  const filePath = path.normalize(path.join(publicDir, safePath));

  if (!filePath.startsWith(publicDir)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  const finalPath = existsSync(filePath) ? filePath : path.join(publicDir, "index.html");
  const ext = path.extname(finalPath).toLowerCase();

  readFile(finalPath)
    .then((content) => {
      res.writeHead(200, {
        "Content-Type": mimeTypes[ext] || "application/octet-stream",
        "Cache-Control": ext === ".html" ? "no-store" : "public, max-age=3600"
      });
      res.end(content);
    })
    .catch(() => {
      res.writeHead(404);
      res.end("Not found");
    });
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathname = url.pathname;

  if (pathname === "/api/health") {
    sendJson(res, 200, { ok: true, product: "VibeTrip AI" });
    return;
  }

  if (pathname === "/api/bootstrap") {
    sendJson(res, 200, { destinations, vibes, packages, hiddenGems });
    return;
  }

  if (pathname.startsWith("/api/destinations/")) {
    const id = pathname.split("/").pop();
    const destination = destinations.find((item) => item.id === id);
    if (!destination) {
      sendJson(res, 404, { error: "Destination not found" });
      return;
    }
    sendJson(res, 200, destination);
    return;
  }

  if (pathname === "/api/curated" && req.method === "POST") {
    const input = await readBody(req);
    const destination = destinations.find((item) => item.id === input.destinationId) || destinations[0];
    const mood = destination.moodOptions.find((item) => item.id === input.moodId) || destination.moodOptions[0];
    const when = input.date && input.time ? `${input.date} at ${input.time}` : "your selected slot";
    sendJson(res, 200, {
      title: `${destination.name} plan for ${when}`,
      summary: `Best matched to ${mood.title}: ${mood.hook}`,
      mustGo: destination.mustGo,
      cafeRecs: destination.cafeRecs || [],
      hiddenGems: destination.hiddenGems,
      beforeYouGo: destination.beforeYouGo,
      costBreakdown: destination.costBreakdown,
      itinerary: mood.itinerary,
      avoid: mood.avoid,
      revenue: destination.revenue,
      preview: {
        mustGo: destination.mustGo[0],
        cafe: (destination.cafeRecs || [])[0],
        hiddenGem: destination.hiddenGems[0],
        itinerary: mood.itinerary[0]
      },
      mood
    });
    return;
  }

  if (pathname === "/api/recommend" && req.method === "POST") {
    const input = await readBody(req);
    const result = recommendTrips(input, { destinations, packages });
    sendJson(res, 200, result);
    return;
  }

  if (pathname === "/api/curated/reddit") {
    const query = url.searchParams.get("q") || "Bali hidden cafes travel";
    const result = await searchReddit(query);
    sendJson(res, 200, result);
    return;
  }

  if (pathname === "/api/curated/google") {
    const query = url.searchParams.get("q") || "aesthetic travel hidden gems";
    const result = await searchGoogle(query);
    sendJson(res, 200, result);
    return;
  }

  serveStatic(res, pathname);
});

server.listen(port, "127.0.0.1", () => {
  console.log(`VibeTrip AI is live at http://127.0.0.1:${port}`);
});
