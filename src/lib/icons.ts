import { AlignCenterIcon } from "@/icons/align-center-icon";
import ArrowBackIcon from "@/icons/arrow-back-icon";
import ArrowBackUpIcon from "@/icons/arrow-back-up-icon";
import { BellActiveIcon } from "@/icons/bell-active-icon";
import BrandReactNativeIcon from "@/icons/brand-react-native-icon";
import GithubIcon from "@/icons/github-icon";
import HashtagIcon from "@/icons/hashtag-icon";
import LinkedinIcon from "@/icons/linkedin-icon";
import OpenaiIcon from "@/icons/openai-icon";
import QwenIcon from "@/icons/qwen-icon";
import ThreadsIcon from "@/icons/threads-icon";
import TwitchIcon from "@/icons/twitch-icon";
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
const githubRegistryUrl = "https://hoverly.com/r/github-icon.json";
const hashtagRegistryUrl = "https://hoverly.com/r/hashtag-icon.json";
const linkedinRegistryUrl = "https://hoverly.com/r/linkedin-icon.json";
const openaiRegistryUrl = "https://hoverly.com/r/openai-icon.json";
const qwenRegistryUrl = "https://hoverly.com/r/qwen-icon.json";
const threadsRegistryUrl = "https://hoverly.com/r/threads-icon.json";
const twitchRegistryUrl = "https://hoverly.com/r/twitch-icon.json";
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

const openaiIconSource = `"use client";

import { forwardRef, useImperativeHandle, useCallback } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const PATHS = [
  "M11.217 19.384a3.501 3.501 0 0 0 6.783 -1.217v-5.167l-6 -3.35",
  "M5.214 15.014a3.501 3.501 0 0 0 4.446 5.266l4.34 -2.534v-6.946",
  "M6 7.63c-1.391 -.236 -2.787 .395 -3.534 1.689a3.474 3.474 0 0 0 1.271 4.745l4.263 2.514l6 -3.348",
  "M12.783 4.616a3.501 3.501 0 0 0 -6.783 1.217v5.067l6 3.45",
  "M18.786 8.986a3.501 3.501 0 0 0 -4.446 -5.266l-4.34 2.534v6.946",
  "M18 16.302c1.391 .236 2.787 -.395 3.534 -1.689a3.474 3.474 0 0 0 -1.271 -4.745l-4.308 -2.514l-5.955 3.42",
];

const STAGGER_DELAY = 0.07;
const DRAW_DURATION = 0.35;

const BrandOpenaiIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = useCallback(async () => {
      await animate(
        ".arc",
        { pathLength: 0, opacity: 0 },
        { duration: 0 },
      );

      PATHS.forEach((_, i) => {
        animate(
          \`.arc-\${i}\`,
          { pathLength: [0, 1], opacity: [0, 1] },
          {
            duration: DRAW_DURATION,
            ease: "easeOut",
            delay: i * STAGGER_DELAY,
          },
        );
      });
    }, [animate]);

    const stop = useCallback(() => {
      animate(
        ".arc",
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
        className={\`cursor-pointer select-none \${className}\`}
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        {PATHS.map((d, i) => (
          <motion.path
            key={i}
            d={d}
            className={\`arc arc-\${i}\`}
            initial={{ pathLength: 1, opacity: 1 }}
          />
        ))}
      </motion.svg>
    );
  },
);

BrandOpenaiIcon.displayName = "BrandOpenaiIcon";
export default BrandOpenaiIcon;
`;

const qwenIconSource = `"use client";

import { forwardRef, useCallback, useImperativeHandle } from "react";
import { motion, useAnimate } from "motion/react";

import type { AnimatedIconHandle, AnimatedIconProps } from "./types";

const BrandQwenIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  ({ size = 24, color = "currentColor", className = "" }, ref) => {
    const [scope, animate] = useAnimate();

    const start = useCallback(async () => {
      // Reset quickly before replaying to keep hover feedback crisp.
      await animate(".qwen-spin", { rotate: 0 }, { duration: 0 });
      await animate(
        ".qwen-shape",
        {
          opacity: 0.18,
          pathLength: 0.15,
          scale: 0.985,
          filter: "blur(0.8px)",
        },
        { duration: 0 },
      );

      await animate(
        ".qwen-shape",
        {
          opacity: [0.18, 1],
          pathLength: [0.15, 1],
          scale: [0.985, 1.02, 1],
          filter: ["blur(0.8px)", "blur(0px)"],
        },
        {
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1],
          times: [0, 0.55, 1],
        },
      );

      animate(
        ".qwen-spin",
        { rotate: 360 },
        { duration: 5.5, ease: "linear", repeat: Number.POSITIVE_INFINITY },
      );
    }, [animate]);

    const stop = useCallback(() => {
      animate(
        ".qwen-spin",
        { rotate: 0 },
        { duration: 0.25, ease: "easeOut" },
      );
      animate(
        ".qwen-shape",
        {
          opacity: 1,
          pathLength: 1,
          scale: 1,
          filter: "blur(0px)",
        },
        { duration: 0.22, ease: "easeOut" },
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
        fill={color}
        fillRule="evenodd"
        viewBox="0 0 24 24"
        height={size}
        width={size}
        style={{ flex: "none", lineHeight: 1, overflow: "visible" }}
        xmlns="http://www.w3.org/2000/svg"
        className={\`qwen-icon cursor-pointer select-none \${className}\`}
      >
        <title>Qwen</title>
        <motion.g className="qwen-spin" style={{ transformOrigin: "50% 50%" }}>
          <motion.path
            className="qwen-shape"
            initial={{ opacity: 1, pathLength: 1, scale: 1 }}
            style={{ transformOrigin: "50% 50%" }}
            d="M12.604 1.34c.393.69.784 1.382 1.174 2.075a.18.18 0 00.157.091h5.552c.174 0 .322.11.446.327l1.454 2.57c.19.337.24.478.024.837-.26.43-.513.864-.76 1.3l-.367.658c-.106.196-.223.28-.04.512l2.652 4.637c.172.301.111.494-.043.77-.437.785-.882 1.564-1.335 2.34-.159.272-.352.375-.68.37-.777-.016-1.552-.01-2.327.016a.099.099 0 00-.081.05 575.097 575.097 0 01-2.705 4.74c-.169.293-.38.363-.725.364-.997.003-2.002.004-3.017.002a.537.537 0 01-.465-.271l-1.335-2.323a.09.09 0 00-.083-.049H4.982c-.285.03-.553-.001-.805-.092l-1.603-2.77a.543.543 0 01-.002-.54l1.207-2.12a.198.198 0 000-.197 550.951 550.951 0 01-1.875-3.272l-.79-1.395c-.16-.31-.173-.496.095-.965.465-.813.927-1.625 1.387-2.436.132-.234.304-.334.584-.335a338.3 338.3 0 012.589-.001.124.124 0 00.107-.063l2.806-4.895a.488.488 0 01.422-.246c.524-.001 1.053 0 1.583-.006L11.704 1c.341-.003.724.032.9.34zm-3.432.403a.06.06 0 00-.052.03L6.254 6.788a.157.157 0 01-.135.078H3.253c-.056 0-.07.025-.041.074l5.81 10.156c.025.042.013.062-.034.063l-2.795.015a.218.218 0 00-.2.116l-1.32 2.31c-.044.078-.021.118.068.118l5.716.008c.046 0 .08.02.104.061l1.403 2.454c.046.081.092.082.139 0l5.006-8.76.783-1.382a.055.055 0 01.096 0l1.424 2.53a.122.122 0 00.107.062l2.763-.02a.04.04 0 00.035-.02.041.041 0 000-.04l-2.9-5.086a.108.108 0 010-.113l.293-.507 1.12-1.977c.024-.041.012-.062-.035-.062H9.2c-.059 0-.073-.026-.043-.077l1.434-2.505a.107.107 0 000-.114L9.225 1.774a.06.06 0 00-.053-.031zm6.29 8.02c.046 0 .058.02.034.06l-.832 1.465-2.613 4.585a.056.056 0 01-.05.029.058.058 0 01-.05-.029L8.498 9.841c-.02-.034-.01-.052.028-.054l.216-.012 6.722-.012z"
          />
        </motion.g>
      </motion.svg>
    );
  },
);

BrandQwenIcon.displayName = "BrandQwenIcon";

export default BrandQwenIcon;
`;

const twitchIconSource = `"use client";

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

      await animate(
        ".twitch-eye",
        {
          opacity: [0, 1],
          pathLength: [0, 1],
          filter: ["blur(0.8px)", "blur(0px)"],
        },
        { duration: 0.22, ease: "easeOut" },
      );

      animate(
        ".twitch-shell, .twitch-eye",
        { stroke: "#9146FF" },
        { duration: 0.25, ease: "easeOut" },
      );

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
        className={\`cursor-pointer select-none \${className}\`}
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
`;

const threadsIconSource = `import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const BrandThreadsIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = async () => {
      animate(scope.current, { scale: 1, rotate: 0 });
      animate(".animated-path", { pathLength: 1, opacity: 1 });

      animate(
        ".animated-path",
        { pathLength: [0, 1], opacity: [0, 1] },
        { duration: 1, ease: "easeInOut" },
      );

      await animate(
        scope.current,
        {
          scale: [0.5, 1.1, 1],
          rotate: [180, -10, 0],
        },
        {
          duration: 1,
          ease: [0.34, 1.56, 0.64, 1],
        },
      );
    };

    const stop = () => {
      animate(scope.current, { scale: 1, rotate: 0 });
      animate(".animated-path", { pathLength: 1, opacity: 1 });
    };

    useImperativeHandle(ref, () => {
      return {
        startAnimation: start,
        stopAnimation: stop,
      };
    });

    const handleHoverStart = () => {
      start();
    };

    const handleHoverEnd = () => {
      stop();
    };

    return (
      <motion.svg
        ref={scope}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
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
          className="animated-path"
          d="M19 7.5c-1.333 -3 -3.667 -4.5 -7 -4.5c-5 0 -8 2.5 -8 9s3.5 9 8 9s7 -3 7 -5s-1 -5 -7 -5c-2.5 0 -3 1.25 -3 2.5c0 1.5 1 2.5 2.5 2.5c2.5 0 3.5 -1.5 3.5 -5s-2 -4 -3 -4s-1.833 .333 -2.5 1"
        />
      </motion.svg>
    );
  },
);

BrandThreadsIcon.displayName = "BrandThreadsIcon";

export default BrandThreadsIcon;
`;

const githubIconSource = `"use client";

import { forwardRef, useImperativeHandle, useCallback } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const GithubIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = useCallback(async () => {
      // Instantly reset paths to transparent and 0 length
      await animate(
        ".body, .tail",
        { pathLength: 0, opacity: 0 },
        { duration: 0 },
      );

      // Draw the body first
      animate(
        ".body",
        { pathLength: [0, 1], opacity: [0, 1] },
        { duration: 0.6, ease: "easeInOut" },
      );

      // Stagger the tail
      await animate(
        ".tail",
        { pathLength: [0, 1], opacity: [0, 1] },
        { duration: 0.4, ease: "easeOut", delay: 0.3 },
      );

      // Final punchy scale/rotate
      animate(
        ".github-group",
        { scale: [1, 1.1, 1], rotate: [0, -10, 10, 0] },
        { duration: 0.5, ease: "easeInOut" },
      );
    }, [animate]);

    const stop = useCallback(() => {
      animate(
        ".body, .tail",
        { pathLength: 1, opacity: 1 },
        { duration: 0.3, ease: "easeOut" },
      );
      animate(
        ".github-group",
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
        className={\`inline-flex cursor-pointer items-center justify-center \${className}\`}
        style={{ overflow: "visible" }}
      >
        <motion.g
          className="github-group"
          style={{ transformOrigin: "center" }}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <motion.path
            className="body"
            initial={{ pathLength: 1, opacity: 1 }}
            d="M15 21v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
          />
          <motion.path
            className="tail"
            initial={{ pathLength: 1, opacity: 1 }}
            d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3"
          />
        </motion.g>
      </motion.svg>
    );
  },
);

GithubIcon.displayName = "GithubIcon";
export default GithubIcon;
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
    slug: "github-icon",
    name: "Github Icon",
    category: "Social",
    description:
      "A bold GitHub mark with a playful draw-on animation and subtle rotation burst.",
    tags: ["github", "social", "brand", "logo", "developer"],
    componentName: "GithubIcon",
    importPath: "@/icons/github-icon",
    sourceCode: githubIconSource,
    registryUrl: githubRegistryUrl,
    cliCommands: [
      {
        label: "npm",
        command: `npx shadcn@latest add ${githubRegistryUrl}`,
      },
      {
        label: "pnpm",
        command: `pnpm dlx shadcn@latest add ${githubRegistryUrl}`,
      },
      {
        label: "yarn",
        command: `yarn shadcn@latest add ${githubRegistryUrl}`,
      },
      {
        label: "bun",
        command: `bunx --bun shadcn@latest add ${githubRegistryUrl}`,
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
    slug: "openai-icon",
    name: "OpenAI Icon",
    category: "Social",
    description:
      "An OpenAI brand mark with staggered arc drawing motion for AI and technology touchpoints.",
    tags: ["openai", "social", "brand", "logo", "ai", "tech"],
    componentName: "OpenaiIcon",
    importPath: "@/icons/openai-icon",
    sourceCode: openaiIconSource,
    registryUrl: openaiRegistryUrl,
    cliCommands: [
      {
        label: "npm",
        command: `npx shadcn@latest add ${openaiRegistryUrl}`,
      },
      {
        label: "pnpm",
        command: `pnpm dlx shadcn@latest add ${openaiRegistryUrl}`,
      },
      {
        label: "yarn",
        command: `yarn shadcn@latest add ${openaiRegistryUrl}`,
      },
      {
        label: "bun",
        command: `bunx --bun shadcn@latest add ${openaiRegistryUrl}`,
      },
    ],
  },
  {
    slug: "qwen-icon",
    name: "Qwen Icon",
    category: "Social",
    description:
      "A Qwen brand mark with fade-in and draw-on motion for AI and technology touchpoints.",
    tags: ["qwen", "social", "brand", "logo", "ai", "tech"],
    componentName: "QwenIcon",
    importPath: "@/icons/qwen-icon",
    sourceCode: qwenIconSource,
    registryUrl: qwenRegistryUrl,
    cliCommands: [
      {
        label: "npm",
        command: `npx shadcn@latest add ${qwenRegistryUrl}`,
      },
      {
        label: "pnpm",
        command: `pnpm dlx shadcn@latest add ${qwenRegistryUrl}`,
      },
      {
        label: "yarn",
        command: `yarn shadcn@latest add ${qwenRegistryUrl}`,
      },
      {
        label: "bun",
        command: `bunx --bun shadcn@latest add ${qwenRegistryUrl}`,
      },
    ],
  },
  {
    slug: "twitch-icon",
    name: "Twitch Icon",
    category: "Social",
    description:
      "A Twitch brand mark with subtle fade-and-draw reveal, plus playful blink and glitch hover motion.",
    tags: ["twitch", "social", "brand", "logo", "streaming", "gaming"],
    componentName: "TwitchIcon",
    importPath: "@/icons/twitch-icon",
    sourceCode: twitchIconSource,
    registryUrl: twitchRegistryUrl,
    cliCommands: [
      {
        label: "npm",
        command: `npx shadcn@latest add ${twitchRegistryUrl}`,
      },
      {
        label: "pnpm",
        command: `pnpm dlx shadcn@latest add ${twitchRegistryUrl}`,
      },
      {
        label: "yarn",
        command: `yarn shadcn@latest add ${twitchRegistryUrl}`,
      },
      {
        label: "bun",
        command: `bunx --bun shadcn@latest add ${twitchRegistryUrl}`,
      },
    ],
  },
  {
    slug: "threads-icon",
    name: "Threads Icon",
    category: "Social",
    description:
      "A Threads brand mark with draw-on path animation and dynamic hover bounce.",
    tags: ["threads", "social", "brand", "logo", "meta"],
    componentName: "ThreadsIcon",
    importPath: "@/icons/threads-icon",
    sourceCode: threadsIconSource,
    registryUrl: threadsRegistryUrl,
    cliCommands: [
      {
        label: "npm",
        command: `npx shadcn@latest add ${threadsRegistryUrl}`,
      },
      {
        label: "pnpm",
        command: `pnpm dlx shadcn@latest add ${threadsRegistryUrl}`,
      },
      {
        label: "yarn",
        command: `yarn shadcn@latest add ${threadsRegistryUrl}`,
      },
      {
        label: "bun",
        command: `bunx --bun shadcn@latest add ${threadsRegistryUrl}`,
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
  "github-icon": GithubIcon,
  "hashtag-icon": HashtagIcon,
  "linkedin-icon": LinkedinIcon,
  "openai-icon": OpenaiIcon,
  "qwen-icon": QwenIcon,
  "threads-icon": ThreadsIcon,
  "twitch-icon": TwitchIcon,
  "whatsapp-icon": WhatsappIcon,
  "twitter-x-icon": TwitterXIcon,
};
