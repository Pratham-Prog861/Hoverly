import { AlignCenterIcon } from "@/icons/align-center-icon";
import type {
  HoverlyIconCategory,
  HoverlyIconComponent,
  HoverlyIconRecord,
} from "@/icons/types";

const registryUrl = "https://hoverly.com/r/align-center-icon.json";

export const hoverlyCategories: HoverlyIconCategory[] = [
  "All",
  "Social",
  "UI",
  "Arrows",
];

export const alignCenterIconSource = `"use client";

import { forwardRef, useImperativeHandle } from "react";
import { motion, useAnimate } from "motion/react";

import type { AnimatedIconHandle, AnimatedIconProps } from "@/icons/types";

export const AlignCenterIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "", ...props },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(".line-1", { scaleX: [1, 0.8, 1] }, { duration: 0.3 });
      animate(
        ".line-2",
        { scaleX: [1, 1.2, 1] },
        { duration: 0.3, delay: 0.1 },
      );
      animate(
        ".line-3",
        { scaleX: [1, 0.9, 1] },
        { duration: 0.3, delay: 0.2 },
      );
    };

    const stopAnimation = () => {
      animate(".line-1", { scaleX: 1 }, { duration: 0.2 });
      animate(".line-2", { scaleX: 1 }, { duration: 0.2 });
      animate(".line-3", { scaleX: 1 }, { duration: 0.2 });
    };

    useImperativeHandle(ref, () => {
      return {
        startAnimation,
        stopAnimation,
      };
    });

    return (
      <motion.svg
        ref={scope}
        onHoverStart={startAnimation}
        onHoverEnd={stopAnimation}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        role="img"
        aria-label="Align center icon"
        className={\`cursor-pointer \${className}\`}
        style={{ overflow: "visible" }}
        {...props}
      >
        <title>Align center icon</title>
        <motion.path
          className="line-1"
          d="M4 6l16 0"
          style={{ transformOrigin: "center" }}
        />
        <motion.path
          className="line-2"
          d="M8 12l8 0"
          style={{ transformOrigin: "center" }}
        />
        <motion.path
          className="line-3"
          d="M6 18l12 0"
          style={{ transformOrigin: "center" }}
        />
      </motion.svg>
    );
  },
);

AlignCenterIcon.displayName = "AlignCenterIcon";
`;

export const hoverlyIcons: HoverlyIconRecord[] = [
  {
    slug: "align-center-icon",
    name: "Align Center Icon",
    category: "UI",
    description:
      "A centered alignment glyph with subtle line choreography for polished interface states.",
    tags: ["align", "text", "layout", "editor", "ui", "formatting"],
    componentName: "AlignCenterIcon",
    importPath: "@/icons/align-center-icon",
    sourceCode: alignCenterIconSource,
    registryUrl,
    cliCommands: [
      {
        label: "npx",
        command: `npx shadcn@latest add ${registryUrl}`,
      },
      {
        label: "pnpm",
        command: `pnpm dlx shadcn@latest add ${registryUrl}`,
      },
      {
        label: "yarn",
        command: `yarn shadcn@latest add ${registryUrl}`,
      },
      {
        label: "bun",
        command: `bunx --bun shadcn@latest add ${registryUrl}`,
      },
    ],
  },
];

export const hoverlyIconComponents: Record<string, HoverlyIconComponent> = {
  "align-center-icon": AlignCenterIcon,
};
