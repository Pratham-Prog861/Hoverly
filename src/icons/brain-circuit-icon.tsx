"use client";

import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";
import { motion, useAnimate } from "motion/react";

import type { AnimatedIconHandle, AnimatedIconProps } from "./types";

const BrainCircuitIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();
    const isAnimatingRef = useRef(false);

    const startAnimation = useCallback(async () => {
      if (isAnimatingRef.current) return;
      isAnimatingRef.current = true;

      // Reset for a clean replay every hover.
      await animate(
        ".brain-outline, .circuit-line, .terminal",
        { opacity: 0, pathLength: 0, filter: "blur(0.8px)" },
        { duration: 0 },
      );
      await animate(
        ".brain-group",
        { scale: 0.985, rotate: 0 },
        { duration: 0 },
      );
      await animate(".terminal", { scale: 0.75 }, { duration: 0 });

      // 1) Brain shell fades in first.
      await animate(
        ".brain-outline",
        {
          opacity: [0.18, 1],
          pathLength: [0, 1],
          filter: ["blur(0.8px)", "blur(0px)"],
        },
        { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
      );

      // 2) Circuit traces draw with light stagger.
      await animate(
        ".circuit-line",
        {
          opacity: [0, 1],
          pathLength: [0, 1],
          filter: ["blur(0.8px)", "blur(0px)"],
        },
        {
          duration: 0.42,
          ease: "easeOut",
          delay: (i) => i * 0.05,
        },
      );

      // 3) Terminals pop in sequence.
      await animate(
        ".terminal",
        {
          scale: [0.75, 1.18, 1],
          opacity: [0, 1],
          filter: ["blur(0.8px)", "blur(0px)"],
        },
        {
          duration: 0.3,
          ease: "easeOut",
          delay: (i) => i * 0.08,
        },
      );

      // Final settle.
      animate(
        ".brain-group",
        { scale: [0.985, 1.02, 1] },
        { duration: 0.28, ease: "easeOut" },
      );

      // Hover loop: subtle neural pulse + terminal activity.
      while (isAnimatingRef.current) {
        await animate(
          ".brain-outline",
          { opacity: [1, 0.72, 1] },
          { duration: 1.2, ease: "easeInOut" },
        );

        if (!isAnimatingRef.current) break;

        await animate(
          ".terminal",
          { scale: [1, 1.35, 1], opacity: [1, 0.65, 1] },
          {
            duration: 0.7,
            ease: "easeInOut",
            delay: (i: number) => i * 0.08,
          },
        );

        if (!isAnimatingRef.current) break;
        await new Promise((resolve) => setTimeout(resolve, 420));
      }
    }, [animate]);

    const stopAnimation = useCallback(() => {
      isAnimatingRef.current = false;
      animate(
        ".brain-group",
        { scale: 1, rotate: 0 },
        { duration: 0.22, ease: "easeOut" },
      );
      animate(
        ".brain-outline, .circuit-line, .terminal",
        { opacity: 1, pathLength: 1, filter: "blur(0px)" },
        { duration: 0.22, ease: "easeOut" },
      );
      animate(".terminal", { scale: 1 }, { duration: 0.22, ease: "easeOut" });
    }, [animate]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
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
        onHoverStart={startAnimation}
        onHoverEnd={stopAnimation}
        style={{ overflow: "visible" }}
      >
        <motion.g
          className="brain-group"
          style={{ transformOrigin: "50% 50%" }}
        >
          <motion.path
            className="brain-outline"
            initial={{ pathLength: 1, opacity: 1 }}
            d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"
          />
          <motion.path
            className="circuit-line"
            initial={{ pathLength: 1, opacity: 1 }}
            d="M9 13a4.5 4.5 0 0 0 3-4"
          />
          <motion.path
            className="brain-outline"
            initial={{ pathLength: 1, opacity: 1 }}
            d="M6.003 5.125A3 3 0 0 0 6.401 6.5"
          />
          <motion.path
            className="brain-outline"
            initial={{ pathLength: 1, opacity: 1 }}
            d="M3.477 10.896a4 4 0 0 1 .585-.396"
          />
          <motion.path
            className="brain-outline"
            initial={{ pathLength: 1, opacity: 1 }}
            d="M6 18a4 4 0 0 1-1.967-.516"
          />
          <motion.path
            className="circuit-line"
            initial={{ pathLength: 1, opacity: 1 }}
            d="M12 13h4"
          />
          <motion.path
            className="circuit-line"
            initial={{ pathLength: 1, opacity: 1 }}
            d="M12 18h6a2 2 0 0 1 2 2v1"
          />
          <motion.path
            className="circuit-line"
            initial={{ pathLength: 1, opacity: 1 }}
            d="M12 8h8"
          />
          <motion.path
            className="circuit-line"
            initial={{ pathLength: 1, opacity: 1 }}
            d="M16 8V5a2 2 0 0 1 2-2"
          />
          <motion.circle
            className="terminal terminal-1"
            initial={{ opacity: 1 }}
            cx="16"
            cy="13"
            r=".5"
          />
          <motion.circle
            className="terminal terminal-2"
            initial={{ opacity: 1 }}
            cx="18"
            cy="3"
            r=".5"
          />
          <motion.circle
            className="terminal terminal-3"
            initial={{ opacity: 1 }}
            cx="20"
            cy="21"
            r=".5"
          />
          <motion.circle
            className="terminal terminal-4"
            initial={{ opacity: 1 }}
            cx="20"
            cy="8"
            r=".5"
          />
        </motion.g>
      </motion.svg>
    );
  },
);

BrainCircuitIcon.displayName = "BrainCircuitIcon";

export default BrainCircuitIcon;
