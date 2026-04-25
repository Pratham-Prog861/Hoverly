"use client";

import { ArrowLeft, Copy, Play } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

import { Container } from "@/components/ui/Container";
import { CodeBlock, CodeBlockSimple } from "@/components/ui/code-block";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { AnimatedIconProps, HoverlyIconRecord } from "@/icons/types";

const TYPES_CODE = `import type { SVGMotionProps } from "motion/react";

export interface AnimatedIconHandle {
  startAnimation: () => void | Promise<void>;
  stopAnimation: () => void | Promise<void>;
}

export interface AnimatedIconProps
  extends Omit<SVGMotionProps<SVGSVGElement>, "ref"> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
}`;

interface IconDetailClientProps {
  iconData: HoverlyIconRecord;
  IconComponent: React.ComponentType<AnimatedIconProps>;
}

export function IconDetailClient({
  iconData,
  IconComponent,
}: IconDetailClientProps) {
  const [typesCopied, setTypesCopied] = useState(false);
  const [registryCopied, setRegistryCopied] = useState(false);
  const [installCopied, setInstallCopied] = useState(false);
  const [activeCommandIndex, setActiveCommandIndex] = useState(0);

  const copyTypes = async () => {
    await navigator.clipboard.writeText(TYPES_CODE);
    setTypesCopied(true);
    setTimeout(() => setTypesCopied(false), 2000);
  };

  const copyRegistry = async () => {
    await navigator.clipboard.writeText(iconData.registryUrl);
    setRegistryCopied(true);
    setTimeout(() => setRegistryCopied(false), 2000);
  };

  const copyInstall = async () => {
    const command = iconData.cliCommands[activeCommandIndex]?.command;
    if (command) {
      await navigator.clipboard.writeText(command);
      setInstallCopied(true);
      setTimeout(() => setInstallCopied(false), 2000);
    }
  };

  return (
    <Container className="py-12 lg:py-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <Link
          href="/icons"
          className="inline-flex items-center gap-2 text-sm text-foreground/55 transition-colors hover:text-foreground dark:text-white/35 dark:hover:text-white"
        >
          <ArrowLeft className="size-4" />
          Back to Icons
        </Link>

        <div className="mt-10 flex flex-col gap-12 lg:flex-row lg:gap-20">
          <motion.div
            className="flex flex-col items-center lg:w-[320px] lg:shrink-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <div className="relative flex aspect-square w-full max-w-70 items-center justify-center rounded-[2rem] border border-border/70 bg-[linear-gradient(180deg,rgba(244,249,255,0.92),rgba(233,241,255,0.98))] p-14 shadow-[0_20px_60px_rgba(15,23,42,0.14)] dark:border-white/6 dark:bg-[linear-gradient(180deg,rgba(18,22,28,0.6),rgba(10,12,16,0.8))] dark:shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
              <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(18,194,233,0.12),transparent_50%)] dark:bg-[radial-gradient(circle_at_top,rgba(18,194,233,0.06),transparent_50%)]" />
              <button
                type="button"
                className="absolute top-5 right-5 rounded-xl border border-border/80 bg-background/75 p-2.5 text-foreground/45 transition-all hover:border-border hover:bg-background hover:text-foreground dark:border-white/6 dark:bg-white/3 dark:text-white/35] dark:hover:border-white/10 dark:hover:bg-white/6 dark:hover:text-white sm:hidden [@media(hover:none)]:block"
              >
                <Play className="size-4" />
              </button>
              <IconComponent
                size={112}
                className="relative z-10 text-foreground dark:text-white"
              />
            </div>

            <h1 className="mt-8 font-heading text-2xl font-semibold tracking-tight text-foreground dark:text-white">
              {iconData.name}
            </h1>

            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {iconData.tags.slice(0, 5).map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-border/70 bg-card/80 px-3 py-1.5 text-xs font-medium text-foreground/55 dark:border-white/5 dark:bg-white/2 dark:text-white/40"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="min-w-0 flex-1 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="mb-8 flex items-center gap-3">
              <div className="h-px flex-1 bg-linear-to-r from-transparent via-border to-transparent dark:via-white/8" />
              <h2 className="shrink-0 text-lg font-semibold text-foreground dark:text-white">
                Installation
              </h2>
              <div className="h-px flex-1 bg-linear-to-r from-transparent via-border to-transparent dark:via-white/8" />
            </div>

            <Tabs defaultValue="cli" className="w-full">
              <TabsList className="mb-8 h-auto gap-1 border-b border-border/80 bg-transparent dark:border-white/6">
                <TabsTrigger value="cli" className="px-6">
                  CLI
                </TabsTrigger>
                <TabsTrigger value="manual" className="px-6">
                  Manual
                </TabsTrigger>
              </TabsList>

              <TabsContent value="cli" className="space-y-5">
                <div className="space-y-2">
                  <p className="text-xs font-medium uppercase tracking-wider text-foreground/55 dark:text-white/35">
                    Registry URL
                  </p>
                  <div className="group relative overflow-hidden rounded-xl border border-border/80 bg-card/80 dark:border-white/6dark:bg-white/2">
                    <div className="flex items-center justify-between border-b border-border/70 px-4 py-2.5 dark:border-white/4">
                      <span className="text-xs text-foreground/50 dark:text-white/3">
                        URL
                      </span>
                      <button
                        type="button"
                        onClick={copyRegistry}
                        className="flex items-center gap-1.5 rounded-lg border border-border/70 bg-background/70 px-2.5 py-1 text-xs text-foreground/45 transition-all hover:border-border hover:bg-background hover:text-foreground dark:border-white/5 dark:bg-white/2 dark:text-white/35 dark:hover:border-white/10 dark:hover:bg-white/40 dark:hover:text-white"
                      >
                        {registryCopied ? (
                          <span className="text-emerald-400">Copied</span>
                        ) : (
                          <>
                            <Copy className="size-3.5" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="p-4 text-sm">
                      <code className="text-foreground/70 dark:text-white/60">
                        {iconData.registryUrl}
                      </code>
                    </pre>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-medium uppercase tracking-wider text-foreground/55 dark:text-white/35">
                    Install Command
                  </p>
                  <div className="overflow-hidden rounded-xl border border-border/80 bg-card/80 dark:border-white/6 dark:bg-white/2">
                    <div className="flex items-center justify-between gap-4 border-b border-border/70 px-3 py-2 dark:border-white/4">
                      <div className="flex flex-wrap gap-1">
                        {iconData.cliCommands.map((command, index) => (
                          <button
                            key={command.label}
                            type="button"
                            onClick={() => setActiveCommandIndex(index)}
                            className={`rounded-lg px-3.5 py-1.5 text-xs font-medium transition-all ${index === activeCommandIndex ? "bg-foreground/12 text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] dark:bg-white/10 dark:text-white" : "text-foreground/45 hover:bg-black/4 hover:text-foreground/70 dark:text-white/35 dark:hover:bg-white/4 dark:hover:text-white/60"}`}
                          >
                            {command.label}
                          </button>
                        ))}
                      </div>
                      <div className="hidden items-center gap-2 sm:flex">
                        <span className="size-2.5 rounded-full bg-[#8a2b34]" />
                        <span className="size-2.5 rounded-full bg-[#8a6c18]" />
                        <span className="size-2.5 rounded-full bg-[#1f6a3d]" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-3 px-4 py-4">
                      <div className="min-w-0 flex-1 overflow-x-auto">
                        <code className="whitespace-nowrap font-mono text-sm text-foreground/70 dark:text-white/60">
                          <span className="mr-2 text-(--color-highlight)">
                            $
                          </span>
                          {iconData.cliCommands[activeCommandIndex]?.command}
                        </code>
                      </div>
                      <button
                        type="button"
                        onClick={copyInstall}
                        className="shrink-0 rounded-lg border border-border/70 bg-background/70 p-1.5 text-foreground/45 transition-all hover:border-border hover:bg-background hover:text-foreground dark:border-white/5 dark:bg-white/2 dark:text-white/35 dark:hover:border-white/10 dark:hover:bg-white/4 dark:hover:text-white"
                      >
                        {installCopied ? (
                          <Copy className="size-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="size-3.5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="manual" className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-(--color-highlight)/15 bg-(--color-highlight)/6 text-sm font-semibold text-(--color-highlight)">
                      1
                    </span>
                    <h3 className="text-base font-semibold text-foreground dark:text-white">
                      Install Dependency
                    </h3>
                  </div>
                  <CodeBlock command="npm install motion" />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-(--color-highlight)/15 text-sm font-semibold text-(--color-highlight)">
                      2
                    </span>
                    <h3 className="text-base font-semibold text-foreground dark:text-white">
                      Add Types
                    </h3>
                  </div>
                  <div className="group relative overflow-hidden rounded-xl border border-border/80 bg-card/80 dark:border-white/6 dark:bg-white/2">
                    <div className="flex items-center justify-between border-b border-border/70 px-4 py-2.5 dark:border-white/4">
                      <span className="text-xs text-foreground/50 dark:text-white/30">
                        types.ts
                      </span>
                      <button
                        type="button"
                        onClick={copyTypes}
                        className="flex items-center gap-1.5 rounded-lg border border-border/70 bg-background/70 px-2.5 py-1 text-xs text-foreground/45 transition-all hover:border-border hover:bg-background hover:text-foreground dark:border-white/5 dark:bg-white/2 dark:text-white/35 dark:hover:border-white/10 dark:hover:bg-white/4 dark:hover:text-white"
                      >
                        {typesCopied ? (
                          <span className="text-emerald-400">Copied</span>
                        ) : (
                          <>
                            <Copy className="size-3.5" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="max-h-45 overflow-auto p-4 text-sm">
                      <code className="text-foreground/70 dark:text-white/60">
                        {TYPES_CODE}
                      </code>
                    </pre>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-(--color-highlight)/15 bg-(--color-highlight)/6 text-sm font-semibold text-(--color-highlight)">
                      3
                    </span>
                    <h3 className="text-base font-semibold text-foreground dark:text-white">
                      Copy the Code
                    </h3>
                  </div>
                  <CodeBlockSimple code={iconData.sourceCode} />
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </motion.div>
    </Container>
  );
}
