import { siteConfig } from '@/data/portfolio';

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground">
          Built with Next.js, TypeScript &amp; Tailwind CSS
        </p>
        <p className="text-muted-foreground">
          &copy; {currentYear} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
