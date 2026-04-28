"use client";

import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";
import { motion, useAnimate } from "motion/react";

import type { AnimatedIconHandle, AnimatedIconProps } from "./types";

const InfoCircleIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();
    const isAnimatingRef = useRef(false);

    const start = useCallback(async () => {
      if (isAnimatingRef.current) return;
      isAnimatingRef.current = true;

      // Reset to replay reveal cleanly on each hover.
      await animate(
        ".info-circle, .info-circle-i, .info-line-i",
        { opacity: 0, pathLength: 0, filter: "blur(0.8px)" },
        { duration: 0 },
      );
      await animate(".info-group", { scale: 0.985 }, { duration: 0 });

      // Outer ring appears first.
      await animate(
        ".info-circle",
        {
          opacity: [0.18, 1],
          pathLength: [0, 1],
          filter: ["blur(0.8px)", "blur(0px)"],
        },
        {
          duration: 0.48,
          ease: [0.22, 1, 0.36, 1],
        },
      );

      // Dot of "i", then stem for a readable sequence.
      await animate(
        ".info-circle-i",
        {
          opacity: [0, 1],
          pathLength: [0, 1],
          filter: ["blur(0.8px)", "blur(0px)"],
        },
        { duration: 0.2, ease: "easeOut" },
      );
      await animate(
        ".info-line-i",
        {
          opacity: [0, 1],
          pathLength: [0, 1],
          filter: ["blur(0.8px)", "blur(0px)"],
        },
        { duration: 0.32, ease: "easeOut" },
      );

      // Gentle settle pulse to complete the reveal.
      animate(
        ".info-group",
        { scale: [0.985, 1.02, 1] },
        { duration: 0.26, ease: "easeOut" },
      );

      // Quiet hover loop.
      while (isAnimatingRef.current) {
        await animate(
          ".info-group",
          { scale: [1, 1.015, 1] },
          { duration: 0.7, ease: "easeInOut" },
        );

        if (!isAnimatingRef.current) break;
        await new Promise((resolve) => setTimeout(resolve, 600));
      }
    }, [animate]);

    const stop = useCallback(() => {
      isAnimatingRef.current = false;
      animate(".info-group", { scale: 1 }, { duration: 0.2, ease: "easeOut" });
      animate(
        ".info-circle, .info-circle-i, .info-line-i",
        { pathLength: 1, opacity: 1, filter: "blur(0px)" },
        { duration: 0.2, ease: "easeInOut" },
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
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`cursor-pointer select-none ${className}`}
        onHoverStart={start}
        onHoverEnd={stop}
        style={{ overflow: "visible" }}
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <motion.g className="info-group" style={{ transformOrigin: "50% 50%" }}>
          <motion.path
            d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"
            className="info-circle"
            initial={{ pathLength: 1, opacity: 1 }}
          />
          <motion.path
            d="M12 9h.01"
            className="info-circle-i"
            initial={{ pathLength: 1, opacity: 1 }}
          />
          <motion.path
            d="M11 12h1v4h1"
            className="info-line-i"
            initial={{ pathLength: 1, opacity: 1 }}
          />
        </motion.g>
      </motion.svg>
    );
  },
);

InfoCircleIcon.displayName = "InfoCircleIcon";

export default InfoCircleIcon;
