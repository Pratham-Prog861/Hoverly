"use client";

import { forwardRef, useImperativeHandle, useRef } from "react";
import { motion, useAnimate } from "motion/react";
import type { AnimatedIconHandle, AnimatedIconProps } from "@/icons/types";

const PATHS = [
  {
    cls: ".p1",
    d: "M6.357 9c-2.637 .68 -4.357 1.845 -4.357 3.175c0 2.107 4.405 3.825 9.85 3.825c.74 0 1.26 -.039 1.95 -.097",
    group: "ring-1",
  },
  {
    cls: ".p2",
    d: "M9.837 15.9c-.413 -.596 -.806 -1.133 -1.18 -1.8c-2.751 -4.9 -3.488 -9.77 -1.63 -10.873c1.15 -.697 3.047 .253 4.974 2.254",
    group: "ring-1",
  },
  {
    cls: ".p3",
    d: "M6.429 15.387c-.702 2.688 -.56 4.716 .56 5.395c1.783 1.08 5.387 -1.958 8.043 -6.804c.36 -.67 .683 -1.329 .968 -1.978",
    group: "ring-2",
  },
  {
    cls: ".p4",
    d: "M12 18.52c1.928 2 3.817 2.95 4.978 2.253c1.85 -1.102 1.121 -5.972 -1.633 -10.873c-.384 -.677 -.777 -1.204 -1.18 -1.8",
    group: "ring-2",
  },
  {
    cls: ".p5",
    d: "M17.66 15c2.612 -.687 4.34 -1.85 4.34 -3.176c0 -2.11 -4.408 -3.824 -9.845 -3.824c-.747 0 -1.266 .029 -1.955 .087",
    group: "ring-3",
  },
  {
    cls: ".p6",
    d: "M8 12c.285 -.66 .607 -1.308 .968 -1.978c2.647 -4.844 6.253 -7.89 8.046 -6.801c1.11 .679 1.262 2.706 .56 5.393",
    group: "ring-3",
  },
];

const STAGGER = 0.22;
const DRAW_DURATION = 0.55;

const BrandReactNativeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();
    const loopControls = useRef<Array<ReturnType<typeof animate>>>([]);
    const isAnimating = useRef(false);

    const start = async () => {
      if (isAnimating.current) return;
      isAnimating.current = true;

      loopControls.current.forEach((c) => c.stop());
      loopControls.current = [];

      await animate(
        ".orbit-system",
        { rotate: 0, opacity: 1, scale: 1 },
        { duration: 0 },
      );

      await Promise.all(
        PATHS.map(({ cls }) =>
          animate(cls, { pathLength: 0, opacity: 0 }, { duration: 0 }),
        ),
      );

      await animate(
        ".center-dot",
        { pathLength: 0, opacity: 0, scale: 1 },
        { duration: 0 },
      );

      const drawPromises = PATHS.map(({ cls }, i) =>
        animate(
          cls,
          { pathLength: [0, 1], opacity: [0, 1] },
          {
            duration: DRAW_DURATION,
            delay: i * STAGGER,
            ease: [0.25, 1, 0.5, 1],
          },
        ),
      );
      await Promise.all(drawPromises);

      await animate(
        ".center-dot",
        { pathLength: [0, 1], opacity: [0, 1], scale: [0.5, 1] },
        { duration: 0.35, ease: "backOut" },
      );

      await new Promise((r) => setTimeout(r, 120));

      loopControls.current.push(
        animate(
          ".orbit-system",
          { rotate: 360 },
          { duration: 18, ease: "linear", repeat: Infinity },
        ),
      );

      loopControls.current.push(
        animate(
          ".center-dot",
          { scale: [1, 1.4, 1], opacity: [1, 0.75, 1] },
          { duration: 2.2, ease: "easeInOut", repeat: Infinity },
        ),
      );

      [".p1,.p2", ".p3,.p4", ".p5,.p6"].forEach((sel, i) => {
        loopControls.current.push(
          animate(
            sel,
            { opacity: [1, 0.5, 1] },
            {
              duration: 2.8,
              ease: "easeInOut",
              repeat: Infinity,
              delay: i * 0.75,
            },
          ),
        );
      });
    };

    const stop = async () => {
      if (!isAnimating.current) return;

      loopControls.current.forEach((c) => c.stop());
      loopControls.current = [];

      await animate(
        ".orbit-system",
        { rotate: 0, opacity: 1, scale: 1 },
        { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] },
      );

      await Promise.all(
        PATHS.map(({ cls }) =>
          animate(
            cls,
            { pathLength: 1, opacity: 1 },
            { duration: 0.25, ease: "easeOut" },
          ),
        ),
      );

      await animate(
        ".center-dot",
        { pathLength: 1, opacity: 1, scale: 1 },
        { duration: 0.25, ease: "easeOut" },
      );

      isAnimating.current = false;
    };

    useImperativeHandle(ref, () => ({
      startAnimation: start,
      stopAnimation: stop,
    }));

    return (
      <motion.svg
        ref={scope}
        onMouseEnter={start}
        onMouseLeave={stop}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`cursor-pointer select-none ${className}`}
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />

        <motion.g
          className="orbit-system"
          style={{ originX: "50%", originY: "50%" }}
        >
          <motion.path className="p1" d={PATHS[0].d} />
          <motion.path className="p2" d={PATHS[1].d} />

          <motion.path className="p3" d={PATHS[2].d} />
          <motion.path className="p4" d={PATHS[3].d} />

          <motion.path className="p5" d={PATHS[4].d} />
          <motion.path className="p6" d={PATHS[5].d} />
        </motion.g>

        <motion.path
          className="center-dot"
          d="M12.26 12.015h-.01c-.01 .13 -.12 .24 -.26 .24a.263 .263 0 0 1 -.25 -.26c0 -.14 .11 -.25 .24 -.25h-.01c.13 -.01 .25 .11 .25 .24"
          style={{ originX: "50%", originY: "50%" }}
        />
      </motion.svg>
    );
  },
);

BrandReactNativeIcon.displayName = "BrandReactNativeIcon";
export default BrandReactNativeIcon;
