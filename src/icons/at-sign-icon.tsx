"use client";

import { motion, useAnimate } from "motion/react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

import type { AnimatedIconHandle, AnimatedIconProps } from "./types";

const AtSignIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();
    const isAnimatingRef = useRef(false);

    const start = useCallback(async () => {
      if (isAnimatingRef.current) return;
      isAnimatingRef.current = true;

      await animate(
        ".draw",
        { pathLength: 0, opacity: 0, filter: "blur(0.8px)" },
        { duration: 0 },
      );
      await animate(
        ".at-group, .outer, .inner, .path",
        { scale: 1, rotate: 0, x: 0, y: 0, opacity: 1 },
        { duration: 0 },
      );

      await animate(
        ".outer",
        {
          pathLength: [0, 1],
          opacity: [0.18, 1],
          filter: ["blur(0.8px)", "blur(0px)"],
        },
        { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
      );

      await animate(
        ".path",
        {
          pathLength: [0, 1],
          opacity: [0, 1],
          filter: ["blur(0.8px)", "blur(0px)"],
        },
        { duration: 0.55, ease: "easeOut" },
      );

      await animate(
        ".inner",
        {
          pathLength: [0, 1],
          opacity: [0, 1],
          filter: ["blur(0.8px)", "blur(0px)"],
        },
        { duration: 0.3, ease: "easeOut" },
      );

      // Soft settle.
      animate(
        ".at-group",
        { scale: [0.985, 1.02, 1] },
        { duration: 0.24, ease: "easeOut" },
      );

      while (isAnimatingRef.current) {
        await Promise.all([
          animate(
            ".at-group",
            {
              scale: [1, 1.018, 0.998, 1],
              rotate: [0, -1.2, 1, 0],
              x: [0, 0.18, -0.14, 0],
              y: [0, -0.4, 0.24, 0],
            },
            { duration: 1.15, ease: "easeInOut" },
          ),
          animate(
            ".outer",
            { rotate: [0, 4, 0], opacity: [1, 0.92, 1] },
            { duration: 1.15, ease: "easeInOut" },
          ),
          animate(
            ".inner",
            { rotate: [0, -8, 0], scale: [1, 1.04, 1] },
            { duration: 1.15, ease: "easeInOut" },
          ),
          animate(
            ".path",
            { x: [0, -0.12, 0.1, 0], opacity: [1, 0.96, 1] },
            { duration: 1.15, ease: "easeInOut" },
          ),
        ]);

        if (!isAnimatingRef.current) {
          break;
        }

        await Promise.all([
          animate(
            ".at-group",
            {
              scale: [1, 1.014, 1],
              rotate: [0, 0.85, 0],
              x: [0, -0.12, 0],
              y: [0, 0.18, 0],
            },
            { duration: 0.9, ease: "easeInOut" },
          ),
          animate(
            ".outer",
            { rotate: [0, -3, 0], opacity: [1, 0.95, 1] },
            { duration: 0.9, ease: "easeInOut" },
          ),
          animate(
            ".inner",
            { rotate: [0, 5, 0], scale: [1, 1.02, 1] },
            { duration: 0.9, ease: "easeInOut" },
          ),
          animate(
            ".path",
            { x: [0, 0.08, 0], opacity: [1, 0.98, 1] },
            { duration: 0.9, ease: "easeInOut" },
          ),
        ]);

        if (!isAnimatingRef.current) break;
      }
    }, [animate]);

    const stop = useCallback(() => {
      isAnimatingRef.current = false;
      animate(
        ".at-group, .outer, .inner, .path",
        { scale: 1, rotate: 0, x: 0, y: 0, opacity: 1 },
        { duration: 0.22, ease: "easeOut" },
      );
      animate(
        ".draw",
        { pathLength: 1, opacity: 1, filter: "blur(0px)" },
        { duration: 0.22, ease: "easeOut" },
      );
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
        <title>At sign</title>
        <motion.g className="at-group" style={{ transformOrigin: "50% 50%" }}>
          <motion.circle
            className="draw inner"
            cx="12"
            cy="12"
            r="4"
            style={{ transformOrigin: "50% 50%" }}
            initial={{ pathLength: 1, opacity: 1 }}
          />
          <motion.path
            className="draw path"
            d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"
            style={{ transformOrigin: "50% 50%" }}
            initial={{ pathLength: 1, opacity: 1 }}
          />
          <motion.circle
            className="draw outer"
            cx="12"
            cy="12"
            r="10"
            style={{ transformOrigin: "50% 50%" }}
            initial={{ pathLength: 1, opacity: 1 }}
          />
        </motion.g>
      </motion.svg>
    );
  },
);

AtSignIcon.displayName = "AtSignIcon";

export default AtSignIcon;
