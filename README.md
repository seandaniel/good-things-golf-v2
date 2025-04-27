## ⚙️ Tech Used

- React
- Vite
- TypeScript
- Sass

## 🛠️ Getting Started

Make sure you have the following installed:
```
Node.js >= 16
npm
```
Install once the repository is cloned locally:
```
npm install
```
Run locally:
```
npm run dev
```
The app will be available at: [http://localhost:5173/](http://localhost:5173/)

## 📁 Folder Structure

```
src/
├── assets/                  # Image assets for the masonry photo grid
│   ├── best-min.jpg
│   ├── bigCat-min.jpg
│   ├── carts-min.jpg
│   ├── colors-min.jpg
│   ├── dart-min.jpg
│   ├── gambleSands-min.jpg
│   ├── ghostrider-min.JPG
│   ├── goldenHour-min.jpg
│   ├── golfHole.svg
│   ├── leafy-min.jpg
│   ├── lores.ttf
│   ├── pins-min.jpg
│   ├── pullback-min.jpg
│   ├── pushCartMafia-min.jpg
│   ├── scholars-min.jpg
│   ├── shannonLake-min.JPG
│   ├── sundayBag-min.jpg
│   ├── theRise-min.jpg
│   ├── uberflip-min.jpg
│   └── wasteland-min.jpg
├── components/
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Main.tsx             # Masonry photo grid
│   └── Single.tsx           # Single photo page when photo in masonry grid is clicked
├── data/
│   └── images.ts
├── partials/                # All components have their individual partial
│   ├── _footer.scss
│   ├── _global.scss         # Applies across all components
│   ├── _header.scss
│   ├── _main.scss
│   ├── _setup.scss          # For browser consistency 
│   ├── _single.scss
│   └── _variables.scss
├── App.tsx                  # Home page directory
├── index.scss               # All Sass partial imports   
└── main.tsx
```
