import type { Metadata } from "next";

import CommandMenu from "@/components/layout/CommandMenu";
import { ThemeProvider } from "@/components/ui/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hoverly.com"),
  title: {
    default: "Hoverly",
    template: "%s | Hoverly",
  },
  description:
    "Hoverly is a shadcn-compatible animated icon library for React teams that want premium motion and zero setup friction.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className="h-full font-sans antialiased"
      suppressHydrationWarning
    >
      <body className="min-h-full overflow-x-hidden bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <div className="hero-grid pointer-events-none absolute inset-0" />
            <div className="hero-glow pointer-events-none absolute left-1/2 top-0 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full" />
            <CommandMenu />
            <div className="relative flex min-h-screen flex-col">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
