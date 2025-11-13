# Dynamic Product Filter & Cart

A minimal React + Vite app that showcases a filterable product grid and a simple shopping cart. The UI is styled to be modern, clean, and responsive across mobile, tablet, and desktop.

## Features
- Filter products by category (All, Electronics, Books, Clothing)
- Add items to cart; identical items increment quantity
- Remove items from the cart
- Cart total updates automatically
- Fully responsive layout
- Product list centered on small screens

## Tech Stack
- React 18
- Vite 5
- Vanilla CSS (no frameworks)

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Install
```bash
npm install
```

### Development
```bash
npm run dev
```
- Local: http://localhost:5173

### Production build
```bash
npm run build
npm run preview
```
- Preview: http://localhost:5173 (default)

## Project Structure
```
.
├─ index.html
├─ package.json
├─ vite.config.js
├─ App.jsx          # Main UI and logic
├─ App.css          # All styles (responsive, modern look)
└─ main.jsx         # React entry
```

## Design Notes
- Layout: two panels on desktop (Product List + Cart). On mobile, panels stack with the cart at the bottom.
- Product list uses rounded cards, soft shadows, and pill buttons.
- Category filter buttons are rounded; active/hover states use a blue accent.
- Cart rows are clean with a red accent for prices and Remove action.
- Images use a subtle background and rounded corners to match cards.

## Responsiveness
- ≤768px: column layout; centered product list; 2-column grid
- ≤480px: single-column grid; cart full width under list
- Cart is explicitly ordered after the product list on mobile

## Image URLs
- Use direct image URLs (e.g., images.unsplash.com or a .jpg/.png). Page links (unsplash.com, pin.it, Google share links) will not render as images.
- Update product image links in `App.jsx` if you want different pictures.

## Scripts
- `npm run dev` – start dev server
- `npm run build` – create production build
- `npm run preview` – preview the build

## Troubleshooting
- If images don’t show, verify the URL returns an actual image (open it in a new tab).
- If the dev server port is in use, change it in `vite.config.js` or stop the other process.
- If styles don’t update, hard refresh the browser (cache).

## License
This project is for demonstration/learning purposes. Adjust as needed for your use case.
