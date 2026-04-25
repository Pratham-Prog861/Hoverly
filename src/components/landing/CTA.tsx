"use client";

import { ArrowRight, ArrowUpRight, Check, Copy, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { AlignCenterIcon } from "@/icons/align-center-icon";
import { hoverlyIcons } from "@/lib/icons";

const githubUrl = "https://github.com/pratham-prog861/hoverly";
const featuredIcon = hoverlyIcons[0];

export default function CTA() {
  const [activeCommandIndex, setActiveCommandIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleCopyCommand = async () => {
    const cmd = featuredIcon.cliCommands[activeCommandIndex]?.command;
    if (!cmd) return;
    await navigator.clipboard.writeText(cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative overflow-hidden py-28 sm:py-36 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="relative isolate overflow-hidden rounded-[2.5rem] border border-border/70 bg-[linear-gradient(180deg,rgba(248,251,255,0.94)_0%,rgba(241,247,255,0.98)_100%)] px-6 pt-16 shadow-[0_24px_80px_rgba(15,23,42,0.12)] after:pointer-events-none after:absolute after:inset-0 after:rounded-[2.5rem] after:ring-1 after:ring-inset after:ring-black/4 dark:border-white/6 dark:bg-[linear-gradient(180deg,rgba(18,22,28,0.92)_0%,rgba(10,12,16,0.96)_100%)] dark:shadow-[0_-4px_80px_rgba(0,0,0,0.24),0_40px_100px_rgba(0,0,0,0.32)] dark:after:ring-white/4 sm:px-12 md:pt-20 lg:flex lg:items-center lg:gap-x-16 lg:px-16 lg:pt-0"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-100 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(18,194,233,0.08),transparent_70%)]" />
          </div>

          <div className="mx-auto max-w-xl text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2.5 rounded-full border border-(--color-highlight)/12 bg-(--color-highlight)/6 px-4 py-2 text-[11px] font-medium tracking-[0.2em] text-(--color-highlight) uppercase"
            >
              <Sparkles className="size-3.5" />
              Ready to ship motion
            </motion.div>

            <h2 className="mt-8 font-heading text-3xl/tight font-bold tracking-tight text-foreground sm:text-4xl/tight lg:text-[2.5rem]/tight dark:text-white">
              Bring your interface to{" "}
              <span className="text-foreground/70 dark:text-white/70">
                life
              </span>
              .
            </h2>

            <p className="mt-5 max-w-xl text-base/relaxed text-foreground/60 dark:text-white/44">
              Browse a curated library of animated icons. Copy production-ready
              React components and install through a clean registry built for
              modern teams.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-xl bg-foreground px-6 text-[13px] text-background hover:bg-foreground/92 font-semibold transition-all duration-300 hover:-translate-y-px dark:bg-white dark:text-black dark:hover:bg-white/92"
              >
                <Link href="/icons">
                  Browse Icons
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="h-12 rounded-xl border-border bg-card/70 px-6 text-[13px] text-foreground/65 hover:bg-card hover:text-foreground hover:border-border transition-all duration-300 font-medium dark:border-white/10 dark:bg-white/3 dark:text-white/60 dark:hover:bg-white/8 dark:hover:text-white dark:hover:border-white/16"
                onClick={() =>
                  window.open(githubUrl, "_blank", "noopener,noreferrer")
                }
              >
                <ArrowUpRight className="mr-2 size-3.5" />
                Star on GitHub
              </Button>
            </div>
          </div>

          <div className="relative mt-16 h-88 lg:mt-0 lg:h-104 lg:w-md shrink-0">
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: -3 }}
              transition={{
                duration: 0.6,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="absolute left-0 top-4 w-[20rem] max-w-none rounded-[1.5rem] border border-border/70 bg-card shadow-[0_24px_60px_rgba(15,23,42,0.12)] transition-transform duration-500 hover:-rotate-1 hover:scale-[1.01] group dark:border-white/8 dark:bg-[#12151c] dark:shadow-[0_24px_60px_rgba(0,0,0,0.4)]"
            >
              <div className="flex items-center justify-between border-b border-border/70 p-4 dark:border-white/4">
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.22em] text-[#12C2E9]/70 uppercase mb-1">
                    Featured
                  </p>
                  <h3 className="text-lg font-semibold text-foreground tracking-tight dark:text-white">
                    {featuredIcon.name}
                  </h3>
                </div>
                <div className="flex size-12 items-center justify-center rounded-xl border border-border/70 bg-background/70 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] transition-transform duration-500 group-hover:scale-105 dark:border-white/6 dark:bg-black/40 dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.04)]">
                  <AlignCenterIcon className="h-6 w-6 text-foreground dark:text-white" />
                </div>
              </div>

              <div className="p-4">
                <div className="rounded-xl border border-border/70 bg-background/72 p-3.5 dark:border-white/5 dark:bg-black/25">
                  <div className="mb-2.5 flex items-center justify-between text-[11px] font-medium text-foreground/45 uppercase tracking-widest dark:text-white/30">
                    <span>Registry</span>
                    <span className="flex items-center gap-1.5 text-emerald-400/60">
                      <Check className="size-3" /> Ready
                    </span>
                  </div>
                  <code className="block font-mono text-xs/relaxed text-foreground/65 dark:text-white/50">
                    {featuredIcon.registryUrl}
                  </code>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20, rotate: 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: -2 }}
              transition={{
                duration: 0.6,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="absolute right-0 top-28 w-84 max-w-none rounded-[1.5rem] border border-border/70 bg-card shadow-[0_20px_50px_rgba(15,23,42,0.14)] ring-1 ring-black/3 transition-transform duration-500 hover:-translate-y-1 group/cli dark:border-white/6 dark:bg-[#0d0f14] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] dark:ring-white/3"
            >
              <div className="flex items-center justify-between rounded-t-[1.5rem] border-b border-border/70 bg-black/2 px-3 py-2.5 dark:border-white/4 dark:bg-white/2">
                <div className="flex gap-1 rounded-lg border border-border/70 bg-black/6 p-1 dark:border-white/4 dark:bg-black/30">
                  {featuredIcon.cliCommands.map((command, index) => (
                    <button
                      type="button"
                      key={command.label}
                      onClick={() => setActiveCommandIndex(index)}
                      className={[
                        "rounded-md px-3 py-1.5 text-[11px] font-medium tracking-wide transition-all duration-200 uppercase",
                        index === activeCommandIndex
                          ? "bg-foreground text-background dark:bg-white dark:text-black"
                          : "text-foreground/45 hover:text-foreground/75 hover:bg-black/6 dark:text-white/35 dark:hover:text-white/60 dark:hover:bg-white/60",
                      ].join(" ")}
                    >
                      {command.label}
                    </button>
                  ))}
                </div>
                <div className="flex gap-1.5 mr-2">
                  <span className="size-2 rounded-full bg-foreground/12 dark:bg-white/8" />
                  <span className="size-2 rounded-full bg-foreground/12 dark:bg-white/8" />
                  <span className="size-2 rounded-full bg-foreground/12 dark:bg-white/8" />
                </div>
              </div>

              <div className="relative min-h-25 px-5 py-6 font-mono text-[13px]/relaxed text-foreground/55 selection:bg-black/10 dark:text-white/40 dark:selection:bg-white/20">
                <span className="mr-2 text-[#12C2E9]/60 select-none">$</span>
                <span className="font-medium text-foreground/85 dark:text-white/80">
                  {featuredIcon.cliCommands[activeCommandIndex]?.command}
                </span>

                <button
                  type="button"
                  onClick={handleCopyCommand}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-lg border border-border/80 bg-black/5 p-2 text-foreground/40 backdrop-blur-md transition-all duration-300 hover:bg-black/10 hover:text-foreground group-hover/cli:opacity-100 dark:border-white/8 dark:bg-white/5 dark:text-white/35 dark:hover:bg-white/12 dark:hover:text-white"
                >
                  {copied ? (
                    <Check className="size-4 text-[#12C2E9]" />
                  ) : (
                    <Copy className="size-4" />
                  )}
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
