"use client";

import React from "react";
import { ArrowLeft, Copy, Play } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useState, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { CodeBlockSimple } from "@/components/ui/code-block";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { AnimatedIconHandle, AnimatedIconProps, HoverlyIconRecord } from "@/icons/types";

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
  const IconWithRef = IconComponent as React.ForwardRefExoticComponent<AnimatedIconProps & React.RefAttributes<AnimatedIconHandle>>;
  const iconRef = useRef<AnimatedIconHandle>(null);
  const [typesCopied, setTypesCopied] = useState(false);
  const [codeCopied, setCodeCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"npm" | "pnpm" | "yarn" | "bun">("npm");

  const copyTypes = async () => {
    await navigator.clipboard.writeText(TYPES_CODE);
    setTypesCopied(true);
    setTimeout(() => setTypesCopied(false), 2000);
  };

  const copyCode = async () => {
    await navigator.clipboard.writeText(iconData.sourceCode);
    setCodeCopied(true);
    setTimeout(() => setCodeCopied(false), 2000);
  };

  const playAnimation = () => {
    iconRef.current?.startAnimation();
    setTimeout(() => {
      iconRef.current?.stopAnimation();
    }, 1500);
  };

  const getInstallCommand = (pm: string) => {
    const cmd = iconData.cliCommands.find(c => c.label === pm);
    return cmd?.command || "";
  };

  return (
    <Container className="py-12 sm:px-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Link
          href="/icons"
          className="text-foreground/50 hover:text-foreground mb-8 inline-flex items-center gap-2 text-sm transition-colors dark:text-white/40 dark:hover:text-white"
        >
          <ArrowLeft size={18} />
          Back to Icons
        </Link>

        <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:gap-16">
          {/* Left Section - Icon Preview */}
          <div className="flex flex-col items-center md:w-[320px] md:shrink-0">
            <motion.div
              className="bg-muted/30 relative flex aspect-square w-full max-w-xs items-center justify-center rounded-2xl border p-12 dark:border-white/10 dark:bg-black/20"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <div
                className="text-foreground/40 hover:bg-foreground/10 hover:text-foreground absolute top-4 right-4 hidden cursor-pointer rounded-md p-2 transition-colors sm:hidden dark:text-white/30 dark:hover:bg-white/10 dark:hover:text-white [@media(hover:none)]:block"
                onClick={playAnimation}
              >
                <Play size={24} />
              </div>
              <IconWithRef size={120} ref={iconRef} />
            </motion.div>

            <motion.h1
              className="mt-6 text-2xl font-bold tracking-tight text-foreground dark:text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {iconData.name}
            </motion.h1>

            <motion.div
              className="mt-3 flex flex-wrap justify-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {iconData.tags.slice(0, 5).map((tag) => (
                <span
                  key={tag}
                  className="bg-muted text-foreground/60 rounded-full px-3 py-1 text-xs dark:bg-white/5 dark:text-white/50"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right Section - Installation */}
          <motion.div
            className="min-w-0 flex-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="mb-6 text-xl font-semibold text-foreground dark:text-white">Installation</h2>
            
            <Tabs defaultValue="cli" className="w-full">
              <TabsList className="border-border mb-6 h-auto gap-4 rounded-none border-b bg-transparent dark:border-white/10">
                <TabsTrigger value="cli">
                  CLI
                </TabsTrigger>
                <TabsTrigger value="manual">
                  Manual
                </TabsTrigger>
              </TabsList>

              <TabsContent value="cli" className="mt-0 space-y-4">
                {/* Package Manager Tabs */}
                <div className="bg-muted/30 group relative overflow-hidden rounded-xl border dark:border-white/10 dark:bg-black/20">
                  <div className="flex items-center justify-between border-b border-foreground/10 px-4 py-2 dark:border-white/10">
                    <div className="flex items-center gap-1">
                      {(["npm", "pnpm", "yarn", "bun"] as const).map((pm) => (
                        <button
                          key={pm}
                          onClick={() => setActiveTab(pm)}
                          className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                            activeTab === pm
                              ? "bg-foreground/10 text-foreground dark:bg-white/10 dark:text-white"
                              : "text-foreground/50 hover:text-foreground dark:text-white/40 dark:hover:text-white"
                          }`}
                        >
                          {pm}
                        </button>
                      ))}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="size-2.5 rounded-full bg-red-500/40" />
                      <span className="size-2.5 rounded-full bg-yellow-500/40" />
                      <span className="size-2.5 rounded-full bg-green-500/40" />
                    </div>
                  </div>
                  <pre className="p-4 text-sm">
                    <code className="text-foreground/80 dark:text-white/70">
                      <span className="text-(--color-highlight)">$</span> {getInstallCommand(activeTab)}
                    </code>
                  </pre>
                </div>
              </TabsContent>

              <TabsContent value="manual" className="space-y-8">
                {/* Step 1: Install Dependency */}
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="bg-primary text-primary-foreground flex h-7 w-7 items-center justify-center rounded-full text-sm font-medium">
                      1
                    </span>
                    <h2 className="text-lg font-semibold text-foreground dark:text-white">
                      Install Dependency
                    </h2>
                  </div>
                  <div className="bg-muted/30 group relative overflow-hidden rounded-xl border dark:border-white/10 dark:bg-black/20">
                    <div className="flex items-center justify-between border-b border-foreground/10 px-4 py-2 dark:border-white/10">
                      <span className="text-foreground/40 text-xs dark:text-white/30">
                        Terminal
                      </span>
                      <button className="text-foreground/40 hover:text-foreground flex items-center gap-1.5 text-xs opacity-0 transition-opacity group-hover:opacity-100 dark:text-white/30 dark:hover:text-white">
                        <Copy size={14} />
                        Copy
                      </button>
                    </div>
                    <pre className="p-4 text-sm">
                      <code className="text-foreground/80 dark:text-white/70">
                        <span className="text-(--color-highlight)">$</span> npm install motion
                      </code>
                    </pre>
                  </div>
                </div>

                {/* Step 2: Add types.ts */}
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="bg-primary text-primary-foreground flex h-7 w-7 items-center justify-center rounded-full text-sm font-medium">
                      2
                    </span>
                    <h2 className="text-lg font-semibold text-foreground dark:text-white">
                      Add types.ts
                    </h2>
                  </div>
                  <div className="bg-muted/30 group relative overflow-hidden rounded-xl border dark:border-white/10 dark:bg-black/20">
                    <div className="flex items-center justify-between border-b border-foreground/10 px-4 py-2 dark:border-white/10">
                      <span className="text-foreground/40 text-xs dark:text-white/30">
                        types.ts
                      </span>
                      <button
                        onClick={copyTypes}
                        className="text-foreground/40 hover:text-foreground flex items-center gap-1.5 text-xs opacity-0 transition-opacity group-hover:opacity-100 dark:text-white/30 dark:hover:text-white"
                      >
                        {typesCopied ? (
                          <span className="text-emerald-400">Copied</span>
                        ) : (
                          <>
                            <Copy size={14} />
                            Copy
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="max-h-48 overflow-auto p-4 text-sm">
                      <code className="text-foreground/80 dark:text-white/70">{TYPES_CODE}</code>
                    </pre>
                  </div>
                </div>

                {/* Step 3: Copy Code */}
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="bg-primary text-primary-foreground flex h-7 w-7 items-center justify-center rounded-full text-sm font-medium">
                      3
                    </span>
                    <h2 className="text-lg font-semibold text-foreground dark:text-white">
                      Copy the Code
                    </h2>
                  </div>
                  <div className="bg-muted/30 relative overflow-hidden rounded-xl border dark:border-white/10 dark:bg-black/20">
                    <div className="flex items-center justify-between border-b border-foreground/10 px-4 py-2 dark:border-white/10">
                      <span className="text-foreground/40 text-xs dark:text-white/30">
                        {iconData.slug}.tsx
                      </span>
                      <button
                        onClick={copyCode}
                        className="text-foreground/40 hover:text-foreground flex items-center gap-1.5 text-xs transition-colors dark:text-white/30 dark:hover:text-white"
                      >
                        {codeCopied ? (
                          <span className="text-emerald-400">Copied</span>
                        ) : (
                          <>
                            <Copy size={14} />
                            Copy
                          </>
                        )}
                      </button>
                    </div>
                    <div className="max-h-[400px] overflow-auto">
                      <pre className="p-4 text-sm">
                        <code className="text-foreground/80 dark:text-white/70">{iconData.sourceCode}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </motion.div>
    </Container>
  );
}