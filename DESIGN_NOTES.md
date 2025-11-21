# Design Redesign Notes

## Overview
The website has been redesigned to adopt a cinematic, "Instagram-reel" style, inspired by editorial layouts and Claude ads. The focus is on large typography, minimal layout, and "film still" aesthetics.

## Key Changes

### 1. Typography
- **Headings**: Now use `Cormorant Garamond` (via Google Fonts). This is a high-contrast serif font that mimics the elegance of Didot or Playfair Display.
- **Body**: Uses `Geist Sans` (similar to Inter) for clean, readable text.
- **Styling**:
  - Headers (H1, H2) use `italic` styles and `tracking-tight` for a dramatic, editorial look.
  - "Cinematic" text animations (fade-up) added to the Hero section.

### 2. Color Palette
- **Theme**: "Warm Film" aesthetic.
  - Background: `#FDFCF8` (Warm Cream)
  - Text: `#1A1918` (Deep Charcoal)
  - Accent: `#C84B31` (Retro Red/Orange)
- **Dark Mode**: Deep brown/black tones for a rich, OLED-friendly cinema mode.

### 3. Layout & Components
- **Hero Section**: Refactored to be a full-screen "title card" with centered, large text (`Syntax. Systems. Soul.`).
- **Navigation**: Simplified to a transparent, floating header that becomes frosted on scroll.
- **Photo Gallery**: Updated to a dark-themed, horizontal scrolling section that mimics a film strip or gallery view.
- **Cards**: Removed heavy borders; switched to minimal, whitespace-driven layouts for Research and Projects.

### 4. Animations
- **CSS Animations**: Added `animate-fade-up` in `globals.css` for performant, simple text reveals.
- **Framer Motion**: Tuned `FadeIn` component for slower, smoother entry (1.2s duration).

## How to Customize

### Changing Fonts
Go to `app/layout.tsx` to import different Google Fonts.
Update `app/globals.css` variables:
```css
:root {
  --font-serif: ...; /* Change this variable */
}
```

### Changing Colors
Edit `app/globals.css` under the `:root` (light mode) or `@media (prefers-color-scheme: dark)` blocks.
- `--background`: Main page background.
- `--accent`: The highlight color (currently Retro Red).

### Adjusting Animations
- **CSS Keyframes**: Modify `@keyframes fade-up` in `app/globals.css`.
- **Scroll Reveal**: Adjust the `transition` prop in `app/components/FadeIn.tsx`.

