"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";
import { ThemeToggleButton } from "../ui/skiper-ui/skiper26";
import SearchBar from "../icons/SearchBar";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import GithubIcon from "@/icons/github-icon";
import TwitterXIcon from "@/icons/twitter-x-icon";

const githubUrl = "https://github.com/pratham-prog861/hoverly";
const xUrl = "https://x.com/prathamCodesDev";

export default function Navbar() {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSearchChange = (value: string) => {
    if (value.trim()) {
      router.push(`/icons?q=${encodeURIComponent(value)}`);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold tracking-wide text-foreground"
        >
          <img src="/logo.png" alt="Hoverly" className="h-8 w-10 rounded-lg" />
          <span className="font-heading text-sm tracking-[0.2em] text-foreground dark:text-white">
            Hover
            <span className="text-(--color-highlight)">ly</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 sm:flex">
          <Link
            href="/icons"
            className="text-sm text-foreground/60 transition-colors hover:text-foreground dark:text-white/50 dark:hover:text-white"
          >
            Icons
          </Link>
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
            aria-label="X"
          >
            <TwitterXIcon size={20} />
          </Link>
          <ThemeToggleButton variant="circle" start="top-left" blur={true} />
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <SearchBar
              value=""
              onChange={handleSearchChange}
              inputRef={inputRef}
            />
          </motion.div>
        </nav>
      </Container>
    </header>
  );
}
