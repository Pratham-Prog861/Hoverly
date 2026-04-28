"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";
import { ThemeToggleButton } from "../ui/skiper-ui/skiper26";
import SearchBar from "../icons/SearchBar";
import { useRef } from "react";
import { useRouter } from "next/navigation";

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
            Hoverly
          </span>
        </Link>

        <nav className="hidden items-center gap-6 sm:flex">
          <Link
            href="/"
            className="text-sm text-foreground/60 transition-colors hover:text-foreground dark:text-white/50 dark:hover:text-white"
          >
            Home
          </Link>
          <Link
            href="/icons"
            className="text-sm text-foreground/60 transition-colors hover:text-foreground dark:text-white/50 dark:hover:text-white"
          >
            Icons
          </Link>
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
          <ThemeToggleButton variant="circle" start="top-left" blur={true} />
        </nav>
      </Container>
    </header>
  );
}
