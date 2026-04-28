"use client";

import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";
import { motion, useAnimate } from "motion/react";

import type { AnimatedIconHandle, AnimatedIconProps } from "./types";

const TypescriptIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();
    const isAnimatingRef = useRef(false);

    const start = useCallback(async () => {
      if (isAnimatingRef.current) return;
      isAnimatingRef.current = true;

      // Reset first so each hover replay is crisp and predictable.
      await animate(
        ".ts-text, .border",
        { opacity: 0, pathLength: 0, filter: "blur(0.8px)" },
        { duration: 0 },
      );
      await animate(".ts-group", { scale: 0.985, y: 0 }, { duration: 0 });

      // Border appears first with subtle fade/draw.
      await animate(
        ".border",
        {
          opacity: [0.18, 1],
          pathLength: [0, 1],
          filter: ["blur(0.8px)", "blur(0px)"],
        },
        {
          duration: 0.52,
          ease: [0.22, 1, 0.36, 1],
        },
      );

      // Stagger text strokes for a polished reveal.
      await animate(
        ".ts-text",
        {
          opacity: [0, 1],
          pathLength: [0, 1],
          filter: ["blur(0.8px)", "blur(0px)"],
        },
        {
          duration: 0.45,
          ease: "easeOut",
          delay: (i) => i * 0.06,
        },
      );

      // Gentle settle at end of reveal.
      animate(
        ".ts-group",
        { scale: [0.985, 1.02, 1] },
        { duration: 0.3, ease: "easeOut" },
      );

      // Soft pulse loop while hovered.
      while (isAnimatingRef.current) {
        await animate(
          ".border",
          { scale: [1, 1.02, 1] },
          { duration: 0.6, ease: "easeInOut" },
        );

        if (!isAnimatingRef.current) break;
        await new Promise((resolve) => setTimeout(resolve, 900));
      }
    }, [animate]);

    const stop = useCallback(() => {
      isAnimatingRef.current = false;
      animate(".ts-group", { scale: 1, y: 0 }, { duration: 0.2, ease: "easeOut" });
      animate(
        ".ts-text, .border",
        { opacity: 1, pathLength: 1, filter: "blur(0px)" },
        { duration: 0.2, ease: "easeOut" },
      );
      animate(".border", { scale: 1 }, { duration: 0.2, ease: "easeOut" });
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
        <motion.g className="ts-group" style={{ transformOrigin: "50% 50%" }}>
          <motion.path
            className="ts-text"
            initial={{ pathLength: 1, opacity: 1 }}
            d="M15 17.5c.32 .32 .754 .5 1.207 .5h.543c.69 0 1.25 -.56 1.25 -1.25v-.25a1.5 1.5 0 0 0 -1.5 -1.5a1.5 1.5 0 0 1 -1.5 -1.5v-.25c0 -.69 .56 -1.25 1.25 -1.25h.543c.453 0 .887 .18 1.207 .5"
          />
          <motion.path className="ts-text" initial={{ pathLength: 1, opacity: 1 }} d="M9 12h4" />
          <motion.path className="ts-text" initial={{ pathLength: 1, opacity: 1 }} d="M11 12v6" />
          <motion.path
            className="border"
            style={{ transformOrigin: "center" }}
            initial={{ pathLength: 1, opacity: 1 }}
            d="M21 19v-14a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2z"
          />
        </motion.g>
      </motion.svg>
    );
  },
);

TypescriptIcon.displayName = "TypescriptIcon";

export default TypescriptIcon;
