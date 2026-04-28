"use client";

import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";
import { motion, useAnimate } from "motion/react";

import type { AnimatedIconHandle, AnimatedIconProps } from "./types";

const CurrencyRupeeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();
    const isAnimatingRef = useRef(false);

    const start = useCallback(async () => {
      if (isAnimatingRef.current) return;
      isAnimatingRef.current = true;

      // Reset to replay a crisp reveal on each hover.
      await animate(
        ".rupee-main, .rupee-line",
        { pathLength: 0, opacity: 0, filter: "blur(0.8px)" },
        { duration: 0 },
      );
      await animate(".rupee-symbol", { scale: 0.985, y: 0 }, { duration: 0 });

      // First line appears as the visual anchor.
      await animate(
        ".rupee-line",
        {
          pathLength: [0, 1],
          opacity: [0.15, 1],
          filter: ["blur(0.8px)", "blur(0px)"],
        },
        {
          duration: 0.26,
          ease: [0.22, 1, 0.36, 1],
        },
      );

      // Main symbol follows with a subtle fade/draw.
      await animate(
        ".rupee-main",
        {
          pathLength: [0, 1],
          opacity: [0, 1],
          filter: ["blur(0.8px)", "blur(0px)"],
        },
        {
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1],
        },
      );

      // Tiny settle for a premium finish.
      animate(
        ".rupee-symbol",
        { scale: [0.985, 1.02, 1], y: [0, -0.4, 0] },
        { duration: 0.28, ease: "easeOut" },
      );

      // Gentle breathing while hovered.
      while (isAnimatingRef.current) {
        await animate(
          ".rupee-symbol",
          { scale: [1, 1.015, 1] },
          { duration: 0.7, ease: "easeInOut" },
        );

        if (!isAnimatingRef.current) break;
        await new Promise((resolve) => setTimeout(resolve, 550));
      }
    }, [animate]);

    const stop = useCallback(() => {
      isAnimatingRef.current = false;
      animate(".rupee-symbol", { scale: 1, y: 0 }, { duration: 0.2, ease: "easeOut" });
      animate(
        ".rupee-main, .rupee-line",
        { pathLength: 1, opacity: 1, filter: "blur(0px)" },
        { duration: 0.2, ease: "easeOut" },
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
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />

        <motion.g className="rupee-symbol" style={{ transformOrigin: "50% 50%" }}>
          <motion.path
            className="rupee-main"
            d="M18 5h-11h3a4 4 0 0 1 0 8h-3l6 6"
            initial={{ pathLength: 1, opacity: 1 }}
          />

          <motion.path
            className="rupee-line"
            d="M7 9l11 0"
            initial={{ pathLength: 1, opacity: 1 }}
          />
        </motion.g>
      </motion.svg>
    );
  },
);

CurrencyRupeeIcon.displayName = "CurrencyRupeeIcon";

export default CurrencyRupeeIcon;
