"use client";

import { ArrowRight, ArrowUpRight, Check, Copy, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { AlignCenterIcon } from "@/icons/align-center-icon";
import { hoverlyIcons } from "@/lib/icons";

const githubUrl = "https://github.com";
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
          className="relative isolate overflow-hidden rounded-[2.5rem] border border-white/[0.06] bg-[linear-gradient(180deg,rgba(18,22,28,0.92)_0%,rgba(10,12,16,0.96)_100%)] px-6 pt-16 shadow-[0_-4px_80px_rgba(0,0,0,0.24),0_40px_100px_rgba(0,0,0,0.32)] after:pointer-events-none after:absolute after:inset-0 after:rounded-[2.5rem] after:ring-1 after:ring-inset after:ring-white/[0.04] sm:px-12 md:pt-20 lg:flex lg:items-center lg:gap-x-16 lg:px-16 lg:pt-0"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(18,194,233,0.08),transparent_70%)]" />
          </div>

          <div className="mx-auto max-w-xl text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2.5 rounded-full border border-[var(--color-highlight)]/[0.12] bg-[var(--color-highlight)]/[0.06] px-4 py-2 text-[11px] font-medium tracking-[0.2em] text-[var(--color-highlight)] uppercase"
            >
              <Sparkles className="size-3.5" />
              Ready to ship motion
            </motion.div>

            <h2 className="mt-8 font-heading text-3xl/tight font-bold tracking-tight text-white sm:text-4xl/tight lg:text-[2.5rem]/tight">
              Bring your interface to{" "}
              <span className="text-white/70">life</span>.
            </h2>

            <p className="mt-5 max-w-xl text-base/relaxed text-white/[0.44]">
              Browse a curated library of animated icons. Copy production-ready
              React components and install through a clean registry built for
              modern teams.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-xl bg-white px-6 text-[13px] text-black hover:bg-white/92 font-semibold transition-all duration-300 hover:translate-y-[-1px]"
              >
                <Link href="/icons">
                  Browse Icons
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="h-12 rounded-xl border-white/[0.1] bg-white/[0.03] px-6 text-[13px] text-white/[0.6] hover:bg-white/[0.08] hover:text-white hover:border-white/[0.16] transition-all duration-300 font-medium"
                onClick={() =>
                  window.open(githubUrl, "_blank", "noopener,noreferrer")
                }
              >
                <ArrowUpRight className="mr-2 size-3.5" />
                Star on GitHub
              </Button>
            </div>
          </div>

          <div className="relative mt-16 h-[22rem] lg:mt-0 lg:h-[26rem] lg:w-[28rem] shrink-0">
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: -3 }}
              transition={{
                duration: 0.6,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="absolute left-0 top-4 w-[20rem] max-w-none rounded-[1.5rem] border border-white/[0.08] bg-[#12151c] shadow-[0_24px_60px_rgba(0,0,0,0.4)] transition-transform duration-500 hover:rotate-[-1deg] hover:scale-[1.01] group"
            >
              <div className="flex items-center justify-between border-b border-white/[0.04] p-4">
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.22em] text-[#12C2E9]/70 uppercase mb-1">
                    Featured
                  </p>
                  <h3 className="text-lg font-semibold text-white tracking-tight">
                    {featuredIcon.name}
                  </h3>
                </div>
                <div className="flex size-12 items-center justify-center rounded-xl border border-white/[0.06] bg-black/[0.4] shadow-[inset_0_1px_1px_rgba(255,255,255,0.04)] transition-transform duration-500 group-hover:scale-105">
                  <AlignCenterIcon className="h-6 w-6 text-white" />
                </div>
              </div>

              <div className="p-4">
                <div className="rounded-xl border border-white/[0.05] bg-black/[0.25] p-3.5">
                  <div className="flex items-center justify-between text-[11px] font-medium text-white/[0.3] uppercase tracking-widest mb-2.5">
                    <span>Registry</span>
                    <span className="flex items-center gap-1.5 text-emerald-400/60">
                      <Check className="size-3" /> Ready
                    </span>
                  </div>
                  <code className="block font-mono text-[12px]/relaxed text-white/[0.5]">
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
              className="absolute right-0 top-28 w-[21rem] max-w-none rounded-[1.5rem] border border-white/[0.06] bg-[#0d0f14] shadow-[0_20px_50px_rgba(0,0,0,0.5)] ring-1 ring-white/[0.03] transition-transform duration-500 hover:translate-y-[-4px] group/cli"
            >
              <div className="flex items-center justify-between border-b border-white/[0.04] px-3 py-2.5 bg-white/[0.02] rounded-t-[1.5rem]">
                <div className="flex gap-1 p-1 rounded-lg bg-black/[0.3] border border-white/[0.04]">
                  {featuredIcon.cliCommands.map((command, index) => (
                    <button
                      type="button"
                      key={command.label}
                      onClick={() => setActiveCommandIndex(index)}
                      className={[
                        "rounded-md px-3 py-1.5 text-[11px] font-medium tracking-wide transition-all duration-200 uppercase",
                        index === activeCommandIndex
                          ? "bg-white text-black"
                          : "text-white/[0.35] hover:text-white/[0.6] hover:bg-white/[0.06]",
                      ].join(" ")}
                    >
                      {command.label}
                    </button>
                  ))}
                </div>
                <div className="flex gap-1.5 mr-2">
                  <span className="size-2 rounded-full bg-white/[0.08]" />
                  <span className="size-2 rounded-full bg-white/[0.08]" />
                  <span className="size-2 rounded-full bg-white/[0.08]" />
                </div>
              </div>

              <div className="relative px-5 py-6 font-mono text-[13px]/relaxed text-white/[0.4] selection:bg-white/20 min-h-[100px]">
                <span className="mr-2 text-[#12C2E9]/60 select-none">$</span>
                <span className="text-white/80 font-medium">
                  {featuredIcon.cliCommands[activeCommandIndex]?.command}
                </span>

                <button
                  type="button"
                  onClick={handleCopyCommand}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-lg border border-white/[0.08] bg-white/[0.05] p-2 text-white/[0.35] backdrop-blur-md transition-all duration-300 hover:bg-white/[0.12] hover:text-white group-hover/cli:opacity-100"
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
