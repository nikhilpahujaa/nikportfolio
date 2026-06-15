# Nikhil Pahuja — Portfolio

> Backend & AI Engineer building production-grade AI-integrated platforms and cloud-native APIs.

---

## About

**Nikhil Pahuja** · Gurgaon, India

- 📧 [nikhilpahuja75@gmail.com](mailto:nikhilpahuja75@gmail.com)
- 📱 +91 9821078067
- 🐙 [github.com/nikhilpahujaa](https://github.com/nikhilpahujaa)
- 💼 [linkedin.com/in/nikhilpahujaa](https://www.linkedin.com/in/nikhilpahujaa)
- 🌐 [nikportfolio.vercel.app](https://nikportfolio.vercel.app/)

---

## Portfolio Files

| File | Description |
|------|-------------|
| `index.html` | Standalone single-page portfolio (open in browser, no build needed) |
| `portfolio/` | Next.js portfolio app |

---

## Running the Next.js Portfolio

```bash
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Adding Project Screenshots

The project cards currently show placeholder boxes. To add real screenshots:

1. Take screenshots of [DataFlow](https://datafloww.vercel.app/) and [ExcelHire](https://excelhire.vercel.app/).
2. Save them as:
   - `portfolio/media/projects/dataflow.png`
   - `portfolio/media/projects/excelhire.png`
3. In `portfolio/lib/data.ts`, uncomment the image imports at the top and add `image: datafloImg` / `image: excelhireImg` to the matching project entries.

---

## Tech Stack

- **Frontend**: Next.js 16, React 19, Tailwind CSS v4
- **Animations**: Framer Motion
- **Fonts**: Pixelify Sans · Instrument Serif · Raleway (Google Fonts)
