"use client";

import { forwardRef, useImperativeHandle, useCallback, useId } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const HashtagIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const maskId = useId();
    const [scope, animate] = useAnimate();

    const start = useCallback(async () => {
      // Reset all lines to be fully transparent and 0 length instantly
      await animate(
        ".h1, .h2, .v1, .v2",
        { pathLength: 0, opacity: 0 },
        { duration: 0 },
      );

      // Horizontal lines come in first, one by one
      animate(
        ".h1",
        { pathLength: [0, 1], opacity: [0, 1] },
        { duration: 0.35, ease: "easeOut", delay: 0 },
      );
      animate(
        ".h2",
        { pathLength: [0, 1], opacity: [0, 1] },
        { duration: 0.35, ease: "easeOut", delay: 0.15 },
      );

      // Then vertical lines, one by one
      animate(
        ".v1",
        { pathLength: [0, 1], opacity: [0, 1] },
        { duration: 0.35, ease: "easeOut", delay: 0.3 },
      );
      animate(
        ".v2",
        { pathLength: [0, 1], opacity: [0, 1] },
        { duration: 0.35, ease: "easeOut", delay: 0.45 },
      );
    }, [animate]);

    const stop = useCallback(async () => {
      animate(
        ".h1, .h2, .v1, .v2",
        { pathLength: 1, opacity: 1 },
        { duration: 0.25, ease: "easeInOut" },
      );
    }, [animate]);

    useImperativeHandle(ref, () => ({
      startAnimation: start,
      stopAnimation: stop,
    }));

    return (
      <motion.svg
        ref={scope}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        className={`cursor-pointer ${className}`}
        onHoverStart={start}
        onHoverEnd={stop}
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <defs>
          <mask id={maskId}>
            {/* Horizontal lines */}
            <motion.path
              className="h1"
              d="M5 9l14 0"
              stroke="white"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 1, opacity: 1 }}
            />
            <motion.path
              className="h2"
              d="M5 15l14 0"
              stroke="white"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 1, opacity: 1 }}
            />

            {/* Vertical lines */}
            <motion.path
              className="v1"
              d="M11 4l-4 16"
              stroke="white"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 1, opacity: 1 }}
            />
            <motion.path
              className="v2"
              d="M17 4l-4 16"
              stroke="white"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 1, opacity: 1 }}
            />
          </mask>
        </defs>

        <rect width="24" height="24" fill={color} mask={`url(#${maskId})`} />
      </motion.svg>
    );
  },
);

HashtagIcon.displayName = "HashtagIcon";
export default HashtagIcon;
