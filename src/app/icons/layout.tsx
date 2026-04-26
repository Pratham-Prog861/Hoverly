export default function IconsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative min-h-screen bg-background">
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% -20%, oklch(0.78 0.11 205 / 0.15), transparent),
            radial-gradient(ellipse 60% 40% at 80% 100%, oklch(0.74 0.13 215 / 0.1), transparent),
            radial-gradient(ellipse 50% 30% at 10% 80%, oklch(0.66 0.12 180 / 0.08), transparent)
          `,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}