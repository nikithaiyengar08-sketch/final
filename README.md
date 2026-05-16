# VibeTrip AI

A cinematic, Gen Z-coded travel discovery MVP for mood-first trip planning.

## Run

```bash
node backend/server.js
```

Open `http://127.0.0.1:5174`.

If that port is already occupied, run with another port:

```powershell
$env:PORT="5175"; node backend/server.js
```

## Optional Free Integrations

The backend works without keys using local curated data and AI-style scoring.

- Reddit: uses public Reddit JSON search through the backend.
- Google: set `GOOGLE_API_KEY` and `GOOGLE_CSE_ID` for Programmable Search.
- Hugging Face: set `HF_TOKEN` if you want hosted free-tier text generation later.

Copy `.env.example` to `.env` and fill keys when available.
