"use client";

import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";
import { motion, useAnimate } from "motion/react";

import type { AnimatedIconHandle, AnimatedIconProps } from "./types";

const ArrowDown01Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 40, className = "", color = "currentColor", strokeWidth = 2 },
    ref,
  ) => {
    const [scope, animate] = useAnimate();
    const isAnimatingRef = useRef(false);

    const swapDistance = 9;
    const swapEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

    const start = useCallback(async () => {
      if (isAnimatingRef.current) return;
      isAnimatingRef.current = true;

      // Reset for clean replay.
      await animate(
        ".arrow-core, .zero, .one-path, .one-base",
        { opacity: 0, pathLength: 0, filter: "blur(0.8px)" },
        { duration: 0 },
      );
      await animate(".number-layer", { scale: 0.985 }, { duration: 0 });
      await animate(".zero, .one", { x: 0, y: 0 }, { duration: 0 });

      // Arrow reveals first.
      await animate(
        ".arrow-core",
        {
          opacity: [0.18, 1],
          pathLength: [0, 1],
          filter: ["blur(0.8px)", "blur(0px)"],
        },
        { duration: 0.42, ease: swapEase },
      );

      // Digits fade/draw in.
      await animate(
        ".zero, .one-path, .one-base",
        {
          opacity: [0, 1],
          pathLength: [0, 1],
          filter: ["blur(0.8px)", "blur(0px)"],
        },
        {
          duration: 0.34,
          ease: "easeOut",
          delay: (i) => i * 0.04,
        },
      );

      // Simultaneous cross-over swap with lateral drift + fade blend.
      await Promise.all([
        animate(
          ".zero",
          {
            y: [0, swapDistance * 0.62, swapDistance + 1.2, swapDistance],
            x: [0, -0.6, -0.3, 0],
            opacity: [1, 0.88, 0.82, 0.9],
          },
          { duration: 0.44, ease: swapEase, times: [0, 0.45, 0.78, 1] },
        ),
        animate(
          ".one",
          {
            y: [0, -swapDistance * 0.62, -swapDistance - 1.2, -swapDistance],
            x: [0, 0.6, 0.3, 0],
            opacity: [1, 0.88, 0.82, 0.9],
          },
          { duration: 0.44, ease: swapEase, times: [0, 0.45, 0.78, 1] },
        ),
      ]);

      // Settling polish.
      animate(
        ".number-layer",
        { scale: [0.985, 1.02, 1], y: [0, -0.2, 0] },
        { duration: 0.26, ease: "easeOut" },
      );

      // Soft loop while hovered.
      while (isAnimatingRef.current) {
        await animate(
          ".arrow-core",
          { opacity: [1, 0.72, 1] },
          { duration: 0.8, ease: "easeInOut" },
        );

        if (!isAnimatingRef.current) break;
        await new Promise((resolve) => setTimeout(resolve, 500));
      }
    }, [animate]);

    const stop = useCallback(() => {
      isAnimatingRef.current = false;
      animate(".zero, .one", { x: 0, y: 0, opacity: 1 }, { duration: 0.24, ease: "easeInOut" });
      animate(".number-layer", { scale: 1 }, { duration: 0.2, ease: "easeOut" });
      animate(
        ".arrow-core, .zero, .one-path, .one-base",
        { opacity: 1, pathLength: 1, filter: "blur(0px)" },
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
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        color={color}
        className={`cursor-pointer select-none ${className}`}
        style={{ overflow: "visible" }}
      >
        <motion.path
          className="arrow-core"
          initial={{ opacity: 1, pathLength: 1 }}
          d="m3 16 4 4 4-4"
        />
        <motion.path
          className="arrow-core"
          initial={{ opacity: 1, pathLength: 1 }}
          d="M7 20V4"
        />

        <motion.g className="number-layer" style={{ transformOrigin: "50% 50%" }}>
          <motion.rect
            className="zero"
            x="15"
            y="4"
            width="4"
            height="6"
            ry="2"
            initial={{ opacity: 1 }}
          />
          <motion.g className="one">
            <motion.path
              className="one-path"
              initial={{ opacity: 1, pathLength: 1 }}
              d="M17 20v-6h-2"
            />
            <motion.path
              className="one-base"
              initial={{ opacity: 1, pathLength: 1 }}
              d="M15 20h4"
            />
          </motion.g>
        </motion.g>
      </motion.svg>
    );
  },
);

ArrowDown01Icon.displayName = "ArrowDown01Icon";

export default ArrowDown01Icon;
