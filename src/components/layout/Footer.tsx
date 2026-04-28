"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { AlignCenterIcon } from "@/icons/align-center-icon";
import ArrowBackIcon from "@/icons/arrow-back-icon";
import HashtagIcon from "@/icons/hashtag-icon";
import { BellActiveIcon } from "@/icons/bell-active-icon";
import LinkedinIcon from "@/icons/linkedin-icon";
import ArrowBackUpIcon from "@/icons/arrow-back-up-icon";
import WhatsappIcon from "@/icons/whatsapp-icon";
import BrandReactNativeIcon from "@/icons/brand-react-native-icon";
import GithubIcon from "@/icons/github-icon";
import TwitterXIcon from "@/icons/twitter-x-icon";

const githubUrl = "https://github.com/pratham-prog861/hoverly";
const xUrl = "https://x.com/prathamCodesDev";

const footerIcons = [
  { id: "1", Icon: AlignCenterIcon },
  { id: "2", Icon: ArrowBackIcon },
  { id: "3", Icon: HashtagIcon },
  { id: "4", Icon: BellActiveIcon },
  { id: "5", Icon: LinkedinIcon },
  { id: "6", Icon: ArrowBackUpIcon },
  { id: "7", Icon: BrandReactNativeIcon },
  { id: "8", Icon: GithubIcon },
  { id: "9", Icon: WhatsappIcon },
  { id: "10", Icon: TwitterXIcon },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card/30 dark:border-white/5 dark:bg-black/20">
      <Container className="py-12 pb-2 md:py-14 md:pb-3">
        <div className="grid gap-y-10 md:grid-cols-3 md:gap-x-8 pb-2">
          <div className="space-y-5 lg:pr-6">
            <Link href="/" className="inline-flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Hoverly"
                className="h-7 w-7 rounded-lg"
              />
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
            <Link
              href={xUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex ml-2 items-center gap-1.5 rounded-lg border border-border/40 bg-card/50 px-3 py-1.5 text-xs text-foreground/60 transition hover:border-border hover:bg-card hover:text-foreground dark:border-white/6 dark:bg-white/3 dark:text-white/50 dark:hover:border-white/12 dark:hover:bg-white/6 dark:hover:text-white"
            >
              X
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

         <div className="border-t pt-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-muted-foreground text-center text-sm md:text-left">
              Built by{" "}
              <Link
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground font-medium underline underline-offset-4 transition-colors"
              >
                Pratham
              </Link>
              . The source code is available on{" "}
              <Link
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground font-medium underline underline-offset-4 transition-colors"
              >
                GitHub
              </Link>
              .
            </p>

            <div className="flex items-center gap-4">
              <Link
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon size={20} />
              </Link>
              <Link
                href={xUrl}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <TwitterXIcon size={20} />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
