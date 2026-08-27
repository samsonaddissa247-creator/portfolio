# Addissa Samson — Portfolio Website

A personal portfolio website built with React, Vite, and Tailwind CSS.

## 1. What this project is

This is a single-page portfolio site with sections for Home, About, Skills,
Projects, Experience/Education, Certificates, and Contact. It's built to be
easy to read and easy to edit, even if you're still learning to code.

## 2. Technologies used

- **React** — builds the page out of small, reusable pieces called components
- **Vite** — runs the site locally and builds it for deployment
- **Tailwind CSS** — styles everything using small utility classes in the JSX
- **Lucide React** — the icon set used throughout the site

## 3. How to install it

You need [Node.js](https://nodejs.org) installed (version 18 or newer).

```bash
cd portfolio
npm install
```

This downloads all the packages the project needs into a `node_modules`
folder.

## 4. How to run it

```bash
npm run dev
```

This starts a local server (usually at `http://localhost:5173`). Open that
address in your browser. The page will automatically refresh whenever you
save a change to a file.

To build the production version (the files you'd actually upload to a host):

```bash
npm run build
```

This creates a `dist/` folder with the finished site.

## 5. How to change your personal information

Almost everything on the site comes from one file:

```
src/data/portfolioData.js
```

Open it and change:

- `name`, `role`, `tagline`
- `email`
- `socialLinks.github` and `socialLinks.linkedin`

Anything written as `YOUR_EMAIL@example.com`, `YOUR_GITHUB_URL`, etc. is a
placeholder — replace it with your real information. Nothing was invented
for you (no fake jobs, companies, or achievements).

## 6. How to add a project

Still in `src/data/portfolioData.js`, find the `projects` array and add a
new object, following the same shape as the ones already there:

```js
{
  title: "My New Project",
  description: "What the project does, in one or two sentences.",
  image: "/images/my-new-project.png",
  technologies: ["React", "Firebase"],
  demo: "https://your-demo-link.com",   // leave as "" if you don't have one yet
  github: "https://github.com/you/repo", // leave as "" if you don't have one yet
  caseStudy: "",                          // leave as "" if you don't have one yet
}
```

Put the matching image in `public/images/`. If a link is left as `""`, the
site automatically shows "Coming Soon" instead of a broken button — you
never need to make up a fake link.

## 7. How to add a certificate

Same idea, in the `certificates` array:

```js
{
  title: "Certificate Name",
  organization: "Issuing Organization",
  date: "2026",
  description: "One short sentence about it.",
  link: "https://your-certificate-link.com",
}
```

## 8. How to change your social links

All social links live in one place, inside `portfolioData`:

```js
socialLinks: {
  github: "YOUR_GITHUB_URL",
  linkedin: "YOUR_LINKEDIN_URL",
},
```

Change these two lines and every GitHub/LinkedIn icon on the site (navbar,
hero, contact section) updates automatically.

## 9. How to add your CV

1. Put your CV file in `public/documents/` and name it
   `Addissa-Samson-CV.pdf` (or update the file name in `portfolioData.js`
   under `cv.fileName`).
2. In `src/data/portfolioData.js`, set `cv.available` to `true`.

Until you do this, the "Download CV" button shows "CV Coming Soon" instead
of a broken download.

## 10. How to deploy it

The easiest options for a static Vite site:

- **Vercel** — connect your GitHub repo at vercel.com and it deploys
  automatically on every push.
- **Netlify** — same idea: connect the repo, or drag-and-drop the `dist/`
  folder after running `npm run build`.
- **GitHub Pages** — run `npm run build`, then publish the contents of
  `dist/` to a `gh-pages` branch (search "deploy Vite to GitHub Pages" for
  a step-by-step guide, since it needs one extra config setting).

## Project structure

```
portfolio/
│
├── public/
│   ├── images/          ← your project screenshots go here
│   └── documents/       ← your CV goes here
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Experience.jsx
│   │   ├── Certificates.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── icons/
│   │       └── BrandIcons.jsx   ← GitHub & LinkedIn logo icons
│   │
│   ├── data/
│   │   └── portfolioData.js     ← edit this file to update your info
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
└── README.md
```

## Notes

- Every button on this site does something real. Links that don't have a
  destination yet show "Coming Soon" rather than pretending to work.
- The color palette, fonts, and spacing are all controlled from
  `tailwind.config.js` if you ever want to adjust the overall look.
