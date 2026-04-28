import { AlignCenterIcon } from "@/icons/align-center-icon";
import ArrowBackIcon from "@/icons/arrow-back-icon";
import ArrowBackUpIcon from "@/icons/arrow-back-up-icon";
import { BellActiveIcon } from "@/icons/bell-active-icon";
import BrandReactNativeIcon from "@/icons/brand-react-native-icon";
import HashtagIcon from "@/icons/hashtag-icon";
import LinkedinIcon from "@/icons/linkedin-icon";
import WhatsappIcon from "@/icons/whatsapp-icon";
import TwitterXIcon from "@/icons/twitter-x-icon";
import type {
  HoverlyIconCategory,
  HoverlyIconComponent,
  HoverlyIconRecord,
} from "@/icons/types";

const alignCenterRegistryUrl = "https://hoverly.com/r/align-center-icon.json";
const arrowBackRegistryUrl = "https://hoverly.com/r/arrow-back-icon.json";
const arrowBackUpRegistryUrl = "https://hoverly.com/r/arrow-back-up-icon.json";
const bellActiveRegistryUrl = "https://hoverly.com/r/bell-active-icon.json";
const brandReactNativeRegistryUrl =
  "https://hoverly.com/r/brand-react-native-icon.json";
const hashtagRegistryUrl = "https://hoverly.com/r/hashtag-icon.json";
const linkedinRegistryUrl = "https://hoverly.com/r/linkedin-icon.json";
const whatsappRegistryUrl = "https://hoverly.com/r/whatsapp-icon.json";
const twitterXRegistryUrl = "https://hoverly.com/r/twitter-x-icon.json";

const linkedinIconSource = `"use client";

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
`;

const hashtagIconSource = `"use client";

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
        className={\`cursor-pointer \${className}\`}
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

        <rect width="24" height="24" fill={color} mask={\`url(#\${maskId})\`} />
      </motion.svg>
    );
  },
);

HashtagIcon.displayName = "HashtagIcon";
export default HashtagIcon;
`;

const whatsappIconSource = `"use client";

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
        className={\`cursor-pointer \${className}\`}
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
`;

const twitterXIconSource = `"use client";

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
        className={\`cursor-pointer \${className}\`}
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
`;

export const hoverlyCategories: HoverlyIconCategory[] = [
  "All",
  "Social",
  "UI",
  "Arrows",
];

export const alignCenterIconSource = `"use client";

import { forwardRef, useImperativeHandle } from "react";
import { motion, useAnimate } from "motion/react";

import type { AnimatedIconHandle, AnimatedIconProps } from "@/icons/types";

export const AlignCenterIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "", ...props },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(".line-1", { scaleX: [1, 0.8, 1] }, { duration: 0.3 });
      animate(
        ".line-2",
        { scaleX: [1, 1.2, 1] },
        { duration: 0.3, delay: 0.1 },
      );
      animate(
        ".line-3",
        { scaleX: [1, 0.9, 1] },
        { duration: 0.3, delay: 0.2 },
      );
    };

    const stopAnimation = () => {
      animate(".line-1", { scaleX: 1 }, { duration: 0.2 });
      animate(".line-2", { scaleX: 1 }, { duration: 0.2 });
      animate(".line-3", { scaleX: 1 }, { duration: 0.2 });
    };

    useImperativeHandle(ref, () => {
      return {
        startAnimation,
        stopAnimation,
      };
    });

    return (
      <motion.svg
        ref={scope}
        onHoverStart={startAnimation}
        onHoverEnd={stopAnimation}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={\`cursor-pointer \${className}\`}
        style={{ overflow: "visible" }}
        role="img"
        aria-label="Align center icon"
        {...props}
      >
        <title>Align center icon</title>
        <motion.path
          className="line-1"
          d="M4 6l16 0"
          style={{ transformOrigin: "center" }}
        />
        <motion.path
          className="line-2"
          d="M8 12l8 0"
          style={{ transformOrigin: "center" }}
        />
        <motion.path
          className="line-3"
          d="M6 18l12 0"
          style={{ transformOrigin: "center" }}
        />
      </motion.svg>
    );
  },
);

AlignCenterIcon.displayName = "AlignCenterIcon";
`;

const arrowBackIconSource = `"use client";

import { forwardRef, useImperativeHandle } from "react";
import { motion, useAnimate } from "motion/react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";

const ArrowBackIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = async () => {
      await animate(
        ".path",
        { pathLength: 0, opacity: 0, pathOffset: 1 },
        { duration: 0 },
      );
      animate(
        ".path",
        { pathLength: [0, 1], opacity: [0, 1], pathOffset: [1, 0] },
        { duration: 0.7, ease: "easeOut" },
      );
    };

    const stop = () => {
      animate(
        ".path",
        { pathLength: 1, opacity: 1, pathOffset: 0 },
        { duration: 0.2 },
      );
    };

    useImperativeHandle(ref, () => ({
      startAnimation: start,
      stopAnimation: stop,
    }));

    return (
      <motion.div
        ref={scope}
        className={\`inline-flex cursor-pointer items-center justify-center \${className}\`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          onMouseEnter={start}
          onMouseLeave={stop}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />

          <motion.path
            className="path"
            d="M9 16l-4 -4l4 -4 M5 12h10a4 4 0 1 0 0 -8h-1"
            style={{ pathLength: 1, pathOffset: 0, opacity: 1 }}
          />
        </svg>
      </motion.div>
    );
  },
);

ArrowBackIcon.displayName = "ArrowBackIcon";
export default ArrowBackIcon;
`;

const arrowBackUpIconSource = `"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const ArrowBackUpIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = async () => {
      await animate(
        ".path",
        { pathLength: 0, opacity: 0, pathOffset: 1 },
        { duration: 0 },
      );
      animate(
        ".path",
        { pathLength: [0, 1], opacity: [0, 1], pathOffset: [1, 0] },
        { duration: 0.7, ease: "easeOut" },
      );
    };

    const stop = () => {
      animate(
        ".path",
        { pathLength: 1, opacity: 1, pathOffset: 0 },
        { duration: 0.2 },
      );
    };

    useImperativeHandle(ref, () => ({
      startAnimation: start,
      stopAnimation: stop,
    }));

    return (
      <motion.div
        ref={scope}
        className={\`inline-flex cursor-pointer items-center justify-center \${className}\`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          onMouseEnter={start}
          onMouseLeave={stop}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />

          <motion.path
            className="path"
            d="M9 14l-4 -4l4 -4 M5 10h11a4 4 0 1 1 0 8h-1"
            style={{ pathLength: 1, pathOffset: 0, opacity: 1 }}
          />
        </svg>
      </motion.div>
    );
  },
);

ArrowBackUpIcon.displayName = "ArrowBackUpIcon";
export default ArrowBackUpIcon;
`;

const brandReactNativeIconSource = `"use client";

import { forwardRef, useImperativeHandle, useRef } from "react";
import { motion, useAnimate } from "motion/react";
import type { AnimatedIconHandle, AnimatedIconProps } from "@/icons/types";

const ORBITS_PATH =
  "M6.357 9c-2.637 .68 -4.357 1.845 -4.357 3.175c0 2.107 4.405 3.825 9.85 3.825c.74 0 1.26 -.039 1.95 -.097 M9.837 15.9c-.413 -.596 -.806 -1.133 -1.18 -1.8c-2.751 -4.9 -3.488 -9.77 -1.63 -10.873c1.15 -.697 3.047 .253 4.974 2.254 M6.429 15.387c-.702 2.688 -.56 4.716 .56 5.395c1.783 1.08 5.387 -1.958 8.043 -6.804c.36 -.67 .683 -1.329 .968 -1.978 M12 18.52c1.928 2 3.817 2.95 4.978 2.253c1.85 -1.102 1.121 -5.972 -1.633 -10.873c-.384 -.677 -.777 -1.204 -1.18 -1.8 M17.66 15c2.612 -.687 4.34 -1.85 4.34 -3.176c0 -2.11 -4.408 -3.824 -9.845 -3.824c-.747 0 -1.266 .029 -1.955 .087 M8 12c.285 -.66 .607 -1.308 .968 -1.978c2.647 -4.844 6.253 -7.89 8.046 -6.801c1.11 .679 1.262 2.706 .56 5.393";

const DRAW_DURATION = 0.55;

const BrandReactNativeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();
    const loopControls = useRef<Array<ReturnType<typeof animate>>>([]);
    const isAnimating = useRef(false);

    const start = async () => {
      if (isAnimating.current) return;
      isAnimating.current = true;

      loopControls.current.forEach((c) => c.stop());
      loopControls.current = [];

      await animate(
        ".orbit-system",
        { rotate: 0, opacity: 1, scale: 1 },
        { duration: 0 },
      );

      await animate(
        ".orbit-path",
        { pathLength: 0, opacity: 0 },
        { duration: 0 },
      );

      await animate(
        ".center-dot",
        { pathLength: 0, opacity: 0, scale: 1 },
        { duration: 0 },
      );

      await animate(
        ".orbit-path",
        { pathLength: [0, 1], opacity: [0, 1] },
        {
          duration: DRAW_DURATION * 2.5,
          ease: "easeInOut",
        },
      );

      await animate(
        ".center-dot",
        { pathLength: [0, 1], opacity: [0, 1], scale: [0.5, 1] },
        { duration: 0.35, ease: "backOut" },
      );

      await new Promise((r) => setTimeout(r, 120));

      loopControls.current.push(
        animate(
          ".orbit-system",
          { rotate: 360 },
          { duration: 18, ease: "linear", repeat: Infinity },
        ),
      );

      loopControls.current.push(
        animate(
          ".center-dot",
          { scale: [1, 1.4, 1], opacity: [1, 0.75, 1] },
          { duration: 2.2, ease: "easeInOut", repeat: Infinity },
        ),
      );

      loopControls.current.push(
        animate(
          ".orbit-system",
          { opacity: [1, 0.6, 1] },
          { duration: 3, ease: "easeInOut", repeat: Infinity },
        ),
      );
    };

    const stop = async () => {
      if (!isAnimating.current) return;

      loopControls.current.forEach((c) => c.stop());
      loopControls.current = [];

      await animate(
        ".orbit-system",
        { rotate: 0, opacity: 1, scale: 1 },
        { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] },
      );

      await animate(
        ".orbit-path",
        { pathLength: 1, opacity: 1 },
        { duration: 0.25, ease: "easeOut" },
      );

      await animate(
        ".center-dot",
        { pathLength: 1, opacity: 1, scale: 1 },
        { duration: 0.25, ease: "easeOut" },
      );

      isAnimating.current = false;
    };

    useImperativeHandle(ref, () => ({
      startAnimation: start,
      stopAnimation: stop,
    }));

    return (
      <motion.svg
        ref={scope}
        onMouseEnter={start}
        onMouseLeave={stop}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={\`cursor-pointer select-none \${className}\`}
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />

        <motion.g
          className="orbit-system"
          style={{ originX: "50%", originY: "50%" }}
        >
          <motion.path className="orbit-path" d={ORBITS_PATH} />
        </motion.g>

        <motion.path
          className="center-dot"
          d="M12.26 12.015h-.01c-.01 .13 -.12 .24 -.26 .24a.263 .263 0 0 1 -.25 -.26c0 -.14 .11 -.25 .24 -.25h-.01c.13 -.01 .25 .11 .25 .24"
          style={{ originX: "50%", originY: "50%" }}
        />
      </motion.svg>
    );
  },
);

BrandReactNativeIcon.displayName = "BrandReactNativeIcon";
export default BrandReactNativeIcon;
`;

export const hoverlyIcons: HoverlyIconRecord[] = [
  {
    slug: "hashtag-icon",
    name: "Hashtag Icon",
    category: "UI",
    description:
      "A hashtag icon with sequential drawing lines for metadata, tags, or topics.",
    tags: ["hashtag", "tag", "metadata", "social", "ui"],
    componentName: "HashtagIcon",
    importPath: "@/icons/hashtag-icon",
    sourceCode: hashtagIconSource,
    registryUrl: hashtagRegistryUrl,
    cliCommands: [
      {
        label: "npm",
        command: `npx shadcn@latest add ${hashtagRegistryUrl}`,
      },
      {
        label: "pnpm",
        command: `pnpm dlx shadcn@latest add ${hashtagRegistryUrl}`,
      },
      {
        label: "yarn",
        command: `yarn shadcn@latest add ${hashtagRegistryUrl}`,
      },
      {
        label: "bun",
        command: `bunx --bun shadcn@latest add ${hashtagRegistryUrl}`,
      },
    ],
  },

  {
    slug: "align-center-icon",
    name: "Align Center Icon",
    category: "UI",
    description:
      "A centered alignment glyph with subtle line choreography for polished interface states.",
    tags: ["align", "text", "layout", "editor", "ui", "formatting"],
    componentName: "AlignCenterIcon",
    importPath: "@/icons/align-center-icon",
    sourceCode: alignCenterIconSource,
    registryUrl: alignCenterRegistryUrl,
    cliCommands: [
      {
        label: "npm",
        command: `npx shadcn@latest add ${alignCenterRegistryUrl}`,
      },
      {
        label: "pnpm",
        command: `pnpm dlx shadcn@latest add ${alignCenterRegistryUrl}`,
      },
      {
        label: "yarn",
        command: `yarn shadcn@latest add ${alignCenterRegistryUrl}`,
      },
      {
        label: "bun",
        command: `bunx --bun shadcn@latest add ${alignCenterRegistryUrl}`,
      },
    ],
  },
  {
    slug: "arrow-back-icon",
    name: "Arrow Back Icon",
    category: "Arrows",
    description:
      "A classic back arrow with staged path drawing motion for navigation controls.",
    tags: ["arrow", "back", "left", "navigation", "arrows", "ui"],
    componentName: "ArrowBackIcon",
    importPath: "@/icons/arrow-back-icon",
    sourceCode: arrowBackIconSource,
    registryUrl: arrowBackRegistryUrl,
    cliCommands: [
      {
        label: "npm",
        command: `npx shadcn@latest add ${arrowBackRegistryUrl}`,
      },
      {
        label: "pnpm",
        command: `pnpm dlx shadcn@latest add ${arrowBackRegistryUrl}`,
      },
      {
        label: "yarn",
        command: `yarn shadcn@latest add ${arrowBackRegistryUrl}`,
      },
      {
        label: "bun",
        command: `bunx --bun shadcn@latest add ${arrowBackRegistryUrl}`,
      },
    ],
  },
  {
    slug: "bell-active-icon",
    name: "Bell Active Icon",
    category: "UI",
    description:
      "A lively notification bell with ringing swing motion for active alert states.",
    tags: ["bell", "notification", "alert", "ui", "status", "active"],
    componentName: "BellActiveIcon",
    importPath: "@/icons/bell-active-icon",
    sourceCode: `"use client";

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
        className={\`cursor-pointer \${className}\`}
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
`,
    registryUrl: bellActiveRegistryUrl,
    cliCommands: [
      {
        label: "npm",
        command: `npx shadcn@latest add ${bellActiveRegistryUrl}`,
      },
      {
        label: "pnpm",
        command: `pnpm dlx shadcn@latest add ${bellActiveRegistryUrl}`,
      },
      {
        label: "yarn",
        command: `yarn shadcn@latest add ${bellActiveRegistryUrl}`,
      },
      {
        label: "bun",
        command: `bunx --bun shadcn@latest add ${bellActiveRegistryUrl}`,
      },
    ],
  },
  {
    slug: "arrow-back-up-icon",
    name: "Arrow Back Up Icon",
    category: "Arrows",
    description:
      "A returning arrow with staged path drawing motion for back and undo style actions.",
    tags: ["arrow", "back", "up", "undo", "navigation", "arrows"],
    componentName: "ArrowBackUpIcon",
    importPath: "@/icons/arrow-back-up-icon",
    sourceCode: arrowBackUpIconSource,
    registryUrl: arrowBackUpRegistryUrl,
    cliCommands: [
      {
        label: "npm",
        command: `npx shadcn@latest add ${arrowBackUpRegistryUrl}`,
      },
      {
        label: "pnpm",
        command: `pnpm dlx shadcn@latest add ${arrowBackUpRegistryUrl}`,
      },
      {
        label: "yarn",
        command: `yarn shadcn@latest add ${arrowBackUpRegistryUrl}`,
      },
      {
        label: "bun",
        command: `bunx --bun shadcn@latest add ${arrowBackUpRegistryUrl}`,
      },
    ],
  },
  {
    slug: "brand-react-native-icon",
    name: "Brand React Native Icon",
    category: "Social",
    description:
      "A React Native brand mark with smooth orbital motion for social and technology touchpoints.",
    tags: ["brand", "react-native", "social", "tech", "logo", "orbit"],
    componentName: "BrandReactNativeIcon",
    importPath: "@/icons/brand-react-native-icon",
    sourceCode: brandReactNativeIconSource,
    registryUrl: brandReactNativeRegistryUrl,
    cliCommands: [
      {
        label: "npm",
        command: `npx shadcn@latest add ${brandReactNativeRegistryUrl}`,
      },
      {
        label: "pnpm",
        command: `pnpm dlx shadcn@latest add ${brandReactNativeRegistryUrl}`,
      },
      {
        label: "yarn",
        command: `yarn shadcn@latest add ${brandReactNativeRegistryUrl}`,
      },
      {
        label: "bun",
        command: `bunx --bun shadcn@latest add ${brandReactNativeRegistryUrl}`,
      },
    ],
  },
  {
    slug: "linkedin-icon",
    name: "LinkedIn Icon",
    category: "Social",
    description:
      "A professional LinkedIn logo icon with shaky draw-in animation for social links.",
    tags: ["linkedin", "social", "brand", "logo", "network"],
    componentName: "LinkedinIcon",
    importPath: "@/icons/linkedin-icon",
    sourceCode: linkedinIconSource,
    registryUrl: linkedinRegistryUrl,
    cliCommands: [
      {
        label: "npm",
        command: `npx shadcn@latest add ${linkedinRegistryUrl}`,
      },
      {
        label: "pnpm",
        command: `pnpm dlx shadcn@latest add ${linkedinRegistryUrl}`,
      },
      {
        label: "yarn",
        command: `yarn shadcn@latest add ${linkedinRegistryUrl}`,
      },
      {
        label: "bun",
        command: `bunx --bun shadcn@latest add ${linkedinRegistryUrl}`,
      },
    ],
  },
  {
    slug: "whatsapp-icon",
    name: "Whatsapp Icon",
    category: "Social",
    description:
      "A vibrant Whatsapp icon with staggered path drawing and ringing animation for chat links.",
    tags: ["whatsapp", "social", "brand", "logo", "chat", "messaging"],
    componentName: "WhatsappIcon",
    importPath: "@/icons/whatsapp-icon",
    sourceCode: whatsappIconSource,
    registryUrl: whatsappRegistryUrl,
    cliCommands: [
      {
        label: "npm",
        command: `npx shadcn@latest add ${whatsappRegistryUrl}`,
      },
      {
        label: "pnpm",
        command: `pnpm dlx shadcn@latest add ${whatsappRegistryUrl}`,
      },
      {
        label: "yarn",
        command: `yarn shadcn@latest add ${whatsappRegistryUrl}`,
      },
      {
        label: "bun",
        command: `bunx --bun shadcn@latest add ${whatsappRegistryUrl}`,
      },
    ],
  },
  {
    slug: "twitter-x-icon",
    name: "Twitter X Icon",
    category: "Social",
    description:
      "A sleek Twitter/X logo icon with staggered path drawing and punchy hover response.",
    tags: ["twitter", "x", "social", "brand", "logo"],
    componentName: "TwitterXIcon",
    importPath: "@/icons/twitter-x-icon",
    sourceCode: twitterXIconSource,
    registryUrl: twitterXRegistryUrl,
    cliCommands: [
      {
        label: "npm",
        command: `npx shadcn@latest add ${twitterXRegistryUrl}`,
      },
      {
        label: "pnpm",
        command: `pnpm dlx shadcn@latest add ${twitterXRegistryUrl}`,
      },
      {
        label: "yarn",
        command: `yarn shadcn@latest add ${twitterXRegistryUrl}`,
      },
      {
        label: "bun",
        command: `bunx --bun shadcn@latest add ${twitterXRegistryUrl}`,
      },
    ],
  },
];

export const hoverlyIconComponents: Record<string, HoverlyIconComponent> = {
  "align-center-icon": AlignCenterIcon,
  "arrow-back-icon": ArrowBackIcon,
  "arrow-back-up-icon": ArrowBackUpIcon,
  "bell-active-icon": BellActiveIcon,
  "brand-react-native-icon": BrandReactNativeIcon,
  "hashtag-icon": HashtagIcon,
  "linkedin-icon": LinkedinIcon,
  "whatsapp-icon": WhatsappIcon,
  "twitter-x-icon": TwitterXIcon,
};
