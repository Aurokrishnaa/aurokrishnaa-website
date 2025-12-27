# Aurokrishnaa Ravindran Lakshmi - Portfolio Website

This is my personal portfolio website - a space where I bring together my work in financial analytics, quantitative finance, and applied research. It's built to give recruiters, collaborators, and fellow finance professionals a clear picture of what I do and how I think.

**Live:** [aurokrishnaa.me](https://aurokrishnaa.me)

---

## What You'll Find Here

The site covers my professional journey across derivatives pricing, fixed income analytics, portfolio optimization, algorithmic trading, and financial modeling. Each section is designed to show depth without overwhelming - whether you're skimming for highlights or digging into project details.

### Sections

| Section | What It Covers |
|---------|----------------|
| **Hero** | Quick intro - who I am, what I do, credentials at a glance |
| **Education** | MS Finance (Quant) from UB, MBA from Anna University, and more |
| **Experience** | Professional roles in analytics, research, and finance |
| **Projects** | 25+ applied projects - derivatives, portfolio theory, NLP, trading systems |
| **Research** | Published work including Black-Scholes-Merton analysis and banking thesis |
| **Resume** | Embedded PDF viewer with download option |
| **Contact** | Direct links to reach me |

---

## Tech Stack

The frontend is built with modern tooling for performance and clean animations:

```
React 19          UI framework with component architecture
Vite              Build tool - fast HMR, optimized production builds
Tailwind CSS 4    Utility-first styling with custom design tokens
Framer Motion     Physics-based animations and page transitions
React Router 7    Client-side routing with smooth navigation
```

### Project Structure

```
src/
├── components/
│   ├── Hero.jsx           # Landing section with animated orbs
│   ├── Education.jsx      # Academic timeline with coursework expansion
│   ├── Experience.jsx     # Professional roles and highlights
│   ├── Projects.jsx       # Filterable project grid (25+ entries)
│   ├── Research.jsx       # Published papers with external links
│   ├── Contact.jsx        # Social links and contact form
│   ├── Navbar.jsx         # Responsive navigation with mobile drawer
│   └── Sidebar.jsx        # Quick-access social icons
│
├── pages/
│   └── Resume.jsx         # PDF embed with mobile-optimized viewer
│
├── data/
│   ├── profile.js         # Personal info, social links, bio
│   ├── education.js       # Degrees, coursework by category
│   ├── experience.js      # Roles, companies, achievements
│   └── projects.js        # 25+ projects with tools and details
│
├── utils/
│   └── smoothScroll.js    # Custom eased scroll behavior
│
├── App.jsx                # Route definitions and layout
├── index.css              # Tailwind config, custom animations
└── main.jsx               # React entry point
```

```
public/
├── profile.jpg              # Profile image
├── Resume_Aurokrishnaa.pdf  # Downloadable resume
└── favicon.svg              # Custom monogram icon
```

---

## Featured Projects

A few highlights from the projects section:

**Derivatives & Pricing**
- Black-Scholes-Merton option pricing with Greeks computation and Delta hedging
- VIX Index replication using SPX options and variance swap formulas in R
- Pershing Square pandemic trade analysis - CDS structures and payoff asymmetry

**Portfolio & Risk**
- Multi-asset portfolio optimization with Monte Carlo simulation (1,000 paths)
- Value at Risk modeling with historical simulation and parametric methods
- Strategic long-short portfolio design targeting behavioral alpha

**FinTech & Automation**
- Algorithmic trading via IBridgePy with live IBKR integration
- NLP sentiment analysis on earnings calls using LLMs
- Interactive SHINY dashboards for technical analysis

**Fixed Income**
- Large-scale swap portfolio modeling in Yield Book
- Bond analytics with duration, convexity, OAS, and spread analysis

---

## Local Development

Clone and install:

```bash
git clone https://github.com/Aurokrishnaa/Personal-Website.git
cd Personal-Website
npm install
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

The build outputs to `dist/` - static files ready for deployment.

---

## Deployment

Hosted on GitHub Pages with a custom domain. The production build is generated from the `main` branch and served at [aurokrishnaa.me](https://aurokrishnaa.me).

---

## Connect

I'm always open to conversations about quant finance, analytics roles, or interesting problems.

| Platform | Link |
|----------|------|
| LinkedIn | [linkedin.com/in/aurokrishnaa](https://www.linkedin.com/in/aurokrishnaa/) |
| GitHub | [github.com/Aurokrishnaa](https://github.com/Aurokrishnaa) |
| Blog | [auronomics.com](https://auronomics.com) |
| X (Twitter) | [x.com/Aurokrishnaa](https://x.com/Aurokrishnaa) |
| Email | aurokrishnaa2000@gmail.com |

---

## Screenshot

![Website Preview](screenshot.png)

*Add a screenshot named `screenshot.png` to display a preview here.*
