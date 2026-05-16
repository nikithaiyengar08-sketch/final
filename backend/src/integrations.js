export async function searchReddit(query) {
  const url = `https://www.reddit.com/search.json?q=${encodeURIComponent(query)}&sort=relevance&limit=6`;
  try {
    const response = await fetch(url, {
      headers: { "User-Agent": "VibeTripAI/1.0 travel discovery MVP" }
    });
    if (!response.ok) throw new Error(`Reddit ${response.status}`);
    const data = await response.json();
    const items = data.data.children.map(({ data: post }) => ({
      title: post.title,
      source: `r/${post.subreddit}`,
      url: `https://reddit.com${post.permalink}`,
      score: post.score
    }));
    return { provider: "reddit", live: true, items };
  } catch {
    return {
      provider: "reddit",
      live: false,
      items: [
        { title: "Try searching Reddit for recent cafe and safety threads before booking.", source: "fallback", url: "https://www.reddit.com/search/" },
        { title: "Look for posts less than 12 months old; travel prices age quickly.", source: "fallback", url: "https://www.reddit.com/r/travel/" }
      ]
    };
  }
}

export async function searchGoogle(query) {
  const key = process.env.GOOGLE_API_KEY;
  const cx = process.env.GOOGLE_CSE_ID;
  if (!key || !cx) {
    return {
      provider: "google",
      live: false,
      needsKeys: true,
      items: [
        { title: "Add GOOGLE_API_KEY and GOOGLE_CSE_ID to enable Google Programmable Search.", source: "setup", url: "https://programmablesearchengine.google.com/" }
      ]
    };
  }

  const url = `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${encodeURIComponent(query)}&num=6`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Google ${response.status}`);
    const data = await response.json();
    const items = (data.items || []).map((item) => ({
      title: item.title,
      source: new URL(item.link).hostname.replace("www.", ""),
      url: item.link,
      snippet: item.snippet
    }));
    return { provider: "google", live: true, items };
  } catch {
    return { provider: "google", live: false, items: [] };
  }
}
