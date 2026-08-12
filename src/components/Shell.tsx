import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="border-b border-border bg-[radial-gradient(ellipse_at_top,oklch(0.22_0.08_260)_0%,oklch(0.13_0.03_260)_70%)] px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-5xl text-center">
        {eyebrow && <div className="text-tracked mb-3 text-xs text-primary">{eyebrow}</div>}
        <h1 className="font-display text-4xl md:text-6xl">{title}</h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground md:text-base">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}