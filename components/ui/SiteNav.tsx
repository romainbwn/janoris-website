import Link from "next/link";
import { navLinks } from "@/lib/site";

/**
 * The primary navigation — shared by the homepage masthead and the
 * About page header so the two stay in lockstep. Internal routes use
 * <Link> for instant client-side transitions; mail and external links
 * stay plain anchors.
 */
const linkClass =
  "ed-link text-[0.62rem] uppercase tracking-[0.26em] text-ink-soft transition-colors hover:text-blue md:text-[0.66rem]";

export function SiteNav({ className = "" }: { className?: string }) {
  return (
    <nav
      aria-label="Primary"
      className={`flex items-baseline gap-8 md:gap-10 ${className}`}
    >
      {navLinks.map((link) =>
        link.href.startsWith("/") ? (
          <Link key={link.label} href={link.href} className={linkClass}>
            {link.label}
          </Link>
        ) : (
          <a
            key={link.label}
            href={link.href}
            {...(link.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className={linkClass}
          >
            {link.label}
          </a>
        ),
      )}
    </nav>
  );
}
