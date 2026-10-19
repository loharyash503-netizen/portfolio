# Yash Lohar — UI/UX Portfolio

Next.js 16 (App Router) + Tailwind CSS 4. Dark theme inspired by antonmanaev.name.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # production
```

## Where things live

| What | File |
| --- | --- |
| All text: bio, skills, education, projects, links | `src/data/portfolio.ts` |
| Profile photo | `public/yash.jpg` (portrait, any size; cropped to 4:5) |
| Project cover images | `public/covers/<slug>.jpg` (16:10) |
| Full case-study boards (exported from Figma, sliced) | `public/work/<slug>/NN.jpg` + `src/data/boards.ts` |
| Home sections | `src/components/home/*` |
| Case-study page | `src/app/work/[slug]/page.tsx` |
| Colours, fonts, animations | `src/app/globals.css` (`@theme` block) |

## Adding a project

1. Add an entry to `projects` in `src/data/portfolio.ts`.
2. Drop a 16:10 cover in `public/covers/`.
3. For a full case-study page, set `board: true`, put slices in `public/work/<slug>/` and list them in `src/data/boards.ts`.
   Projects without a board link to Behance instead (or show "coming soon").

## Deploy

Push to GitHub and import the repo on [Vercel](https://vercel.com/new) — no config needed.
