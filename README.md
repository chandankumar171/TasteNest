# TasteNest Restaurant — React + Tailwind CSS

Pixel-accurate implementation of the Chandan / TasteNest Figma design.

---

## 📁 File Structure

```
tastenest/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        ← Fixed nav with scroll shadow + mobile menu
│   │   ├── Hero.jsx          ← Hero with inline reservation form
│   │   ├── About.jsx         ← Feel The Taste + Good Food + Sponsors
│   │   ├── Menu.jsx          ← Delicious Menus + Best Services
│   │   ├── DealOfWeek.jsx    ← Deal with live countdown + Private Dining
│   │   ├── Highlight.jsx     ← Red full-width promo section
│   │   ├── News.jsx          ← Recent News 3-col grid
│   │   ├── Reservation.jsx   ← Book a table form + contact info
│   │   └── Footer.jsx        ← 4-col footer + newsletter
│   ├── data/
│   │   └── menuData.js       ← All menu items, services, news data
│   ├── App.jsx               ← Root component assembling all sections
│   ├── index.js              ← ReactDOM entry point
│   └── index.css             ← Tailwind directives + global styles
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

---

## 🚀 Quick Start

### 1. Install dependencies

```bash
npm install
npm install -D tailwindcss postcss autoprefixer
```

### 2. Start dev server

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
```

---

## 🎨 Design Tokens

| Token     | Value       | Usage                      |
|-----------|-------------|----------------------------|
| Primary   | `#E8192C`   | Red — buttons, accents     |
| Yellow    | `#FFC224`   | Yellow — highlights, badges|
| Dark      | `#1a1a1a`   | Body text                  |
| Heading   | Playfair Display | Section headings       |
| Body      | DM Sans     | All body text              |

---

## 📦 Sections Implemented

| # | Section                    | Figma Screenshot |
|---|----------------------------|-----------------|
| 1 | Navbar (fixed, responsive) | Image 1         |
| 2 | Hero + Reservation Form    | Image 1         |
| 3 | Feel The Taste of Foods    | Image 2         |
| 4 | Good Food Steak            | Image 2         |
| 5 | Highly Trusted Sponsors    | Image 2         |
| 6 | Delicious Menus (3-col)    | Image 3         |
| 7 | We Provide Best Services   | Image 3         |
| 8 | Deal of the Week + Countdown| Image 4        |
| 9 | Private Dining & Events    | Image 4         |
|10 | Highlighting Features (Red)| Image 4         |
|11 | Recent News                | Image 5         |
|12 | Reservation Table Form     | Image 5         |
|13 | Footer + Newsletter        | Image 5         |

---

## 🔧 Customization

- **Menu items** → edit `src/data/menuData.js`
- **Colors** → edit `tailwind.config.js` and `src/index.css`
- **Images** → edit src/assets
- **Fonts** → change Google Fonts link in `public/index.html` and update `tailwind.config.js`
