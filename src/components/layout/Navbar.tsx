import Link from "next/link";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground">
          ADELOS
        </Link>
        <div className="flex items-center gap-4 text-sm text-foreground/70">
          <Link href="/contact" className="transition-colors hover:text-foreground">
            Contact
          </Link>
          <Link href="/settings" className="transition-colors hover:text-foreground">
            Settings
          </Link>
        </div>
      </div>
    </nav>
  );
}
