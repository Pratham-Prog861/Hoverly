"use client";

import { forwardRef, useImperativeHandle, useCallback } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const LinkedinIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = useCallback(async () => {
      await animate(
        ".border",
        { scale: [1, 1.08, 0.95, 1.03, 1] },
        { duration: 0.35, ease: "easeInOut" },
      );
      animate(
        ".line-1",
        { pathLength: [0, 1], opacity: [0, 1] },
        { duration: 0.25, ease: "easeOut" },
      );
      animate(
        ".line-2",
        { pathLength: [0, 1], opacity: [0, 1] },
        { duration: 0.2, delay: 0.1, ease: "easeOut" },
      );
      animate(
        ".line-3",
        { pathLength: [0, 1], opacity: [0, 1] },
        { duration: 0.4, delay: 0.15, ease: "easeOut" },
      );
      animate(
        ".shake-path",
        { x: [-1, 1, -1, 1, 0] },
        { duration: 0.15, ease: "linear" },
      );
    }, [animate]);

    const stop = useCallback(async () => {
      await animate(".shake-path", { x: 0 }, { duration: 0.1 });
      animate(
        ".line-1, .line-2, .line-3",
        { pathLength: 1, opacity: 1 },
        { duration: 0.15 },
      );
      animate(".border", { scale: 1 }, { duration: 0.15 });
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
        className={"cursor-pointer " + className}
        onHoverStart={start}
        onHoverEnd={stop}
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <motion.path
          className="line-1"
          d="M8 11v5"
          initial={{ pathLength: 1, opacity: 1 }}
        />
        <motion.path
          className="line-2"
          d="M8 8v.01"
          initial={{ pathLength: 1, opacity: 1 }}
        />
        <motion.path
          className="line-3 shake-path"
          d="M12 16v-5 M16 16v-3a2 2 0 1 0 -4 0"
          initial={{ pathLength: 1, opacity: 1, x: 0 }}
        />
        <motion.path
          className="border"
          d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z"
          style={{ transformOrigin: "center" }}
          initial={{ scale: 1 }}
        />
      </motion.svg>
    );
  },
);

LinkedinIcon.displayName = "LinkedinIcon";
export default LinkedinIcon;
