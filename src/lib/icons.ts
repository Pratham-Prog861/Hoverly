import { AlignCenterIcon } from "@/icons/align-center-icon";
import ArrowBackUpIcon from "@/icons/arrow-back-up-icon";
import { BellActiveIcon } from "@/icons/bell-active-icon";
import type {
  HoverlyIconCategory,
  HoverlyIconComponent,
  HoverlyIconRecord,
} from "@/icons/types";

const alignCenterRegistryUrl = "https://hoverly.com/r/align-center-icon.json";
const arrowBackUpRegistryUrl = "https://hoverly.com/r/arrow-back-up-icon.json";
const bellActiveRegistryUrl = "https://hoverly.com/r/bell-active-icon.json";

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

const arrowBackUpIconSource = `"use client";

import { forwardRef, useImperativeHandle } from "react";
import { motion, useAnimate } from "motion/react";

import type { AnimatedIconHandle, AnimatedIconProps } from "@/icons/types";

export const ArrowBackUpIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  ({ size = 24, color = "currentColor", strokeWidth = 2, className = "" }, ref) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      await animate(".path-arrow", { pathLength: 0, opacity: 0, pathOffset: 1 }, { duration: 0 });
      await animate(".path-curve", { pathLength: 0, opacity: 0, pathOffset: 1 }, { duration: 0 });

      // Arrow draws first — right to left, tip leads
      animate(
        ".path-arrow",
        { pathLength: [0, 1], opacity: [0, 1], pathOffset: [1, 0] },
        { duration: 0.35, ease: "easeOut" },
      );

      // Curve unfolds after — right to left, following the arrow
      animate(
        ".path-curve",
        { pathLength: [0, 1], opacity: [0, 1], pathOffset: [1, 0] },
        { duration: 0.55, ease: "easeOut", delay: 0.2 },
      );
    };

    const stopAnimation = () => {
      animate([
        [".path-arrow", { pathLength: 1, opacity: 1, pathOffset: 0 }, { duration: 0.2 }],
        [".path-curve", { pathLength: 1, opacity: 1, pathOffset: 0 }, { duration: 0.2 }],
      ]);
    };

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    return (
      <motion.div
        ref={scope}
        onHoverStart={startAnimation}
        onHoverEnd={stopAnimation}
        className={\`inline-flex cursor-pointer items-center justify-center \${className}\`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />

          <motion.path
            className="path-arrow"
            d="M9 14l-4 -4l4 -4"
            style={{ pathLength: 1, pathOffset: 0, opacity: 1 }}
          />

          <motion.path
            className="path-curve"
            d="M5 10h11a4 4 0 1 1 0 8h-1"
            style={{ pathLength: 1, pathOffset: 0, opacity: 1 }}
          />
        </svg>
      </motion.div>
    );
  },
);

ArrowBackUpIcon.displayName = "ArrowBackUpIcon";
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
    registryUrl: alignCenterRegistryUrl,
    cliCommands: [
      {
        label: "npx",
        command: `npx shadcn@latest add ${alignCenterRegistryUrl}`,
      },
      {
        label: "pnpm",
        command: `pnpm dlx shadcn@latest add ${alignCenterRegistryUrl}`,
      },
      {
        label: "yarn",
        command: `yarn shadcn@latest add ${alignCenterRegistryUrl}`,
      },
      {
        label: "bun",
        command: `bunx --bun shadcn@latest add ${alignCenterRegistryUrl}`,
      },
    ],
  },
  {
    slug: "bell-active-icon",
    name: "Bell Active Icon",
    category: "UI",
    description:
      "A lively notification bell with ringing swing motion for active alert states.",
    tags: ["bell", "notification", "alert", "ui", "status", "active"],
    componentName: "BellActiveIcon",
    importPath: "@/icons/bell-active-icon",
    sourceCode: `"use client";

import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

import type { AnimatedIconHandle, AnimatedIconProps } from "@/icons/types";

export const BellActiveIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  ({ size = 24, color = "currentColor", className = "", ...props }, ref) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(
        ".bell-body",
        { rotate: [0, -18, 16, -12, 9, -5, 3, 0] },
        {
          duration: 1.4,
          ease: [0.36, 0.07, 0.19, 0.97], // custom spring-like easing
          times: [0, 0.12, 0.28, 0.44, 0.58, 0.72, 0.86, 1],
        },
      );

      animate(
        ".bell-arc",
        { rotate: [0, -10, 9, -7, 5, -3, 2, 0] },
        {
          duration: 1.4,
          ease: [0.36, 0.07, 0.19, 0.97],
          times: [0, 0.12, 0.28, 0.44, 0.58, 0.72, 0.86, 1],
          delay: 0.06,
        },
      );
    };

    const stopAnimation = () => {
      animate(".bell-body", { rotate: 0 }, { duration: 0.4, ease: "easeOut" });
      animate(".bell-arc", { rotate: 0 }, { duration: 0.4, ease: "easeOut" });
    };

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    return (
      <motion.svg
        ref={scope}
        onHoverStart={startAnimation}
        onHoverEnd={stopAnimation}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        className={\`cursor-pointer \${className}\`}
        style={{ overflow: "visible" }}
        role="img"
        aria-label="Bell active icon"
        {...props}
      >
        <title>Bell active icon</title>

        {/* Main bell + clapper — pivots from the hanging point */}
        <motion.g
          className="bell-body"
          style={{ transformOrigin: "12px 2px" }}
        >
          <path d="M11.209 3.816a1 1 0 0 0-1.966.368l.325 1.74a5.338 5.338 0 0 0-2.8 5.762l.276 1.473.055.296c.258 1.374-.228 2.262-.63 2.998-.285.52-.527.964-.437 1.449.11.586.22 1.173.75 1.074l12.7-2.377c.528-.1.418-.685.308-1.27-.103-.564-.636-1.123-1.195-1.711-.606-.636-1.243-1.306-1.404-2.051-.233-1.085-.275-1.387-.303-1.587-.009-.063-.016-.117-.028-.182a5.338 5.338 0 0 0-5.353-4.39l-.298-1.592Z" />
          <path d="M8.95 19.7c.7.8 1.7 1.3 2.8 1.3 1.6 0 2.9-1.1 3.3-2.5l-6.1 1.2Z" />
        </motion.g>

        <motion.path
          className="bell-arc"
          fillRule="evenodd"
          d="M6.539 4.278a1 1 0 0 1 .07 1.412c-1.115 1.23-1.705 2.605-1.83 4.26a1 1 0 0 1-1.995-.15c.16-2.099.929-3.893 2.342-5.453a1 1 0 0 1 1.413-.069Z"
          clipRule="evenodd"
          style={{ transformOrigin: "5px 4px" }}
        />
      </motion.svg>
    );
  },
);

BellActiveIcon.displayName = "BellActiveIcon";
`,
    registryUrl: bellActiveRegistryUrl,
    cliCommands: [
      {
        label: "npx",
        command: `npx shadcn@latest add ${bellActiveRegistryUrl}`,
      },
      {
        label: "pnpm",
        command: `pnpm dlx shadcn@latest add ${bellActiveRegistryUrl}`,
      },
      {
        label: "yarn",
        command: `yarn shadcn@latest add ${bellActiveRegistryUrl}`,
      },
      {
        label: "bun",
        command: `bunx --bun shadcn@latest add ${bellActiveRegistryUrl}`,
      },
    ],
  },
  {
    slug: "arrow-back-up-icon",
    name: "Arrow Back Up Icon",
    category: "Arrows",
    description:
      "A returning arrow with staged path drawing motion for back and undo style actions.",
    tags: ["arrow", "back", "up", "undo", "navigation", "arrows"],
    componentName: "ArrowBackUpIcon",
    importPath: "@/icons/arrow-back-up-icon",
    sourceCode: arrowBackUpIconSource,
    registryUrl: arrowBackUpRegistryUrl,
    cliCommands: [
      {
        label: "npx",
        command: `npx shadcn@latest add ${arrowBackUpRegistryUrl}`,
      },
      {
        label: "pnpm",
        command: `pnpm dlx shadcn@latest add ${arrowBackUpRegistryUrl}`,
      },
      {
        label: "yarn",
        command: `yarn shadcn@latest add ${arrowBackUpRegistryUrl}`,
      },
      {
        label: "bun",
        command: `bunx --bun shadcn@latest add ${arrowBackUpRegistryUrl}`,
      },
    ],
  },
];

export const hoverlyIconComponents: Record<string, HoverlyIconComponent> = {
  "align-center-icon": AlignCenterIcon,
  "arrow-back-up-icon": ArrowBackUpIcon,
  "bell-active-icon": BellActiveIcon,
};
