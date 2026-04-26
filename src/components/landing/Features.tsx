"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { useState } from "react";

import HashtagIcon from "@/icons/hashtag-icon";
import ArrowBackIcon from "@/icons/arrow-back-icon";
import LinkedinIcon from "@/icons/linkedin-icon";
import BrandReactNativeIcon from "@/icons/brand-react-native-icon";

const featureCards = [
  {
    title: "open source",
    description:
      "fully open, editable, and designed to fit real product teams.",
    className: "md:col-span-2",
    visual: <OpenSourceVisual />,
  },
  {
    title: "customize",
    description:
      "tune stroke, timing, and composition without fighting the component shape.",
    className: "md:col-span-3",
    visual: <CustomizeVisual />,
  },
  {
    title: "registry ready",
    description:
      "copy from the browser or install through a clean shadcn-compatible flow.",
    className: "md:col-span-3",
    visual: <RegistryVisual />,
  },
  {
    title: "motion first",
    description:
      "every icon is designed with movement as a feature, not an afterthought.",
    className: "md:col-span-2",
    visual: <MotionVisual />,
  },
];

export default function Features() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-10 font-heading text-3xl font-medium text-foreground"
      >
        Features
      </motion.h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
        {featureCards.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            viewport={{ once: true }}
            className={feature.className}
          >
            <FeatureCard
              label={feature.title}
              description={feature.description}
              component={feature.visual}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

interface FeatureCardProps {
  component: ReactNode;
  label: string;
  description: string;
}

function FeatureCard({ component, label, description }: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group surface-card relative flex h-100 flex-col overflow-hidden rounded-[1.75rem]"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 bg-linear-to-br from-(--color-highlight)/14 via-transparent to-transparent" />
      </div>

      <div className="relative h-full w-full overflow-hidden">
        {component}
        <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent via-background/20 to-background/85 dark:via-black/20 dark:to-black/90" />
        <div className="absolute bottom-4 left-4 z-10 space-y-1">
          <p className="text-base font-medium text-foreground dark:text-white">
            {label}
          </p>
          <p className="max-w-sm text-sm text-foreground/70 dark:text-white/70">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function OpenSourceVisual() {
  return (
    <div className="relative h-full w-full bg-[radial-gradient(circle_at_top_left,rgba(18,194,233,0.16),transparent_35%),linear-gradient(135deg,#eef4ff,#f7fbff)] p-6 dark:bg-[radial-gradient(circle_at_top_left,rgba(18,194,233,0.16),transparent_35%),linear-gradient(135deg,#111217,#161823)]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(2,6,23,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(2,6,23,0.06)_1px,transparent_1px)] bg-size-[38px_38px] opacity-40 dark:bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] dark:opacity-30" />
      <div className="absolute left-6 top-6 rounded-full border border-border/70 bg-card/75 px-3 py-1 text-[11px] tracking-[0.2em] text-foreground/60 uppercase dark:border-white/10 dark:bg-white/6 dark:text-white/60">
        source
      </div>
      <div className="absolute inset-x-6 top-20 rounded-[1.25rem] border border-border/70 bg-background/70 p-4 shadow-[0_18px_50px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-black/30 dark:shadow-[0_18px_60px_rgba(0,0,0,0.28)]">
        <div className="flex items-center justify-between text-xs text-foreground/55 dark:text-white/45">
          <span>hoverly/icons</span>
          <span>public repo</span>
        </div>
        <div className="mt-4 space-y-3">
          <div className="h-2 w-2/3 rounded-full bg-foreground/14 dark:bg-white/12" />
          <div className="h-2 w-1/2 rounded-full bg-foreground/12 dark:bg-white/10" />
          <div className="h-2 w-3/4 rounded-full bg-(--color-highlight)/35" />
          <div className="h-2 w-1/3 rounded-full bg-foreground/12 dark:bg-white/10" />
        </div>
      </div>
      <div className="absolute bottom-28 right-8 rounded-[1.5rem] border border-border/70 bg-card/70 p-5 backdrop-blur-sm dark:border-white/10 dark:bg-white/6">
        <HashtagIcon
          size={74}
          strokeWidth={2.6}
          className="text-foreground/85 dark:text-white/85"
        />
      </div>
    </div>
  );
}

function CustomizeVisual() {
  return (
    <div className="relative h-full w-full bg-[linear-gradient(135deg,#edf3ff,#f8fbff)] p-6 dark:bg-[linear-gradient(135deg,#0f1117,#171b23)]">
      <div className="absolute inset-y-0 left-[52%] w-px bg-foreground/12 dark:bg-white/8" />
      <div className="absolute left-6 top-6 right-[52%] rounded-[1.25rem] border border-border/70 bg-background/72 p-4 dark:border-white/10 dark:bg-black/26">
        <div className="mb-4 text-[11px] tracking-[0.2em] text-foreground/52 uppercase dark:text-white/42">
          props
        </div>
        <div className="space-y-3 text-sm text-foreground/72 dark:text-white/72">
          <div className="flex items-center justify-between rounded-xl bg-foreground/6 px-3 py-2 dark:bg-white/5">
            <span>size</span>
            <span className="font-mono text-foreground dark:text-white">
              24
            </span>
          </div>
          <div className="flex items-center justify-between rounded-xl bg-foreground/6 px-3 py-2 dark:bg-white/5">
            <span>color</span>
            <span className="font-mono text-(--color-highlight)">
              currentColor
            </span>
          </div>
          <div className="flex items-center justify-between rounded-xl bg-foreground/6 px-3 py-2 dark:bg-white/5">
            <span>stroke</span>
            <span className="font-mono text-foreground dark:text-white">2</span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-12 right-10 flex h-44 w-44 items-center justify-center rounded-[2rem] border border-border/70 bg-card/70 shadow-[0_24px_60px_rgba(18,194,233,0.18)] dark:border-white/10 dark:bg-white/6 dark:shadow-[0_24px_80px_rgba(18,194,233,0.16)]">
        <ArrowBackIcon size={96} className="text-(--color-highlight)" />
      </div>
      <div className="absolute right-8 top-8 rounded-full border border-border/70 bg-card/75 px-3 py-1 text-[11px] tracking-[0.2em] text-foreground/55 uppercase dark:border-white/10 dark:bg-white/6 dark:text-white/55">
        live preview
      </div>
    </div>
  );
}

function RegistryVisual() {
  type CliTab = "npm" | "pnpm" | "yarn" | "bun";
  const [activeTab, setActiveTab] = useState<CliTab>("npm");
  const commands: Record<CliTab, string> = {
    npm: "npx shadcn@latest add https://hoverly.com/r/align-center-icon.json",
    pnpm: "pnpm dlx shadcn@latest add https://hoverly.com/r/align-center-icon.json",
    yarn: "yarn shadcn@latest add https://hoverly.com/r/align-center-icon.json",
    bun: "bunx --bun shadcn@latest add https://hoverly.com/r/align-center-icon.json",
  };

  return (
    <div className="relative h-full w-full bg-[linear-gradient(160deg,#edf4ff,#f8fbff)] p-6 dark:bg-[linear-gradient(160deg,#101116,#17141a)]">
      <div className="absolute inset-x-6 top-8 overflow-hidden rounded-[1.4rem] border border-border/70 bg-card/80 dark:border-white/10 dark:bg-[#121012]">
        <div className="flex items-center justify-between border-b border-border/70 px-4 py-3 dark:border-white/8">
          <div className="flex gap-2">
            {(["npm", "pnpm", "yarn", "bun"] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={[
                  "cursor-pointer rounded-xl px-3 py-1.5 text-sm transition",
                  activeTab === tab
                    ? "bg-foreground/10 text-foreground dark:bg-white/10 dark:text-white"
                    : "text-foreground/55 hover:bg-foreground/6 hover:text-foreground/85 dark:text-white/45 dark:hover:bg-white/6 dark:hover:text-white/80",
                ].join(" ")}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <span className="size-3 rounded-full bg-[#8a2b34]" />
            <span className="size-3 rounded-full bg-[#8a6c18]" />
            <span className="size-3 rounded-full bg-[#1f6a3d]" />
          </div>
        </div>
        <div className="px-5 py-6 font-mono text-[15px] text-foreground/78 dark:text-[#d8deea]">
          <span className="mr-3 text-[#ff944d]">$</span>
          {commands[activeTab]}
        </div>
      </div>
      <div className="absolute bottom-10 right-10 rounded-[1.5rem] border border-border/70 bg-card/70 p-5 dark:border-white/10 dark:bg-white/6">
        <LinkedinIcon
          size={64}
          className="text-foreground/90 dark:text-white/90"
        />
      </div>
    </div>
  );
}

function MotionVisual() {
  return (
    <div className="relative h-full w-full bg-[radial-gradient(circle_at_top,rgba(18,194,233,0.2),transparent_30%),linear-gradient(160deg,#e9f4ff,#f6fbff)] p-6 dark:bg-[radial-gradient(circle_at_top,rgba(18,194,233,0.16),transparent_30%),linear-gradient(160deg,#0f1117,#151822)]">
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
        className="absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[2rem] border border-border/70 bg-card/75 shadow-[0_24px_80px_rgba(18,194,233,0.2)] dark:border-white/10 dark:bg-white/6 dark:shadow-[0_24px_80px_rgba(18,194,233,0.18)]"
      >
        <BrandReactNativeIcon size={96} className="text-foreground dark:text-white" />
      </motion.div>
      <div className="absolute left-6 top-6 rounded-full border border-border/70 bg-card/75 px-3 py-1 text-[11px] tracking-[0.2em] text-foreground/55 uppercase dark:border-white/10 dark:bg-white/6 dark:text-white/55">
        hover aware
      </div>
      <div className="absolute bottom-24 left-6 space-y-3">
        <div className="h-2 w-18 rounded-full bg-foreground/18 dark:bg-white/15" />
        <div className="h-2 w-24 rounded-full bg-(--color-highlight)/40" />
        <div className="h-2 w-14 rounded-full bg-foreground/15 dark:bg-white/12" />
      </div>
    </div>
  );
}
