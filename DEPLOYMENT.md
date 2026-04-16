# Deployment Guide (Vercel)

## 1. Prerequisites
- Node.js 20+
- A Vercel account connected to GitHub
- Repository pushed to GitHub

## 2. Local validation
Run these commands from the project root:

```powershell
npm install
npm run lint
npm run build
npm run start -- --port 3001
```

Open http://localhost:3001 and verify:
- hero + proof snapshot render
- project filters work
- contact/social links open correctly
- resume view/download links work

## 3. Deploy to Vercel
1. Import the GitHub repository in Vercel.
2. Framework preset: Next.js.
3. Build command: `npm run build`.
4. Output setting: default for Next.js.
5. Deploy.

## 4. Domain setup (optional)
1. Add your custom domain in Vercel Project Settings.
2. Point DNS records as instructed by Vercel.
3. Wait for SSL certificate issuance.

## 5. Post-deploy checks
- Open production URL and check all sections.
- Verify Open Graph preview by sharing the URL.
- Verify mobile navigation and section highlighting.
- Verify resume download route: `/resume/download`.

## 6. Recommended ongoing updates
- Keep `src/data/portfolio.ts` as source of truth for content.
- Replace placeholder project art in `public/projects` with real screenshots over time.
- Update experience and proof metrics whenever new achievements are available.
