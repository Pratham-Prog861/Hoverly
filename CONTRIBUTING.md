# Contributing to Hoverly

Thank you for your interest in contributing to Hoverly! This document provides guidelines and instructions for contributing to the project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Ways to Contribute](#ways-to-contribute)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Coding Standards](#coding-standards)
- [Adding New Icons](#adding-new-icons)
- [Making Changes](#making-changes)
- [Submitting Changes](#submitting-changes)
- [Bug Reports](#bug-reports)
- [Feature Requests](#feature-requests)

## Code of Conduct

This project and everyone participating in it is governed by the [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to @Pratham-Prog861 (GitHub).

## Getting Started

### Prerequisites

- Node.js 18+ and pnpm/npm
- Git for version control
- A code editor (VS Code recommended)
- Basic knowledge of Next.js, Typescript, motion, and shadcn/ui

## Ways to Contribute

You can contribute to Hoverly in two ways:

### 1. Improving Functionality / Optimizing the Website

- Fix bugs
- Improve performance
- Add new features
- Enhance UI/UX
- Improve accessibility

### 2. Adding New Icons

See the [Adding New Icons](#adding-new-icons) section for detailed steps.

## Development Setup

### Fork and Clone

```bash
git clone https://github.com/Pratham-Prog861/hoverly.git
cd hoverly
```

### Install Dependencies

```bash
pnpm install
# or npm install
```

### Start Development Server

```bash
pnpm dev
# or npm run dev
```

### Open in Browser

Navigate to http://localhost:3000

## Project Structure

```bash
hoverly/
├── src/
│   ├── app/                    # Next.js App Router
│   ├── components/             # React components
│   │   ├── layout/             # Layout sections
│   │   ├── landing/            # Landing page sections
│   │   ├── icons/              # Icon UI components
│   │   └── ui/                 # Reusable UI primitives
│   ├── icons/                  # Animated icon components
│   ├── lib/                    # Utilities and helpers
│   └── hooks/                  # Custom hooks
├── scripts/                    # Build scripts for registry
├── public/                     # Static assets
└── registry.json               # shadcn CLI registry
```

## Coding Standards

### TypeScript

- Use TypeScript for all new code
- Define types and interfaces for all data structures
- Avoid `any` types
- Use type inference where appropriate

### React

- Use functional components with hooks
- Use `forwardRef` for icon components
- Keep components focused and single-purpose
- Extract reusable logic into custom hooks

### Code Style

- Follow existing code style and patterns
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused

### File Naming

- Components: `kebab-case.tsx` (e.g., `github-icon.tsx`)
- Utilities: `kebab-case.ts` (e.g., `icon-names.ts`)

### Linting and Formatting

```bash
# Check for linting errors using Biome
npm run lint

# Format code
npm run format
```

Always run `npm run lint` before committing your changes.

### Import Organization

```tsx
// 1. React and Next.js
import { forwardRef, useImperativeHandle } from "react";
import Link from "next/link";

// 2. Third-party libraries
import { motion, useAnimate } from "motion/react";

// 3. Internal components and utilities
import type { AnimatedIconProps } from "./types";
import { cn } from "@/lib/utils";
```

## Adding New Icons

### Step 1: Create the Icon Component

Create a new file in the `src/icons/` directory. Follow the exact same pattern as existing icons:

```tsx
import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const YourIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = async () => {
      await animate(".icon-group", { scale: 1.1 }, { duration: 0.3 });
    };

    const stop = () => {
      animate(".icon-group", { scale: 1 }, { duration: 0.2 });
    };

    useImperativeHandle(ref, () => ({
      startAnimation: start,
      stopAnimation: stop,
    }));

    return (
      <motion.svg
        ref={scope}
        onHoverStart={start}
        onHoverEnd={stop}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`inline-flex cursor-pointer items-center justify-center ${className}`}
        style={{ overflow: "visible" }}
      >
        <motion.g className="icon-group" style={{ transformOrigin: "center" }}>
          {/* Your SVG paths here */}
        </motion.g>
      </motion.svg>
    );
  },
);

YourIcon.displayName = "YourIcon";
export default YourIcon;
```

Key requirements:

- Use `forwardRef` with `AnimatedIconHandle` from `./types`
- Use `motion/react` for animations
- Implement `startAnimation` and `stopAnimation` via `useImperativeHandle`
- Check existing icons in `src/icons/` for reference

### Step 2: Register the Icon

Add your icon to `src/lib/icons.ts` (ICONS array for routing):

```tsx
{
  name: "your icon",
  path: "/icons/your-icon",
  // additional metadata as it fits in your structure
}
```

### Step 3: Build Registry

```bash
npm run registry:build
```

This command:

1. **Generates `registry.json`** from `src/icons/`
2. Validates against missing icons in `src/lib/icons.ts` metadata

Wait for it to succeed before proceeding.

### Step 4: Run All Checks

```bash
npm run format
npm run lint
npm run build
```

### Step 5: Create PR

See [Submitting Changes](#submitting-changes) section.

## Testing

Before submitting your changes, verify that icons work correctly:

### Visual Testing (Doc Site)

1. Start the dev server:

   ```bash
   npm run dev
   ```

2. Open http://localhost:3000/icons in your browser

3. Verify:
   - Your icon appears in the gallery
   - Hover animations work correctly
   - No console errors appear
   - Click on the icon to view its detail page

### Testing as a Library Consumer

To verify icons work when installed via the shadcn CLI:

1. Create a test project:

   ```bash
   npx create-next-app@latest test-consumer --typescript --tailwind --app
   cd test-consumer
   npm install motion
   npx shadcn@latest init --defaults
   ```

2. Add an icon from your local registry:

   ```bash
   npx shadcn@latest add "http://localhost:3000/r/your-icon.json"
   ```

3. Create a test page:
   Verify the animation and logic works completely decoupled.

### Quick Checklist

```bash
# Run all checks before submitting
npm run lint

# Verify registry syncs successfully (generates + builds)
npm run registry:build
```

## Making Changes

### Branch Strategy

```bash
# Create a feature branch
git checkout -b feature/your-feature-name

# or for bug fixes
git checkout -b fix/bug-description
```

### Commit Message Format

Follow conventional commits format:

```bash
<type>: <subject>
```

Types:

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `chore`: Maintenance tasks

## Submitting Changes

### Pull Request Process

1. **Push Your Branch**

   ```bash
   git push origin feature/your-feature-name
   ```

2. **Create Pull Request**
   - Go to the GitHub repository
   - Click "New Pull Request"
   - Select your branch
   - Fill out the PR description

## Bug Reports

### Reporting Bugs

Use the bug report template and include:

- Clear description of the bug
- Steps to reproduce
- Expected vs actual behavior
- Browser and OS information
- Screenshots if applicable

## Feature Requests

### Suggesting Features

1. Check existing issues for similar requests
2. Create a new issue with the "Feature Request" label
3. Include:
   - Clear description
   - Use case and benefits
   - Examples or mockups if possible

## Getting Help

- Open a GitHub Issue for questions
- Check existing issues and discussions
- Review the code for examples

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to Hoverly!
