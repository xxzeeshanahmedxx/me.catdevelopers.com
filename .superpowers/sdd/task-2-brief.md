# Task 2: Create design system (index.css)

**Files:**
- Modify: C:\Users\Zeeshan Ahmed\me.catdevelopers.com\src\index.css

**Steps:**

1. Copy index.css from catdevelopers.com:
   Copy-Item "C:\Users\Zeeshan Ahmed\catdevelopers.com\src\index.css" "C:\Users\Zeeshan Ahmed\me.catdevelopers.com\src\index.css" -Force

2. Run npm run build to verify

3. Commit: git commit -am "feat: add design system tokens and animations"

The index.css contains:
- Tailwind v4 @import
- @theme block with colors (bg #08080a, surface #0d0d12, elevated #13131a, overlay #1a1a22, ink #fafafa, accent #6366f1 etc.), fonts (Inter, Sora, JetBrains Mono), easings, radii
- Base html/body dark styles
- Background layers (bg-mesh, bg-dots, bg-noise)
- Keyframe animations: fadeUp, fadeIn, scaleIn, float, pulse-glow, gradient-shift, reveal-up, waveform
- Utility classes: animate-fade-up, animate-scale-in, animate-float, animate-pulse-glow, animate-gradient, reveal, glass, text-gradient, text-gradient-accent, card-glow, card-glow-accent, section-label, section-heading, section-subheading, animate-waveform
