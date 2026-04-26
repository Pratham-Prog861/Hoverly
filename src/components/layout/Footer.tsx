"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { AlignCenterIcon } from "@/icons/align-center-icon";
import ArrowBackIcon from "@/icons/arrow-back-icon";
import ArrowBackUpIcon from "@/icons/arrow-back-up-icon";
import { BellActiveIcon } from "@/icons/bell-active-icon";
import BrandReactNativeIcon from "@/icons/brand-react-native-icon";

const githubUrl = "https://github.com/pratham-prog861/hoverly";

const footerIcons = [
  { id: "1", Icon: AlignCenterIcon },
  { id: "2", Icon: ArrowBackIcon },
  { id: "3", Icon: ArrowBackUpIcon },
  { id: "4", Icon: BellActiveIcon },
  { id: "5", Icon: BrandReactNativeIcon },
  { id: "6", Icon: AlignCenterIcon },
  { id: "7", Icon: ArrowBackIcon },
  { id: "8", Icon: ArrowBackUpIcon },
  { id: "9", Icon: BellActiveIcon },
  { id: "10", Icon: BrandReactNativeIcon },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card/30 dark:border-white/5 dark:bg-black/20">
      <Container className="py-12 pb-2 md:py-14 md:pb-3">
        <div className="grid gap-y-10 md:grid-cols-3 md:gap-x-8 pb-2">
          <div className="space-y-5 lg:pr-6">
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-lg border border-border/40 bg-card text-sm font-bold text-foreground dark:border-white/8 dark:bg-white/5 dark:text-white">
                H
              </span>
              <span className="font-heading text-sm font-semibold tracking-[0.16em] text-foreground uppercase dark:text-white">
                Hoverly
              </span>
            </Link>

            <p className="text-sm leading-relaxed text-foreground/60 dark:text-white/50">
              Animated icons for modern interfaces. Built for React teams who
              care about motion, consistency, and fast implementation.
            </p>

            <Link
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border/40 bg-card/50 px-3 py-1.5 text-xs text-foreground/60 transition hover:border-border hover:bg-card hover:text-foreground dark:border-white/6 dark:bg-white/3 dark:text-white/50 dark:hover:border-white/12 dark:hover:bg-white/6 dark:hover:text-white"
            >
              GitHub
              <ArrowUpRight className="size-3" />
            </Link>
          </div>

          <div className="space-y-3">
            <h3 className="text-[10px] font-semibold tracking-[0.14em] text-foreground/40 uppercase dark:text-white/30">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2 text-sm">
              <Link
                href="/"
                className="text-foreground/55 transition-colors hover:text-foreground dark:text-white/45 dark:hover:text-white"
              >
                Home
              </Link>
              <Link
                href="/icons"
                className="text-foreground/55 transition-colors hover:text-foreground dark:text-white/45 dark:hover:text-white"
              >
                Icons
              </Link>
            </nav>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-[10px] font-semibold tracking-[0.14em] text-foreground/40 uppercase dark:text-white/30">
                Featured Icons
              </h3>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {footerIcons.map((icon) => (
                <Link
                  key={icon.id}
                  href="/icons"
                  className="group flex aspect-square items-center justify-center rounded-md border border-border/30 bg-card/30 transition-colors hover:border-(--color-highlight)/30 hover:bg-card/50 dark:border-white/4 dark:bg-white/2 dark:hover:border-(--color-highlight)/30 dark:hover:bg-white/5"
                >
                  <icon.Icon
                    size={20}
                    className="text-foreground/45 transition-colors group-hover:text-foreground dark:text-white/40 dark:group-hover:text-white"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-border/30 pt-5 text-xs text-foreground/40 dark:border-white/5 dark:text-white/30 md:flex-row md:items-center md:justify-between">
          <p>Built for React teams who care about motion.</p>
          <span>Built with Next.js</span>
        </div>
      </Container>
    </footer>
  );
}