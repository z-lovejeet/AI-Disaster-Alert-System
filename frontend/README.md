# AI Disaster Alert & Predictive System — Frontend

This frontend is built with React + Vite + Tailwind CSS and includes a Leaflet map and Axios-based API integration.

## Quick start (on your machine)

1. Install Node.js (v18+ recommended) and npm.
2. Unzip or `cd` into the `frontend` folder.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start dev server:
   ```bash
   npm run dev
   ```
5. Open http://localhost:3000 in your browser.

## What you'll find
- `src/components` — reusable UI components (Navbar, AlertCard, MapView, RiskMeter)
- `src/pages` — Home, Alerts, Predictions, Contact
- `src/utils/api.js` — central API file (change `API_BASE_URL` to your backend URL)
- Tailwind is preconfigured in `tailwind.config.js`

## Notes
- Map uses `react-leaflet` and `leaflet`. When using Leaflet, import the CSS (already included in `main.jsx`).
- Replace API_BASE_URL in `src/utils/api.js` with your deployed backend URL (or localhost).
