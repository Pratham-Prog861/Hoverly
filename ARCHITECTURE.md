# Architecture

Technical overview of Hoverly codebase.

## Tech Stack

| Technology     | Purpose                             |
| -------------- | ----------------------------------- |
| Next.js 16     | App Router, SSR, file-based routing |
| React 19       | Component library                   |
| motion/react   | Animation engine                    |
| TypeScript     | Type safety                         |
| Tailwind CSS 4 | Styling                             |
| shadcn/ui      | CLI distribution & UI components    |
| Biome          | Linting and formatting              |

## Project Structure

```bash
hoverly/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout with providers
│   │   ├── page.tsx            # Homepage
│   │   ├── globals.css         # Global styles
│   │   └── icons/              # Icon browser pages
│   │
│   ├── components/             # React components
│   │   ├── layout/             # Navbar, Footer, CommandMenu
│   │   ├── landing/            # Hero, Features, CTA sections
│   │   ├── icons/              # IconCard, IconGrid, SearchBar, InstallCommandCard
│   │   └── ui/                 # UI primitives (shadcn, etc.)
│   │       ├── button.tsx
│   │       ├── code-block.tsx
│   │       └── ...
│   │
│   ├── icons/                  # Animated icon components
│   │   ├── types.ts            # Shared types for animated icons
│   │   └── *-icon.tsx          # Individual animated icon files
│   │
│   ├── lib/                    # Utilities
│   │   ├── icons.ts            # Icon routing data and metadata
│   │   └── utils.ts            # Helper functions (cn)
│   │
│   └── hooks/                  # Custom React hooks
│
├── scripts/                    # Build scripts
│   └── generate-registry.ts    # shadcn registry generator
│
├── public/                     # Static assets
└── registry.json               # shadcn CLI registry output
```

## Icon Component Pattern

Icons are typically animated using Framer Motion (`motion/react` in v12+). Pattern typically involves `forwardRef`, `useImperativeHandle` and `useAnimate` to allow precise programmatic control on hover or manually.

```tsx
import { forwardRef, useImperativeHandle } from "react";
import { motion, useAnimate } from "motion/react";
import type { AnimatedIconProps } from "./types";

export type IconHandle = {
  startAnimation: () => void;
  stopAnimation: () => void;
};

const Icon = forwardRef<IconHandle, AnimatedIconProps>(
  ({ size = 24, color = "currentColor", strokeWidth = 2, className = "" }, ref) => {
    const [scope, animate] = useAnimate();

    const start = async () => {
      await animate(".icon-group", { /* animation */ }, { duration: 0.3 });
    };

    const stop = () => {
      animate(".icon-group", { /* reset */ }, { duration: 0.2 });
    };

    useImperativeHandle(ref, () => ({
      startAnimation: start,
      stopAnimation: stop,
    }));

    return (
      <motion.svg ref={scope} onHoverStart={start} onHoverEnd={stop} ...>
        <motion.g className="icon-group">
          {/* SVG paths */}
        </motion.g>
      </motion.svg>
    );
  }
);
```

## Data Flow

```bash
src/icons/*.tsx         → Individual UI animated icons
src/lib/icons.ts        → Metadata including Name and Slug for display
scripts/generate-registry.ts → Scans `src/icons` and generates `registry.json`
registry.json           → shadcn CLI schema
```

## Key Files

| File                                    | Purpose                                                          |
| --------------------------------------- | ---------------------------------------------------------------- |
| `src/lib/icons.ts`                      | Icon routing data for navigation and website display             |
| `scripts/generate-registry.ts`          | Scans `src/icons/*.tsx` to output shadcn CLI compatible registry |
| `registry.json`                         | shadcn CLI config for `npx shadcn add`                           |
| `src/app/layout.tsx`                    | Root layout with theme, command menu, and providers              |
| `src/components/layout/CommandMenu.tsx` | Command palette for icon search                                  |

## CLI Distribution

Icons are designed to be distributed via shadcn CLI. The registry is automatically generated from the source files.

### Registry Generation

The registry is managed via:

**`scripts/generate-registry.ts`** - Reads `src/icons/` and generates `registry.json`

Run it with:

```bash
npm run registry:build
```

This ensures the registry stays in sync with `src/icons/*.tsx` and `src/lib/icons.ts` metadata, validating exactly what is shipped.
