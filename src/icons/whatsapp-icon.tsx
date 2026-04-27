"use client";

import { forwardRef, useImperativeHandle, useCallback } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const WhatsappIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = useCallback(async () => {
      // Instantly reset paths to transparent and 0 length
      await animate(
        ".bubble, .phone-icon",
        { pathLength: 0, opacity: 0, rotate: 0 },
        { duration: 0 },
      );

      // Draw and fade in the bubble first
      animate(
        ".bubble",
        { pathLength: [0, 1], opacity: [0, 1] },
        { duration: 0.4, ease: "easeOut" },
      );

      // Then fade in, draw, and rotate the phone
      await animate(
        ".phone-icon",
        {
          pathLength: [0, 1],
          opacity: [0, 1],
          rotate: [0, -15, 15, -10, 10, 0],
        },
        {
          duration: 0.6,
          ease: "easeInOut",
          delay: 0.2,
        },
      );
    }, [animate]);

    const stop = useCallback(() => {
      animate(
        ".bubble",
        { pathLength: 1, opacity: 1 },
        { duration: 0.2, ease: "easeOut" },
      );
      animate(
        ".phone-icon",
        { pathLength: 1, opacity: 1, rotate: 0 },
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
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <motion.path
          className="bubble"
          initial={{ pathLength: 1, opacity: 1 }}
          d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"
        />
        <motion.path
          className="phone-icon"
          style={{ transformOrigin: "50% 50%" }}
          initial={{ pathLength: 1, opacity: 1, rotate: 0 }}
          d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"
        />
      </motion.svg>
    );
  },
);

WhatsappIcon.displayName = "WhatsappIcon";
export default WhatsappIcon;
