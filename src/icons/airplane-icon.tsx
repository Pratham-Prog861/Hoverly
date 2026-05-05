"use client";

import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";
import { motion, useAnimate } from "motion/react";

import type { AnimatedIconHandle, AnimatedIconProps } from "./types";

type CustomAnimation = {
  airPlaneDuration?: number;
  windDuration?: number;
  exitDuration?: number;
};

const AirplaneIcon = forwardRef<
  AnimatedIconHandle,
  AnimatedIconProps & CustomAnimation
>(
  (
    {
      size = 24,
      color = "currentColor",
      strokeWidth = 2,
      className = "",
      airPlaneDuration = 0.38,
      windDuration = 0.72,
      exitDuration = 0.24,
    },
    ref,
  ) => {
    const [scope, animate] = useAnimate();
    const isAnimatingRef = useRef(false);

    const start = useCallback(async () => {
      if (isAnimatingRef.current) return;
      isAnimatingRef.current = true;

      // Reset for repeatable hover reveal.
      await animate(
        ".airplane, .wind1, .wind2",
        { opacity: 0, pathLength: 0, filter: "blur(0.8px)" },
        { duration: 0 },
      );
      await animate(
        ".flight-group",
        { scale: 0.985, x: 0, y: 0, rotate: 0 },
        { duration: 0 },
      );
      await animate(".wind1", { x: 9, y: -5 }, { duration: 0 });
      await animate(".wind2", { x: 22, y: 7 }, { duration: 0 });

      // Plane appears first with subtle fade + draw.
      await animate(
        ".airplane",
        {
          opacity: [0.15, 1],
          pathLength: [0, 1],
          filter: ["blur(0.8px)", "blur(0px)"],
        },
        { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
      );

      // Takeoff micro-move.
      animate(
        ".flight-group",
        {
          x: [0, 0.8, 0],
          y: [0, -0.8, 0],
          rotate: [0, -2, 0],
          scale: [0.985, 1.02, 1],
        },
        { duration: airPlaneDuration, ease: "easeInOut" },
      );

      // Wind trails fade/draw with stagger.
      animate(
        ".wind1",
        {
          x: [-10, -14],
          y: [18, 22],
          opacity: [0, 1, 0],
          pathLength: [0, 1],
          filter: ["blur(0.8px)", "blur(0px)", "blur(0px)"],
        },
        { duration: windDuration, ease: "easeOut" },
      );

      animate(
        ".wind2",
        {
          x: [0, -3],
          y: [22, 27],
          opacity: [0, 1, 0],
          pathLength: [0, 1],
          filter: ["blur(0.8px)", "blur(0px)", "blur(0px)"],
        },
        { duration: windDuration, ease: "easeOut", delay: 0.16 },
      );

      // Hover loop: short engine nudge + cursor-like trail blips.
      while (isAnimatingRef.current) {
        await animate(
          ".flight-group",
          { x: [0, 0.5, 0], y: [0, -0.4, 0], rotate: [0, -1.2, 0] },
          { duration: 0.42, ease: "easeInOut" },
        );

        if (!isAnimatingRef.current) break;

        animate(
          ".wind1",
          { opacity: [0, 0.85, 0], pathLength: [0.2, 1] },
          { duration: 0.4, ease: "easeOut" },
        );
        animate(
          ".wind2",
          { opacity: [0, 0.75, 0], pathLength: [0.15, 1] },
          { duration: 0.45, ease: "easeOut", delay: 0.08 },
        );

        await new Promise((resolve) => setTimeout(resolve, 420));
      }
    }, [animate, airPlaneDuration, windDuration]);

    const stop = useCallback(() => {
      isAnimatingRef.current = false;
      animate(
        ".flight-group",
        { x: 0, y: 0, rotate: 0, scale: 1 },
        { duration: exitDuration, ease: "easeOut" },
      );
      animate(
        ".airplane, .wind1, .wind2",
        { opacity: 1, pathLength: 1, filter: "blur(0px)" },
        { duration: exitDuration, ease: "easeOut" },
      );
      animate(".wind1", { x: 9, y: -5, opacity: 0 }, { duration: exitDuration });
      animate(".wind2", { x: 22, y: 7, opacity: 0 }, { duration: exitDuration });
    }, [animate, exitDuration]);

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
        <motion.g className="flight-group" style={{ transformOrigin: "50% 50%" }}>
          <motion.path
            className="airplane"
            initial={{ opacity: 1, pathLength: 1 }}
            d="M13.617 1.53c.926-.747 1.964-.793 3.097-.777.587.009.88.013 1.115.104.373.145.67.442.815.815.09.235.095.528.104 1.115.016 1.133-.03 2.17-.778 3.097-.63.78-1.714 1.188-2.235 2.05-.398.656-.213 1.337-.042 2.038l1.28 5.245c.255 1.046.06 1.715-.67 2.446-.39.39-.713.37-1.028-.133l-3.862-6.154-1.845 1.466c-.67.532-1.003.798-1.18 1.172-.41.876-.15 2.192-.136 3.142.008.525-.446 1.56-1.088 1.594-.396.022-.531-.452-.66-.743l-1.232-2.802c-.294-.67-.306-.682-.976-.976l-2.802-1.233c-.29-.128-.765-.263-.743-.66.035-.641 1.07-1.095 1.594-1.087.95.013 2.266.274 3.142-.137.374-.176.64-.51 1.172-1.18l1.466-1.844L1.97 4.226c-.503-.316-.522-.64-.133-1.028.73-.73 1.4-.925 2.446-.67l5.245 1.28c.7.17 1.382.356 2.039-.042.86-.52 1.269-1.604 2.049-2.235"
          />

          <motion.path
            className="wind1"
            initial={{ opacity: 0, x: 9, y: -5, pathLength: 1 }}
            d="m.5 3.5 3-3"
          />
          <motion.path
            className="wind2"
            initial={{ opacity: 0, x: 22, y: 7, pathLength: 1 }}
            d="m.5 3.5 3-3"
          />
        </motion.g>
      </motion.svg>
    );
  },
);

AirplaneIcon.displayName = "AirplaneIcon";

export default AirplaneIcon;
