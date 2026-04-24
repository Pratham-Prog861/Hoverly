import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-background/70 backdrop-blur-xl">
      <Container className="flex h-18 items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-3 text-sm font-medium tracking-[0.28em] text-white"
        >
          <span className="flex size-10 items-center justify-center rounded-2xl border border-white/12 bg-white/8 shadow-[0_10px_40px_rgba(18,194,233,0.12)]">
            H
          </span>
          <span className="font-heading text-base tracking-[0.32em] text-white/96">
            Hoverly
          </span>
        </Link>

        <nav className="hidden items-center gap-2 sm:flex">
          <Button
            variant="ghost"
            asChild
            className="text-white/70 hover:text-white"
          >
            <Link href="/">Home</Link>
          </Button>
          <Button
            variant="ghost"
            asChild
            className="text-white/70 hover:text-white"
          >
            <Link href="/icons">Icons</Link>
          </Button>
        </nav>
      </Container>
    </header>
  );
}
