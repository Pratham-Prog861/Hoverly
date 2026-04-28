"use client";

import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";
import { motion, useAnimate } from "motion/react";

import type { AnimatedIconHandle, AnimatedIconProps } from "./types";

const BrandTwitchIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();
    const isAnimatingRef = useRef(false);

    const start = useCallback(async () => {
      if (isAnimatingRef.current) return;
      isAnimatingRef.current = true;

      // Reset to replay a crisp reveal each hover.
      await animate(
        ".twitch-shell, .twitch-eye",
        { opacity: 0, pathLength: 0, filter: "blur(0.8px)" },
        { duration: 0 },
      );
      await animate(
        ".twitch-shell",
        { x: 0, y: 0, rotate: 0, scale: 1, stroke: color },
        { duration: 0 },
      );

      // Subtle fade + draw in for shell.
      await animate(
        ".twitch-shell",
        {
          opacity: [0.12, 1],
          pathLength: [0, 1],
          filter: ["blur(0.8px)", "blur(0px)"],
          scale: [0.985, 1.02, 1],
        },
        {
          duration: 0.55,
          ease: [0.22, 1, 0.36, 1],
          times: [0, 0.55, 1],
        },
      );

      // Eyes appear just after shell so it feels intentional.
      await animate(
        ".twitch-eye",
        {
          opacity: [0, 1],
          pathLength: [0, 1],
          filter: ["blur(0.8px)", "blur(0px)"],
        },
        { duration: 0.22, ease: "easeOut" },
      );

      // Transition to Twitch brand purple after reveal.
      animate(
        ".twitch-shell, .twitch-eye",
        { stroke: "#9146FF" },
        { duration: 0.25, ease: "easeOut" },
      );

      // Hover loop: occasional blink + rare subtle glitch.
      while (isAnimatingRef.current) {
        await animate(
          ".twitch-eyes",
          { scaleY: [1, 0.08, 1] },
          { duration: 0.12, ease: "easeInOut" },
        );

        if (!isAnimatingRef.current) break;

        if (Math.random() > 0.68) {
          await animate(
            ".twitch-shell",
            {
              x: [0, -0.8, 0.8, 0],
              y: [0, 0.35, -0.35, 0],
              rotate: [0, -1.2, 1.2, 0],
            },
            { duration: 0.16, ease: "linear" },
          );
        }

        await new Promise((resolve) =>
          setTimeout(resolve, 900 + Math.random() * 1700),
        );
      }
    }, [animate, color]);

    const stop = useCallback(async () => {
      isAnimatingRef.current = false;

      await animate(
        ".twitch-shell",
        { x: 0, y: 0, rotate: 0, scale: 1 },
        { duration: 0.2, ease: "easeOut" },
      );
      animate(".twitch-eyes", { scaleY: 1 }, { duration: 0.2, ease: "easeOut" });
      animate(
        ".twitch-shell, .twitch-eye",
        {
          stroke: color,
          opacity: 1,
          pathLength: 1,
          filter: "blur(0px)",
        },
        { duration: 0.22, ease: "easeOut" },
      );
    }, [animate, color]);

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
        className={`cursor-pointer select-none ${className}`}
        style={{ overflow: "visible" }}
      >
        <motion.path
          className="twitch-shell"
          d="M21 2H3v16h5v4l4-4h5l4-4V2z"
          style={{ transformOrigin: "center" }}
          initial={{ opacity: 1, pathLength: 1 }}
        />
        <motion.g className="twitch-eyes" style={{ transformOrigin: "center 9px" }}>
          <motion.path
            className="twitch-eye"
            d="M11 11V7"
            initial={{ opacity: 1, pathLength: 1 }}
          />
          <motion.path
            className="twitch-eye"
            d="M16 11V7"
            initial={{ opacity: 1, pathLength: 1 }}
          />
        </motion.g>
      </motion.svg>
    );
  },
);

BrandTwitchIcon.displayName = "BrandTwitchIcon";

export default BrandTwitchIcon;
