# TRẦN VÕ HOÀNG NGUYÊN — Personal Branding Website

A production-ready personal branding website reflecting professionalism, technology, education, and artificial intelligence, built using **Microsoft Fluent Design Language** guidelines.

This is a frontend-only project with zero backend dependencies, optimized for deployment to **GitHub Pages**.

---

## 🚀 Quick Start & Installation

### Prerequisites
- [Node.js](https://nodejs.org) (v22 or later recommended)
- npm (v11 or later)

### Setup Instructions
1. **Clone or copy this repository** into your local workspace.
2. **Install all required dependencies**:
   ```bash
   npm install
   ```
3. **Start the local development server**:
   ```bash
   npm run dev
   ```
4. **Build the production package**:
   ```bash
   npm run build
   ```
5. **Preview the built package locally**:
   ```bash
   npm run preview
   ```

---

## 🛠 Technology Stack

- **Framework**: React 19 + Vite 8 + TypeScript (Strict Mode)
- **Styling**: TailwindCSS 3 + PostCSS (Fluent Design custom variables, light/dark/system mode)
- **Animations**: Framer Motion 12 (spring-based timing, exit transitions, and scroll reveals)
- **Routing**: React Router 7 (HashRouter for smooth GitHub Pages routing without server redirects)
- **Internationalization (i18n)**: i18next + react-i18next (Vietnamese/English translation configurations)
- **Forms**: React Hook Form + Zod (client-side subject & message validation)
- **Markdown**: React Markdown (clean rendering of raw markdown blog contents)
- **Icons**: Lucide React
- **Deployment**: GitHub Actions CI/CD automation

---

## 📂 Folder Structure

```
gioithieubanthan/
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions deploy workflow
├── public/
│   ├── favicon.svg          # Custom Fluent brand icon favicon
│   ├── robots.txt           # Search Engine crawl directives
│   └── sitemap.xml          # SEO Sitemap for crawling pages
├── src/
│   ├── assets/              # Static image placeholders asset space
│   ├── components/
│   │   ├── cards/           # AchievementCard, ResearchCard, ProjectCard
│   │   ├── common/          # ImagePlaceholder, ThemeSwitch, LanguageSwitch
│   │   ├── layout/          # Layout, Navbar, Footer
│   │   └── sections/        # Statistics, Timeline
│   ├── config/
│   │   ├── i18n.ts          # i18n language config
│   │   └── router.tsx       # Route definitions for all 11 pages
│   ├── constants/
│   │   └── data.ts          # Central source of truth site data constants
│   ├── hooks/
│   │   ├── useInView.ts     # Viewport entry hooks for animations
│   │   ├── useScrollToTop.ts# Scroll cleanup on page transition
│   │   └── useTheme.tsx     # Theme switcher hook (light/dark/system)
│   ├── locales/
│   │   ├── en/              # English i18n JSON
│   │   └── vi/              # Vietnamese i18n JSON
│   ├── pages/
│   │   ├── AboutPage.tsx
│   │   ├── AchievementsPage.tsx
│   │   ├── ActivitiesPage.tsx
│   │   ├── BlogDetailPage.tsx
│   │   ├── BlogPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── EducationPage.tsx
│   │   ├── GalleryPage.tsx
│   │   ├── HomePage.tsx
│   │   ├── LibraryPage.tsx
│   │   ├── ProjectsPage.tsx
│   │   └── ResearchPage.tsx
│   ├── types/
│   │   └── index.ts         # Central TypeScript interfaces
│   ├── lib/
│   │   └── utils.ts         # twMerge + clsx helper function
│   ├── App.tsx              # Wrapper for ThemeProvider & AppRouter
│   ├── index.css            # Custom CSS variables, Acrylic/Mica effects
│   └── main.tsx             # Application entry point
├── index.html               # Main index with SEO meta tags & Structured Data
├── package.json             # Core dependency manifest
├── tailwind.config.js       # Tailwind system configs with Fluent tokens
└── tsconfig.json            # Central TS compiler configuration
```

---

## 🌐 GitHub Pages Deployment Guide

The project is fully prepared for continuous deployment to GitHub Pages via **GitHub Actions**.

### Steps to Deploy
1. Create a repository on GitHub (e.g. `tranvohoanguyen.github.io` or `portfolio`).
2. Push your local files to the `main` branch.
3. In your GitHub Repository, navigate to **Settings** -> **Pages**.
4. Under **Build and deployment** -> **Source**, select **GitHub Actions**.
5. The deployment workflow `.github/workflows/deploy.yml` will trigger automatically, build the bundle, and publish it to GitHub Pages.

---

## 🎨 Design Guidelines (Microsoft Fluent Design)

To retain the professional feel of a premium Microsoft digital experience:
- **Clean Elevation**: Uses shadows like `shadow-fluent-4` and `shadow-fluent-8` to elevate hover actions.
- **Micro-Animations**: Scroll reveals via `Framer Motion` and custom CSS animation delays.
- **Glassmorphism**: Elements like `acrylic` utilize backdrop blurs to overlay content elegantly.
- **Graceful Failbacks**: The `ImagePlaceholder` component guarantees that your layout remains responsive and unified even if specific image links are missing.
