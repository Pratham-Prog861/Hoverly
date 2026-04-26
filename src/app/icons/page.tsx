import IconGrid from "@/components/icons/IconGrid";
import InstallCommandCard from "@/components/icons/InstallCommandCard";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { hoverlyIcons } from "@/lib/icons";

export default async function IconsPage({ searchParams }: PageProps<"/icons">) {
  const params = await searchParams;
  const initialQuery =
    typeof params.q === "string"
      ? params.q
      : Array.isArray(params.q)
        ? (params.q[0] ?? "")
        : "";

  const registryUrl = "https://hoverly.com/r/arrow-back-icon.json";

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Section className="pb-14 pt-16 sm:pt-20">
          <Container className="relative">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="flex w-full flex-col items-start text-left">
                <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl dark:text-white">
                  Static Icons{" "}
                  <span className="bg-linear-to-r from-(--color-highlight) via-(--color-highlight)/80 to-(--color-highlight)/60 bg-clip-text text-transparent">
                    feel dead now
                  </span>
                </h1>

                <p className="mb-4 max-w-xl text-xl leading-relaxed text-foreground/60 dark:text-white/50">
                  A collection of smooth, high-quality animated icons for your
                  next project. Copy and paste directly into your app.
                </p>

                <span className="mb-6 text-base text-foreground/50 dark:text-white/40">
                  works seamlessly with{" "}
                  <a
                    target="_blank"
                    href="https://ui.shadcn.com/"
                    className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-base font-medium text-(--color-highlight) transition-all hover:underline"
                  >
                    shadcn
                  </a>
                  via cli
                </span>

                <div className="flex items-center gap-3">
                  <span className="text-base text-foreground/50 dark:text-white/40">
                    Crafted with care and
                  </span>
                  <a
                    target="_blank"
                    href="https://motion.dev/"
                    className="group inline-flex items-center gap-1.5 rounded-lg bg-(--color-highlight)/10 px-3 py-1.5 text-base font-medium text-(--color-highlight) transition-all hover:bg-(--color-highlight)/20"
                  >
                    motion
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="flex w-full justify-center lg:justify-end">
                <div className="relative w-full max-w-2xl">
                  <div className="absolute inset-0 -z-10 translate-y-4 scale-95 rounded-2xl bg-linear-to-br from-(--color-highlight)/20 via-(--color-highlight)/10 to-transparent opacity-50 blur-2xl" />
                  <InstallCommandCard registryUrl={registryUrl} />
                </div>
              </div>
            </div>
          </Container>
        </Section>

        <Section className="pb-16">
          <Container>
            <IconGrid icons={hoverlyIcons} initialQuery={initialQuery} />
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}