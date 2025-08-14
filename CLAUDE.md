# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a CRM Kanban board application built with Next.js 15.4.6 using the App Router architecture. The project uses TypeScript with strict mode enabled and Tailwind CSS v4 for styling.

## Development Commands

```bash
# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Architecture

### Tech Stack
- **Framework**: Next.js 15.4.6 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 with PostCSS
- **React**: Version 19.1.0

### Project Structure
- `/src/app/` - App Router pages and layouts
  - `layout.tsx` - Root layout with Geist fonts configuration
  - `page.tsx` - Home page component
  - `globals.css` - Global styles with Tailwind imports
- `/public/` - Static assets (SVG icons)

### Key Configuration
- **TypeScript**: Strict mode enabled with path alias `@/*` pointing to `./src/*`
- **ESLint**: Configured with Next.js recommended rules
- **Fonts**: Uses Geist Sans and Geist Mono fonts via next/font

## Development Notes

The application is currently a fresh Next.js installation with the default template. Main entry point is `src/app/page.tsx` which auto-updates on file changes during development.
- Don't ask to run npm dev, it's usually running already.