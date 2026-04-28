"use client";

import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";
import { motion, useAnimate } from "motion/react";

import type { AnimatedIconHandle, AnimatedIconProps } from "./types";

const PassportIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();
    const isAnimatingRef = useRef(false);

    const start = useCallback(async () => {
      if (isAnimatingRef.current) return;
      isAnimatingRef.current = true;

      // Reset so reveal replays cleanly on each hover.
      await animate(
        ".passport-shell, .passport-line, .globe, .flap",
        { opacity: 1, pathLength: 0 },
        { duration: 0 },
      );
      await animate(
        ".passport-group",
        { scale: 0.985, rotate: 0, y: 0 },
        { duration: 0 },
      );
      await animate(".flap", { x: -1.2 }, { duration: 0 });

      // Cover first.
      await animate(
        ".passport-shell, .passport-line",
        {
          pathLength: [0, 1],
        },
        { duration: 0.48, ease: [0.22, 1, 0.36, 1] },
      );

      // Flap glides in with its own fade.
      await animate(
        ".flap",
        {
          x: [-1.2, 0.4, 0],
          pathLength: [0, 1],
        },
        { duration: 0.36, ease: "easeOut" },
      );

      // Globe appears in a staged draw.
      await animate(
        ".globe",
        { pathLength: [0, 1] },
        {
          duration: 0.55,
          ease: "easeInOut",
          delay: (i) => i * 0.07,
        },
      );

      // Subtle settle.
      animate(
        ".passport-group",
        { scale: [0.985, 1.02, 1], rotate: [0, -0.8, 0.25, 0] },
        { duration: 0.32, ease: "easeOut" },
      );

      // Hover loop: gentle float/tilt (keeps strokes crisp).
      while (isAnimatingRef.current) {
        await animate(
          ".passport-group",
          { y: [0, -0.45, 0], rotate: [0, -0.6, 0] },
          { duration: 1.05, ease: "easeInOut" },
        );

        if (!isAnimatingRef.current) break;
        await new Promise((resolve) => setTimeout(resolve, 500));
      }
    }, [animate]);

    const stop = useCallback(() => {
      isAnimatingRef.current = false;

      animate(
        ".passport-group",
        { scale: 1, rotate: 0, y: 0 },
        { duration: 0.2, ease: "easeOut" },
      );
      animate(
        ".passport-shell, .passport-line, .globe, .flap",
        { opacity: 1, pathLength: 1 },
        { duration: 0.22, ease: "easeOut" },
      );
      animate(".flap", { x: 0 }, { duration: 0.2, ease: "easeOut" });
    }, [animate]);

    useImperativeHandle(
      ref,
      () => ({
        startAnimation: start,
        stopAnimation: stop,
      }),
      [start, stop],
    );

    return (
      <motion.svg
        ref={scope}
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
        onHoverStart={start}
        onHoverEnd={stop}
        style={{ overflow: "visible" }}
      >
        <motion.g
          className="passport-group"
          style={{ transformOrigin: "50% 50%" }}
        >
          <motion.path
            className="passport-shell"
            initial={{ opacity: 1, pathLength: 1 }}
            d="M2 9c0-3.3 0-4.95 1.025-5.975S5.7 2 9 2h3c3.3 0 4.95 0 5.975 1.025S19 5.7 19 9v6c0 3.3 0 4.95-1.025 5.975S15.3 22 12 22H9c-3.3 0-4.95 0-5.975-1.025S2 18.3 2 15z"
          />
          <motion.path
            className="passport-line"
            initial={{ opacity: 1, pathLength: 1 }}
            d="M7 17h8"
          />
          <motion.path
            className="flap"
            initial={{ opacity: 1, pathLength: 1, x: 0 }}
            d="M12.95 22c2.645 0 3.967 0 4.917-.756.95-.757 1.252-2.051 1.858-4.64l1.917-8.197c.335-1.433.503-2.15.2-2.67C21.287 4.796 19.878 5 18.958 5"
          />
          <motion.path
            className="globe"
            initial={{ opacity: 1, pathLength: 1 }}
            d="M11 14a4 4 0 0 1 0-8M11 14a4 4 0 0 0 0-8"
          />
          <motion.path
            className="globe"
            initial={{ opacity: 1, pathLength: 1 }}
            d="M11 14s1.5-1.79 1.5-4S11 6 11 6M11 14s-1.5-1.79-1.5-4S11 6 11 6"
          />
        </motion.g>
      </motion.svg>
    );
  },
);

PassportIcon.displayName = "PassportIcon";

export default PassportIcon;
