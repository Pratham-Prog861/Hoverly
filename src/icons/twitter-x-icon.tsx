"use client";

import { forwardRef, useImperativeHandle, useCallback } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const TwitterXIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = useCallback(async () => {
      // Instantly reset paths to transparent and 0 length
      await animate(
        ".path-main, .path-cross",
        { pathLength: 0, opacity: 0 },
        { duration: 0 },
      );

      // Draw the main thick path first
      animate(
        ".path-main",
        { pathLength: [0, 1], opacity: [0, 1] },
        { duration: 0.4, ease: "easeOut" },
      );

      // Then fade in and draw the cross lines with a slight delay
      await animate(
        ".path-cross",
        { pathLength: [0, 1], opacity: [0, 1] },
        { duration: 0.3, ease: "easeOut", delay: 0.2 },
      );

      // Final punchy reaction
      animate(
        ".x-icon",
        { scale: [1, 1.15, 1], rotate: [0, -5, 5, 0] },
        { duration: 0.4, ease: "easeInOut" },
      );
    }, [animate]);

    const stop = useCallback(() => {
      animate(
        ".path-main, .path-cross",
        { pathLength: 1, opacity: 1 },
        { duration: 0.2, ease: "easeOut" },
      );
      animate(
        ".x-icon",
        { scale: 1, rotate: 0 },
        { duration: 0.2, ease: "easeOut" },
      );
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
        className={`cursor-pointer ${className}`}
      >
        <motion.g className="x-icon" style={{ transformOrigin: "center" }}>
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <motion.path
            className="path-main"
            d="M4 4l11.733 16h4.267l-11.733 -16z"
            initial={{ pathLength: 1, opacity: 1 }}
          />
          <motion.path
            className="path-cross"
            d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"
            initial={{ pathLength: 1, opacity: 1 }}
          />
        </motion.g>
      </motion.svg>
    );
  },
);

TwitterXIcon.displayName = "TwitterXIcon";
export default TwitterXIcon;
