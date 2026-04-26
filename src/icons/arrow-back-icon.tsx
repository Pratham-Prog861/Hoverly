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
        ".path",
        { pathLength: 0, opacity: 0, pathOffset: 1 },
        { duration: 0 },
      );
      animate(
        ".path",
        { pathLength: [0, 1], opacity: [0, 1], pathOffset: [1, 0] },
        { duration: 0.7, ease: "easeOut" },
      );
    };

    const stop = () => {
      animate(
        ".path",
        { pathLength: 1, opacity: 1, pathOffset: 0 },
        { duration: 0.2 },
      );
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
            className="path"
            d="M9 16l-4 -4l4 -4 M5 12h10a4 4 0 1 0 0 -8h-1"
            style={{ pathLength: 1, pathOffset: 0, opacity: 1 }}
          />
        </svg>
      </motion.div>
    );
  },
);

ArrowBackIcon.displayName = "ArrowBackIcon";
export default ArrowBackIcon;
