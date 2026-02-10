# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Created 2026-02-10 from a working version. 

## Project Overview

Personal website for Tabaré Capitán (https://www.tabarecapitan.com/) built with Quarto. The site covers causal inference, experimentation, and data science projects.

## Build Commands

```bash
quarto render    # Build site to docs/ directory
quarto preview   # Local development server with live reload
```

Output goes to `docs/` for GitHub Pages deployment.

## Architecture

**Content Structure:**
- `index.qmd` - Home/about page
- `blog/` - Technical blog posts (numbered directories like `0001-inference/`)
- `projects/` - Project documentation (ritest, mpa, insects)
- `papers/` - Academic publications
- `tools/` - Utility tools

**Configuration:**
- `_quarto.yml` - Main site config (navbar, sidebar, themes)
- `styles.css` - Custom CSS with light/dark theme variables
- `assets/` - Static images and theme toggle script

**Key Features:**
- Light/dark theme toggle (Flatly/Darkly themes)
- Sidebar navigation for ritest project documentation
- `freeze: auto` for caching long-running computations
- RSS feed for blog posts

## Content Format

All content is in Quarto markdown (`.qmd`) files with YAML front matter. Blog posts use category tags and the blog listing automatically generates from `blog/_metadata.yml`.

## Version control

Claude should never attribute authorship to Claude in git commits. Just use a descriptive message.

