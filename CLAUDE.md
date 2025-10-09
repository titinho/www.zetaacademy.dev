# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this
repository.

## Project Overview

Zeta Academy is a static multilingual educational website offering programming courses and learning
paths. The site is built with vanilla HTML, CSS, and JavaScript, with no build system or framework
dependencies.

## Architecture

### Multilingual Structure

The site supports multiple languages through a directory-based structure:

- Root `index.html` detects browser language and redirects to appropriate locale
- Language directories: `en/`, `hu/`, `de/`
- Each language has its own complete page structure

### Directory Organization

```tree
/
├── assets/
│   └── styles/
│       ├── base/          # CSS variables, reset, base styles
│       ├── components/    # Reusable UI components
│       └── layouts/       # Page-specific layouts
├── scripts/
│   ├── components/        # JavaScript component classes
│   └── pages/             # Page-specific scripts
├── en/                    # English content
├── hu/                    # Hungarian content
└── de/                    # German content
```

### Content Types

1. **Home pages**: Landing pages with course listings and learning paths
2. **Course pages**: Course overview with lesson listings (e.g.,
   `en/courses/javascript-for-beginners/index.html`)
3. **Lesson pages**: Individual lesson content with navigation and sidebar (e.g.,
   `en/courses/.../lessons/01-hello-javascript/index.html`)
4. **Path pages**: Learning path overviews (e.g., `en/paths/javascript.html`)

### CSS Architecture

- **Mobile-first approach**: All styles start with mobile layout
- **CSS Variables**: Defined in `assets/styles/base/variables.css` using RGB components for alpha
  transparency
- **Component-based**: Separate files for header, footer, buttons, code blocks, etc.
- **Layout system**: Different layouts for home, course, and lesson pages

Each HTML page manually imports required stylesheets in dependency order (variables → reset → base
→ layout → components).

### JavaScript Architecture

- **ES6 Modules**: All JavaScript uses native ES modules (`type="module"`)
- **Component classes**: UI components like `NavBar` and `AnnouncementBar` are instantiated on
  `DOMContentLoaded`
- **Entry point**: `scripts/main.js` initializes page components
- **No bundler**: Direct browser module imports

Key components:

- `NavBar`: Handles responsive navigation with hamburger menu
- `AnnouncementBar`: Dismissible warning/info bars

## Development Commands

### Code Quality

```bash
# Format all code (99 character line width)
npx prettier --write .

# Lint CSS
npx stylelint "**/*.css" --fix
```

### Local Development

Since this is a static site with no build process:

1. Use any local web server (e.g., `python -m http.server`, `npx serve`, VS Code Live Server)
2. Navigate to `http://localhost:PORT/` to test language detection
3. Direct navigation to specific locales: `http://localhost:PORT/en/` or
   `http://localhost:PORT/hu/`

## Content Conventions

### Relative Path Management

Pages at different nesting levels require different relative paths:

- Root pages: `./assets/styles/...`
- Language pages (`en/index.html`): `../assets/styles/...`
- Course pages: `../../assets/styles/...`
- Lesson pages: `../../../../../assets/styles/...`

Always verify path depth when creating new pages.

### Multilingual Content

- All user-facing content must be translated across all supported languages
- Navigation labels, course descriptions, and UI text vary by language
- Footer copyright and social links are consistent across languages

### Asset URLs

- Icons and images are hosted on AWS S3: `https://zetaacademy.s3.eu-central-1.amazonaws.com/`
- Categories: `icons/brand/`, `icons/programming-languages/`, `icons/tooling/`,
  `icons/fontawesome/`, `icons/social/`

## Important Notes

- **No package.json**: This is intentional - site has no npm dependencies
- **No build step**: HTML/CSS/JS are served directly
- **Analytics**: Google Analytics (G-H2GDYC1PFY) is integrated on all pages
- **Font**: Montserrat from Google Fonts is used throughout
- **Line width**: Prettier configured to 99 characters (`printWidth: 99`)
