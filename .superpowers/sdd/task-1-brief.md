# Task 1: Scaffold project

**Files:**
- Create: C:\Users\Zeeshan Ahmed\me.catdevelopers.com\package.json
- Create: C:\Users\Zeeshan Ahmed\me.catdevelopers.com\tsconfig.json
- Create: C:\Users\Zeeshan Ahmed\me.catdevelopers.com\vite.config.ts
- Create: C:\Users\Zeeshan Ahmed\me.catdevelopers.com\wrangler.toml
- Create: C:\Users\Zeeshan Ahmed\me.catdevelopers.com\index.html
- Create: C:\Users\Zeeshan Ahmed\me.catdevelopers.com\src\main.tsx
- Create: C:\Users\Zeeshan Ahmed\me.catdevelopers.com\src\vite-env.d.ts
- Create: C:\Users\Zeeshan Ahmed\me.catdevelopers.com\.gitignore

**Steps with complete code:**

### Step 1: Create project directory
New-Item -ItemType Directory -Path "src" -Force
New-Item -ItemType Directory -Path "public\gallery" -Force
New-Item -ItemType Directory -Path "src\components" -Force

### Step 2: package.json
{
  "name": "me.catdevelopers.com",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "vite build && wrangler pages deploy dist"
  },
  "dependencies": {
    "react": "^19.2.0",
    "react-dom": "^19.2.0"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.3.0",
    "@types/react": "^19.1.0",
    "@types/react-dom": "^19.1.0",
    "@vitejs/plugin-react": "^6.0.0",
    "tailwindcss": "^4.3.0",
    "typescript": "^5.7.0",
    "vite": "^8.1.0",
    "wrangler": "^4.107.0"
  }
}

### Step 3: tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}

### Step 4: vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss(), react()],
});

### Step 5: wrangler.toml
name = "me-cat-developers"
compatibility_date = "2026-07-04"
compatibility_flags = ["nodejs_compat"]
pages_build_output_dir = "dist"

### Step 6: index.html
<!DOCTYPE html>
<html lang="en" class="dark">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#6366f1" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <title>Zeeshan Ahmed · me</title>
    <meta name="description" content="Personal time capsule — photos, memories, projects" />
    <meta property="og:title" content="Zeeshan Ahmed · me" />
    <meta property="og:description" content="Personal time capsule — photos, memories, projects" />
    <meta property="og:image" content="https://me.catdevelopers.com/zeeshan.webp" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:url" content="https://me.catdevelopers.com" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary" />
    <link rel="icon" type="image/webp" href="/favicon.webp" />
    <link rel="apple-touch-icon" href="/zeeshan.webp" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Sora:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  </head>
  <body class="bg-canvas text-ink">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

### Step 7: src/main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

### Step 8: src/vite-env.d.ts
/// <reference types="vite/client" />

### Step 9: .gitignore
node_modules/
dist/
.wrangler/

### Step 10: Install dependencies
Set-Location "C:\Users\Zeeshan Ahmed\me.catdevelopers.com" && npm install

### Step 11: Confirm build
Set-Location "C:\Users\Zeeshan Ahmed\me.catdevelopers.com" && npm run build

### Global Constraints
- Same CSS design tokens, animations, utilities as catdevelopers.com
- Separate project from catdevelopers.com
- Cloudflare Pages via wrangler with custom domain me.catdevelopers.com
- Personal time capsule — no portfolio/sales content
- Include CatEffects (Ripple, Waveform, CatEyes)
- Dark theme with indigo accent (#6366f1)
- Fonts: Inter (body), Sora (display)
