"use client";

import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

import type { AnimatedIconHandle, AnimatedIconProps } from "@/icons/types";

export const BellActiveIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  ({ size = 24, color = "currentColor", className = "", ...props }, ref) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(
        ".bell-body",
        { rotate: [0, -18, 16, -12, 9, -5, 3, 0] },
        {
          duration: 1.4,
          ease: [0.36, 0.07, 0.19, 0.97], // custom spring-like easing
          times: [0, 0.12, 0.28, 0.44, 0.58, 0.72, 0.86, 1],
        },
      );

      animate(
        ".bell-arc",
        { rotate: [0, -10, 9, -7, 5, -3, 2, 0] },
        {
          duration: 1.4,
          ease: [0.36, 0.07, 0.19, 0.97],
          times: [0, 0.12, 0.28, 0.44, 0.58, 0.72, 0.86, 1],
          delay: 0.06,
        },
      );
    };

    const stopAnimation = () => {
      animate(".bell-body", { rotate: 0 }, { duration: 0.4, ease: "easeOut" });
      animate(".bell-arc", { rotate: 0 }, { duration: 0.4, ease: "easeOut" });
    };

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    return (
      <motion.svg
        ref={scope}
        onHoverStart={startAnimation}
        onHoverEnd={stopAnimation}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        className={`cursor-pointer ${className}`}
        style={{ overflow: "visible" }}
        role="img"
        aria-label="Bell active icon"
        {...props}
      >
        <title>Bell active icon</title>

        {/* Main bell + clapper — pivots from the hanging point */}
        <motion.g
          className="bell-body"
          style={{ transformOrigin: "12px 2px" }}
        >
          <path d="M11.209 3.816a1 1 0 0 0-1.966.368l.325 1.74a5.338 5.338 0 0 0-2.8 5.762l.276 1.473.055.296c.258 1.374-.228 2.262-.63 2.998-.285.52-.527.964-.437 1.449.11.586.22 1.173.75 1.074l12.7-2.377c.528-.1.418-.685.308-1.27-.103-.564-.636-1.123-1.195-1.711-.606-.636-1.243-1.306-1.404-2.051-.233-1.085-.275-1.387-.303-1.587-.009-.063-.016-.117-.028-.182a5.338 5.338 0 0 0-5.353-4.39l-.298-1.592Z" />
          <path d="M8.95 19.7c.7.8 1.7 1.3 2.8 1.3 1.6 0 2.9-1.1 3.3-2.5l-6.1 1.2Z" />
        </motion.g>

        <motion.path
          className="bell-arc"
          fillRule="evenodd"
          d="M6.539 4.278a1 1 0 0 1 .07 1.412c-1.115 1.23-1.705 2.605-1.83 4.26a1 1 0 0 1-1.995-.15c.16-2.099.929-3.893 2.342-5.453a1 1 0 0 1 1.413-.069Z"
          clipRule="evenodd"
          style={{ transformOrigin: "5px 4px" }}
        />
      </motion.svg>
    );
  },
);

BellActiveIcon.displayName = "BellActiveIcon";