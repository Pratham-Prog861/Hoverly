"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { AlignCenterIcon } from "@/icons/align-center-icon";
import ArrowBackUpIcon from "@/icons/arrow-back-up-icon";
import { BellActiveIcon } from "@/icons/bell-active-icon";

const githubUrl = "https://github.com/pratham-prog861/hoverly";

const previewIcons = [
  { id: "preview-1", strokeWidth: 2 },
  { id: "preview-2", strokeWidth: 2.4 },
  { id: "preview-3", strokeWidth: 2 },
  { id: "preview-4", strokeWidth: 2.4 },
  { id: "preview-5", strokeWidth: 2 },
  { id: "preview-6", strokeWidth: 2.4 },
  { id: "preview-7", strokeWidth: 2 },
  { id: "preview-8", strokeWidth: 2.4 },
] as const;

const previewIconSize = 28;

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="border-t border-white/4 bg-[linear-gradient(180deg,rgba(8,10,14,0.9),rgba(5,7,10,0.94))]"
    >
      <Container className="py-16 md:py-20">
        <div className="grid gap-y-10 md:grid-cols-3">
          <div className="space-y-6 lg:pr-8">
            <div className="inline-flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl border border-white/8 bg-white/4 shadow-[0_8px_24px_rgba(18,194,233,0.1)]">
                <span className="font-heading text-lg font-semibold tracking-widest text-white">
                  H
                </span>
              </span>
              <div>
                <p className="font-heading text-base tracking-[0.18em] text-white uppercase">
                  Hoverly
                </p>
                <p className="text-sm text-white/40">
                  Animated icons for modern interfaces
                </p>
              </div>
            </div>

            <p className="text-sm leading-[1.7] text-white/50">
              A motion-first icon library built for teams who want editable
              React components, smooth interactions, and a clean install story.
            </p>

            <div className="flex flex-wrap items-center gap-2.5">
              <Link
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/8 bg-white/3 px-3.5 py-2 text-[13px] text-white/60 transition hover:border-white/14 hover:bg-white/6 hover:text-white"
              >
                GitHub <ArrowUpRight className="size-3.5" />
              </Link>
              <Link
                href="/icons"
                className="inline-flex items-center gap-2 rounded-lg border border-white/6 bg-transparent px-3.5 py-2 text-[13px] text-white/45 transition hover:border-white/12 hover:bg-white/4 hover:text-white/70"
              >
                Browse icons <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
          </div>

          <div className="space-y-4.5">
            <h3 className="text-[11px] font-semibold tracking-[0.16em] text-white/35 uppercase">
              Quick links
            </h3>
            <nav className="flex flex-col gap-2.5 text-sm">
              <Link
                href="/"
                className="text-white/50 transition hover:text-white"
              >
                Home
              </Link>
              <Link
                href="/icons"
                className="text-white/50 transition hover:text-white"
              >
                Icons
              </Link>
            </nav>
          </div>

          <div className="space-y-4.5">
            <div className="flex items-center justify-between">
              <h3 className="text-[11px] font-semibold tracking-[0.16em] text-white/35 uppercase">
                Library preview
              </h3>
              <span className="text-xs text-white/[0.28]">growing</span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {previewIcons.map((icon, index) => (
                <Link
                  key={icon.id}
                  href="/icons"
                  aria-label={icon.id}
                  className="group flex aspect-square items-center justify-center rounded-xl border border-white/5 bg-white/2 transition hover:-translate-y-0.5 hover:border-white/10 hover:bg-white/5"
                >
                  <motion.span
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="flex items-center justify-center"
                  >
                    {index % 3 === 0 ? (
                      <AlignCenterIcon
                        size={previewIconSize}
                        className="text-white/50 transition group-hover:text-(--color-highlight)"
                        strokeWidth={icon.strokeWidth}
                      />
                    ) : index % 3 === 1 ? (
                      <BellActiveIcon
                        size={previewIconSize}
                        className="text-white/50 transition group-hover:text-(--color-highlight)"
                      />
                    ) : (
                      <ArrowBackUpIcon
                        size={previewIconSize}
                        className="text-white/50 transition group-hover:text-(--color-highlight)"
                        strokeWidth={icon.strokeWidth}
                      />
                    )}
                  </motion.span>
                </Link>
              ))}
            </div>
            <p className="text-xs leading-6 text-white/40">
              Preview the visual language.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/4 pt-6 text-sm text-white/32 md:flex-row md:items-center md:justify-between">
          <p>
            Built for React teams who care about motion, consistency, and fast
            implementation.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <span>Built with Next.js</span>
          </div>
        </div>
      </Container>
    </motion.footer>
  );
}
