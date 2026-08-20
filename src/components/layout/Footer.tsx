import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-foreground/60 sm:flex-row sm:px-6 lg:px-8">
        <p>© 2026 ADELOS</p>
        <div className="flex items-center gap-4">
          <Link href="/contact" className="transition-colors hover:text-foreground">
            Contact
          </Link>
          <Link href="/settings" className="transition-colors hover:text-foreground">
            Settings
          </Link>
        </div>
      </div>
    </footer>
  );
}
