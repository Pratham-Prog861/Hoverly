import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import CommandMenu from "@/components/layout/CommandMenu";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://hoverlyy.vercel.app/"),
  title: {
    default: "Hoverlyy",
    template: "%s | Hoverlyy",
  },
  description:
    "Hoverlyy is a shadcn-compatible animated icon library for React teams that want premium motion and zero setup friction.",
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
      <body
        suppressHydrationWarning
        className="flex min-h-screen flex-col overflow-x-hidden bg-background text-foreground"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          forcedTheme="dark"
        >
          <CommandMenu />
          <div className="relative flex flex-1 flex-col">{children}</div>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
