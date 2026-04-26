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
      <head>
        <link rel="icon" href="/favicon_io/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon_io/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" href="/favicon_io/favicon-32x32.png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/favicon_io/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
      </head>
      <body className="flex min-h-screen flex-col overflow-x-hidden bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <CommandMenu />
          <div className="relative flex flex-1 flex-col">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
