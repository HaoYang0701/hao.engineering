# hao.engineering — Personal Landing Page Design Spec

## Overview

A single-page professional landing page at `hao.engineering`. Dark, minimal aesthetic inspired by the Monokai color theme. Static HTML/CSS/JS hosted on GitHub Pages with a custom domain via Namecheap DNS.

## Goals

- Professional engineering presence at a clean, memorable domain
- Fast, lightweight, dependency-minimal site
- Monokai-inspired dark theme that feels like a polished code editor
- Fully responsive (mobile through desktop)

## Color Palette (Monokai)

| Token         | Hex       | Usage                                      |
|---------------|-----------|---------------------------------------------|
| Background    | `#272822` | Page background                             |
| Foreground    | `#F8F8F2` | Primary text                                |
| Green         | `#A6E22E` | Links, highlights, hover states, accent      |
| Cyan          | `#66D9EF` | Tags, labels, secondary accent              |
| Orange        | `#FD971F` | Occasional emphasis                         |
| Pink          | `#F92672` | Sparingly for interactive elements          |
| Comment Gray  | `#75715E` | Muted/secondary text                        |

## Typography

- **Headings / decorative text:** JetBrains Mono (Google Fonts, monospace)
- **Body text:** Inter (Google Fonts, sans-serif)
- Base font size: 16px, scale up for headings

## Sections

### 1. Hero (full viewport height)

- Large monospace name: **Hao Yang** (or preferred display name)
- Tagline typed out using Typed.js, styled like a code comment: `// software engineer`
  - Can cycle through multiple phrases (e.g., `// software engineer`, `// problem solver`, `// builder`)
- Blinking cursor animation (pure CSS)
- Subtle faded code snippet or syntax-highlighted text as background texture
- Scroll-down indicator (animated chevron) at the bottom

### 2. Experience

- Vertical timeline layout, most recent first
- Each entry is a card with:
  - Company name (Monokai green)
  - Job title (foreground white)
  - Date range (comment gray)
  - 2-3 bullet points of highlights
- Cards have a subtle left border accent in Monokai colors
- Cards fade/slide in on scroll via AOS

### 3. Featured Projects

- 2-3 project cards in a responsive grid (1 column mobile, 2-3 columns desktop)
- Each card contains:
  - Project name
  - Short description (1-2 sentences)
  - Tech tags styled like syntax tokens (cyan, green, orange pill badges)
  - Link to repo or live demo (with Lucide ExternalLink icon)
- Cards have subtle Monokai green glow on hover (`box-shadow`)
- Cards animate in on scroll via AOS

### 4. Links

- Horizontal row of icon+label links
- GitHub, LinkedIn, and any other profiles
- Icons from Lucide (inlined SVGs)
- Monokai green hover effect (color transition)
- Monospace labels next to each icon

### 5. Contact

- Email presented as a stylized function call: `hao.contact("email")` in monospace
- Clicking triggers `mailto:` link
- Styled with Monokai syntax coloring (function name in green, string in orange, parens in foreground)
- Optional: brief line above like `// get in touch`

### 6. Footer

- Minimal, in Monokai comment gray
- Text like `// built by hao` or `// 2026`
- Centered, small font

## Libraries & Assets

| Library       | Size  | Purpose                              | Delivery        |
|---------------|-------|--------------------------------------|-----------------|
| Typed.js      | ~4kb  | Hero tagline typing animation        | CDN             |
| AOS           | ~6kb  | Scroll-triggered section animations  | CDN             |
| Lucide        | ~5kb  | SVG icons (GitHub, LinkedIn, etc.)   | Inlined SVGs    |
| JetBrains Mono| —     | Monospace heading font               | Google Fonts    |
| Inter         | —     | Body text font                       | Google Fonts    |

Total JS/CSS library weight: ~15kb. No frameworks.

## CSS Details

- **Background texture:** Subtle noise or grain overlay via CSS (tiny repeating SVG or CSS gradient noise pattern) for depth
- **Card hover glow:** `box-shadow: 0 0 20px rgba(166, 226, 46, 0.15)` on hover, with transition
- **Scroll snap:** `scroll-snap-type: y proximity` on the body for satisfying section-to-section scrolling on mobile
- **Smooth scroll:** `scroll-behavior: smooth` globally
- **Section spacing:** generous vertical padding (80-120px) between sections
- **Max content width:** ~800px centered, with responsive padding

## Responsive Behavior

- **Mobile (<768px):** Single column, stacked sections, full-width cards, hamburger not needed (single page with scroll)
- **Tablet/Desktop (>=768px):** Project grid expands to 2-3 columns, experience timeline gets more horizontal breathing room

## File Structure

```
hao.engineering/
├── index.html          # Single HTML file with all sections
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # AOS init, Typed.js init, smooth scroll, cursor animation
├── assets/
│   └── favicon.ico     # Favicon
├── CNAME               # Contains: hao.engineering
└── README.md           # Repo description
```

## Hosting & DNS Setup

### GitHub Pages
1. Create GitHub repo (e.g., `hao.engineering`)
2. Push site files to `main` branch
3. Enable GitHub Pages: Settings > Pages > Source: `main` branch, root `/`
4. Add `CNAME` file containing `hao.engineering`
5. GitHub auto-provisions HTTPS via Let's Encrypt

### Namecheap DNS
Configure in Namecheap dashboard (Advanced DNS):

| Type  | Host  | Value                      |
|-------|-------|----------------------------|
| A     | @     | 185.199.108.153            |
| A     | @     | 185.199.109.153            |
| A     | @     | 185.199.110.153            |
| A     | @     | 185.199.111.153            |
| CNAME | www   | `<github-username>.github.io` |

DNS propagation may take up to 48 hours. HTTPS certificate provisioning happens automatically after DNS resolves.

## Performance Targets

- Lighthouse score: 100 across all categories
- First Contentful Paint: <1s
- Total page weight: <100kb (excluding fonts)
- Zero JavaScript frameworks, zero build step

## SEO & Meta Tags

- `<meta name="description">` with a short professional summary
- Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`) for link previews
- `<meta name="theme-color" content="#272822">` for browser chrome
- Favicon: monospace "H" in Monokai green on dark background
- Custom `404.html` matching the site theme (redirects to index)

## Content Placeholders

The following need to be filled in during implementation:
- GitHub username (for DNS CNAME and links)
- Email address (for contact section mailto)
- Actual work experience entries
- Actual featured projects
- LinkedIn URL and any other profile links

## Animation Configuration

- **Typed.js:** `typeSpeed: 50`, `backSpeed: 30`, `loop: true`, `startDelay: 500`
- **AOS:** `fade-up` animation, `duration: 800`, stagger with `delay` increments of 100ms per card
- **Hover glow:** `transition: box-shadow 0.3s ease`

## Out of Scope

- Blog functionality
- CMS or admin panel
- Analytics (can be added later with a single script tag)
- Contact form with backend (using mailto instead)
- Dark/light mode toggle (dark only)
