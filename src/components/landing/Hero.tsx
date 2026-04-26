"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { AlignCenterIcon } from "@/icons/align-center-icon";
import ArrowBackIcon from "@/icons/arrow-back-icon";
import HashtagIcon from "@/icons/hashtag-icon";
import { BellActiveIcon } from "@/icons/bell-active-icon";
import LinkedinIcon from "@/icons/linkedin-icon";

const icons = [
  {
    Icon: AlignCenterIcon,
    position: "left-[3%] top-24",
    size: 120,
    key: "align",
  },
  {
    Icon: ArrowBackIcon,
    position: "left-[15%] top-40",
    size: 100,
    key: "arrowback",
  },
  {
    Icon: HashtagIcon,
    position: "right-[12%] top-28",
    size: 110,
    key: "hashtag",
  },
  {
    Icon: BellActiveIcon,
    position: "right-[5%] bottom-56",
    size: 90,
    key: "bell",
  },
  {
    Icon: LinkedinIcon,
    position: "left-[8%] bottom-32",
    size: 80,
    key: "linkedin",
  },
  {
    Icon: HashtagIcon,
    position: "right-[18%] bottom-20",
    size: 70,
    key: "hashtag2",
  },
];

function getRandomIcons() {
  const shuffled = [...icons].sort(() => Math.random() - 0.5);
  return shuffled;
}

export default function Hero() {
  const [randomIcons, setRandomIcons] = useState<typeof icons>([]);

  useEffect(() => {
    setRandomIcons(getRandomIcons());
  }, []);

  const textAnimation = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3 },
  };

  return (
    <section className="hero-gradient relative flex flex-col items-center justify-center overflow-hidden py-20 text-center md:py-32">
      <div className="absolute inset-0 hidden md:block">
        {randomIcons.map((item, index) => (
          <motion.div
            key={`${item.key}-${index}`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
            className={`absolute ${item.position} pointer-events-auto cursor-pointer`}
            whileHover={{ y: -15 }}
          >
            <item.Icon
              size={item.size}
              className="text-foreground/25 dark:text-white/18"
            />
          </motion.div>
        ))}
      </div>

      <Container className="relative z-10 flex flex-col items-center">
        <motion.div
          variants={textAnimation}
          initial="initial"
          animate="animate"
          transition={textAnimation.transition}
          className="mb-6 flex flex-col items-center gap-3"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/60 px-4 py-1.5 text-xs font-medium tracking-[0.18em] text-foreground/70 uppercase dark:border-white/8 dark:bg-white/4 dark:text-white/60">
            We're Proudly Open Source
          </span>
        </motion.div>

        <div className="z-10 max-w-3xl space-y-4 px-6">
          <motion.h1
            variants={textAnimation}
            initial="initial"
            animate="animate"
            transition={textAnimation.transition}
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl dark:text-white"
          >
            icons that move with{" "}
            <span className="text-(--color-highlight)">intent</span>
          </motion.h1>

          <motion.p
            variants={textAnimation}
            initial="initial"
            animate="animate"
            transition={textAnimation.transition}
            className="mx-auto max-w-xl text-lg text-foreground/60 dark:text-white/50"
          >
            Editable React components with motion baked in. Works seamlessly
            with Next.js, shadcn, and modern design systems.
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
            <Link href="/icons">
              <Button
                size="lg"
                className="cursor-pointer rounded-xl bg-foreground px-6 text-sm font-medium text-background hover:bg-foreground/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
              >
                Browse Icons
              </Button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
