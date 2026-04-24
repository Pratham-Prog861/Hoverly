"use client";

import { ArrowRight, Check, Copy, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { AlignCenterIcon } from "@/icons/align-center-icon";
import ArrowBackUpIcon from "@/icons/arrow-back-up-icon";
import { BellActiveIcon } from "@/icons/bell-active-icon";
import type { AnimatedIconHandle } from "@/icons/types";
import { hoverlyIcons } from "@/lib/icons";

const firstIcon = hoverlyIcons[0];
const installCommand = firstIcon.cliCommands[0].command;

const textAnimation = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: 0.3,
  },
};

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(installCommand);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden py-20 text-center md:py-28 lg:py-32">
      <HeroBackground />
      <Container className="relative z-10 flex flex-col items-center">
        <motion.div
          variants={textAnimation}
          initial="initial"
          animate="animate"
          transition={textAnimation.transition}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/75 px-4 py-2 text-[11px] tracking-[0.24em] text-foreground/70 uppercase shadow-[0_12px_36px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-white/6 dark:text-white/68 dark:shadow-[0_12px_60px_rgba(0,0,0,0.25)]"
        >
          <Sparkles className="size-3.5 text-[var(--color-highlight)]" />
          Shadcn-compatible motion icons
        </motion.div>

        <div className="max-w-4xl space-y-5 px-6">
          <motion.h1
            variants={textAnimation}
            initial="initial"
            animate="animate"
            transition={textAnimation.transition}
            className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Beautiful animated icons with{" "}
            <span className="text-[var(--color-highlight)]">intent</span>
          </motion.h1>

          <motion.p
            variants={textAnimation}
            initial="initial"
            animate="animate"
            transition={{ ...textAnimation.transition, delay: 0.05 }}
            className="mx-auto max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl"
          >
            Editable React components with motion baked in. Works cleanly with
            Next.js, shadcn, and modern design systems.
          </motion.p>
        </div>

        <motion.div
          variants={textAnimation}
          initial="initial"
          animate="animate"
          transition={{ ...textAnimation.transition, delay: 0.15 }}
          className="mt-8 flex flex-col items-center gap-4"
        >
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-12 cursor-pointer rounded-2xl bg-foreground px-5 text-background hover:bg-foreground/88 dark:bg-white dark:text-black dark:hover:bg-white/88"
            >
              <Link href="/icons">
                Browse Icons
                <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="h-12 cursor-pointer rounded-2xl border-border bg-card/80 px-5 text-foreground hover:bg-card dark:border-white/12 dark:bg-white/6 dark:text-white dark:hover:bg-white/10"
              onClick={handleCopy}
            >
              {copied ? (
                <>
                  <Check className="size-4 text-emerald-400" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="size-4" />
                  Copy Install
                </>
              )}
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

function HeroBackground() {
  const initialAnimationDelayMs = 500;
  const idleThresholdMs = 5000;
  const animationDurationMs = 1000;

  const iconARef = useRef<AnimatedIconHandle>(null);
  const iconBRef = useRef<AnimatedIconHandle>(null);
  const iconCRef = useRef<AnimatedIconHandle>(null);
  const iconDRef = useRef<AnimatedIconHandle>(null);
  const iconERef = useRef<AnimatedIconHandle>(null);
  const iconFRef = useRef<AnimatedIconHandle>(null);
  const iconGRef = useRef<AnimatedIconHandle>(null);

  const lastInteractionRef = useRef<number>(0);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearAllAnimationTimeouts = useCallback(() => {
    timeoutsRef.current.forEach((id) => {
      clearTimeout(id);
    });
    timeoutsRef.current = [];
  }, []);

  const triggerAllAnimations = useCallback(() => {
    clearAllAnimationTimeouts();

    const iconRefs = [
      iconARef,
      iconBRef,
      iconCRef,
      iconDRef,
      iconERef,
      iconFRef,
      iconGRef,
    ];

    iconRefs.forEach((ref) => {
      void ref.current?.startAnimation();

      const timeoutId = setTimeout(() => {
        void ref.current?.stopAnimation();
      }, animationDurationMs);

      timeoutsRef.current.push(timeoutId);
    });
  }, [clearAllAnimationTimeouts]);

  useEffect(() => {
    lastInteractionRef.current = Date.now();

    const initialTimeout = setTimeout(() => {
      triggerAllAnimations();
    }, initialAnimationDelayMs);

    const idleInterval = setInterval(() => {
      const timeSinceLastInteraction = Date.now() - lastInteractionRef.current;

      if (timeSinceLastInteraction >= idleThresholdMs) {
        triggerAllAnimations();
        lastInteractionRef.current = Date.now();
      }
    }, idleThresholdMs);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(idleInterval);
      clearAllAnimationTimeouts();
    };
  }, [clearAllAnimationTimeouts, triggerAllAnimations]);

  return (
    <div className="pointer-events-none absolute inset-0 hidden md:block">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(18,194,233,0.14),transparent_55%)] dark:bg-[radial-gradient(circle_at_center,rgba(18,194,233,0.1),transparent_55%)]" />

      <FloatingIcon className="left-[4%] top-24 -rotate-[20deg] text-foreground/14 dark:text-white/12">
        <AlignCenterIcon ref={iconARef} className="h-16 w-16 xl:h-20 xl:w-20" />
      </FloatingIcon>

      <FloatingIcon className="left-[16%] top-44 rotate-[14deg] text-foreground/12 dark:text-white/10">
        <BellActiveIcon ref={iconBRef} className="h-28 w-28 xl:h-36 xl:w-36" />
      </FloatingIcon>

      <FloatingIcon className="right-[12%] top-28 rotate-[22deg] text-foreground/22 dark:text-white/20">
        <ArrowBackUpIcon ref={iconCRef} size={84} strokeWidth={2.6} />
      </FloatingIcon>

      <FloatingIcon className="right-[20%] bottom-40 -rotate-[18deg] text-foreground/12 dark:text-white/10">
        <AlignCenterIcon ref={iconARef} className="h-16 w-16 xl:h-20 xl:w-20" />
      </FloatingIcon>

      <FloatingIcon className="left-[10%] bottom-38 rotate-[10deg] text-foreground/20 dark:text-white/18">
        <ArrowBackUpIcon ref={iconERef} size={84} strokeWidth={2.4} />
      </FloatingIcon>

      <FloatingIcon className="right-[8%] bottom-20 -rotate-[10deg] text-foreground/14 dark:text-white/12">
        <BellActiveIcon ref={iconFRef} className="h-18 w-18 xl:h-24 xl:w-24" />
      </FloatingIcon>

      <FloatingIcon className="left-[32%] top-18 rotate-[8deg] text-foreground/18 dark:text-white/16">
        <ArrowBackUpIcon ref={iconGRef} size={84} strokeWidth={2.6} />
      </FloatingIcon>
    </div>
  );
}

function FloatingIcon({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 5.5,
        ease: "easeInOut",
        repeat: Number.POSITIVE_INFINITY,
      }}
      className={`pointer-events-auto absolute ${className}`}
    >
      {children}
    </motion.div>
  );
}
