"use client";

import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";
import { motion, useAnimate } from "motion/react";

import type { AnimatedIconHandle, AnimatedIconProps } from "./types";

const TerminalIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();
    const isAnimatingRef = useRef(false);

    const start = useCallback(async () => {
      if (isAnimatingRef.current) return;
      isAnimatingRef.current = true;

      // Reset so reveal can replay on each hover.
      await animate(
        ".terminal-chevron, .cursor-line",
        { opacity: 0, pathLength: 0, filter: "blur(0.8px)" },
        { duration: 0 },
      );
      await animate(".terminal-group", { scale: 0.985, x: 0 }, { duration: 0 });

      // Subtle fade + draw for chevron first.
      await animate(
        ".terminal-chevron",
        {
          opacity: [0.15, 1],
          pathLength: [0, 1],
          filter: ["blur(0.8px)", "blur(0px)"],
        },
        {
          duration: 0.42,
          ease: [0.22, 1, 0.36, 1],
        },
      );

      // Cursor line appears after chevron.
      await animate(
        ".cursor-line",
        {
          opacity: [0, 1],
          pathLength: [0, 1],
          filter: ["blur(0.8px)", "blur(0px)"],
        },
        { duration: 0.3, ease: "easeOut" },
      );

      // Tiny settle bounce.
      animate(
        ".terminal-group",
        { scale: [0.985, 1.02, 1] },
        { duration: 0.24, ease: "easeOut" },
      );

      // Hover loop: cursor blink + lightweight chevron nudge.
      while (isAnimatingRef.current) {
        await animate(
          ".cursor-line",
          { opacity: [1, 0.18, 1] },
          { duration: 0.55, ease: "easeInOut" },
        );

        if (!isAnimatingRef.current) break;

        await animate(
          ".terminal-chevron",
          { x: [0, 1.8, 0] },
          { duration: 0.22, ease: "easeInOut" },
        );

        await new Promise((resolve) => setTimeout(resolve, 420));
      }
    }, [animate]);

    const stop = useCallback(() => {
      isAnimatingRef.current = false;

      animate(".terminal-group", { scale: 1, x: 0 }, { duration: 0.2, ease: "easeOut" });
      animate(
        ".terminal-chevron, .cursor-line",
        { opacity: 1, pathLength: 1, filter: "blur(0px)" },
        { duration: 0.2, ease: "easeOut" },
      );
      animate(".terminal-chevron", { x: 0 }, { duration: 0.2, ease: "easeOut" });
    }, [animate]);

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
        className={`cursor-pointer select-none ${className}`}
        style={{ overflow: "visible" }}
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <motion.g className="terminal-group" style={{ transformOrigin: "50% 50%" }}>
          <motion.path
            className="terminal-chevron"
            d="M5 7l5 5l-5 5"
            initial={{ pathLength: 1, opacity: 1 }}
          />
          <motion.path
            className="cursor-line"
            d="M12 19l7 0"
            initial={{ pathLength: 1, opacity: 1 }}
          />
        </motion.g>
      </motion.svg>
    );
  },
);

TerminalIcon.displayName = "TerminalIcon";

export default TerminalIcon;
