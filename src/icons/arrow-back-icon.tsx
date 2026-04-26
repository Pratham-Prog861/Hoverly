"use client";

import { forwardRef, useImperativeHandle } from "react";
import { motion, useAnimate } from "motion/react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";

const ArrowBackIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = async () => {
      await animate(
        ".path-arrow",
        { pathLength: 0, opacity: 0, pathOffset: 1 },
        { duration: 0 },
      );
      await animate(
        ".path-curve",
        { pathLength: 0, opacity: 0, pathOffset: 1 },
        { duration: 0 },
      );

      // Arrow draws first from right to left.
      animate(
        ".path-arrow",
        { pathLength: [0, 1], opacity: [0, 1], pathOffset: [1, 0] },
        { duration: 0.35, ease: "easeOut" },
      );

      // Tail line follows with a slight delay.
      animate(
        ".path-curve",
        { pathLength: [0, 1], opacity: [0, 1], pathOffset: [1, 0] },
        { duration: 0.55, ease: "easeOut", delay: 0.2 },
      );
    };

    const stop = () => {
      animate([
        [
          ".path-arrow",
          { pathLength: 1, opacity: 1, pathOffset: 0 },
          { duration: 0.2 },
        ],
        [
          ".path-curve",
          { pathLength: 1, opacity: 1, pathOffset: 0 },
          { duration: 0.2 },
        ],
      ]);
    };

    useImperativeHandle(ref, () => ({
      startAnimation: start,
      stopAnimation: stop,
    }));

    return (
      <motion.div
        ref={scope}
        className={`inline-flex cursor-pointer items-center justify-center ${className}`}
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
          onMouseEnter={start}
          onMouseLeave={stop}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />

          <motion.path
            className="path-arrow"
            d="M9 16l-4 -4l4 -4"
            style={{ pathLength: 1, pathOffset: 0, opacity: 1 }}
          />

          <motion.path
            className="path-curve"
            d="M5 12h10a4 4 0 1 0 0 -8h-1"
            style={{ pathLength: 1, pathOffset: 0, opacity: 1 }}
          />
        </svg>
      </motion.div>
    );
  },
);

ArrowBackIcon.displayName = "ArrowBackIcon";
export default ArrowBackIcon;
