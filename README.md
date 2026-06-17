# Zohaib Mahar — Portfolio

React + Vite + Tailwind CSS portfolio website. Frontend-only — no backend required.

## Setup

```bash
npm run install:all
npm run dev
```

Visit: http://localhost:5173

## Build for Production

```bash
npm run build
```

Output goes to `client/dist`

## Project Structure

```
zohaib-portfolio/
├── client/
│   ├── public/
│   │   ├── zohaib.jpg       # Profile photo
│   │   └── zohaib_cv.pdf    # Add your CV here
│   ├── src/
│   │   ├── sections/        # Hero, About, Skills, Projects, Experience, Education, Contact, etc.
│   │   ├── components/      # Navbar, Footer, LoadingScreen, ScrollToTop, WhatsAppButton, ZMLogo, CursorGlow
│   │   ├── context/         # LanguageContext (Urdu/English toggle)
│   │   ├── hooks/           # useScrollReveal
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── tailwind.config.js
│   └── vite.config.js
├── vercel.json
└── package.json
```

## Contact Form

Uses a `mailto:` link — clicking "Send Message" opens the user's default email app with the message pre-filled. No backend or API needed.

## Deploy to Vercel

1. Push this project to GitHub
2. Import the repo on vercel.com
3. Vercel auto-detects settings from `vercel.json`:
   - Build Command: `cd client && npm install && npm run build`
   - Output Directory: `client/dist`
4. Click Deploy

## Notes

- Add your CV as `client/public/zohaib_cv.pdf`
- GitHub Stats section is commented out in `App.jsx` — uncomment once you have public repos
- WhatsApp number and contact details are in `client/src/sections/Contact.jsx` and `client/src/components/WhatsAppButton.jsx`
