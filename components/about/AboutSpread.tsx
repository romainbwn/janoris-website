"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { FilmGrain } from "@/components/ui/FilmGrain";
import { SiteNav } from "@/components/ui/SiteNav";
import { aboutImage } from "@/lib/editorial";
import { fadeUp, imageReveal, stagger } from "@/lib/motion";
import { site } from "@/lib/site";

const num = (i: number) => String(i + 1).padStart(2, "0");

export function AboutSpread() {
  const reduce = useReducedMotion();
  const { about } = site;

  // Subtle motion — skipped entirely when the visitor prefers reduced motion.
  const group = reduce
    ? undefined
    : {
        variants: stagger,
        initial: "hidden" as const,
        animate: "visible" as const,
      };
  const item = reduce ? undefined : { variants: fadeUp };
  const image = reduce
    ? undefined
    : {
        variants: imageReveal,
        initial: "hidden" as const,
        animate: "visible" as const,
      };
  const inView = reduce
    ? undefined
    : {
        variants: fadeUp,
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: { once: true, amount: 0.3 },
      };

  return (
    <main className="relative min-h-dvh bg-paper p-[var(--frame)]">
      {/* the same warm Riviera light + whisper of grain as the homepage */}
      <div
        aria-hidden
        className="atm-hero pointer-events-none fixed inset-0 z-0"
      />
      <FilmGrain opacity={0.009} blend="multiply" className="fixed inset-0 z-0" />

      <div className="relative z-10">
        {/* masthead — wordmark home, minimal nav */}
        <header className="flex items-baseline justify-between border-b border-line px-1 pb-5 pt-1 md:px-2 md:pb-6">
          <Link
            href="/"
            className="wordmark text-[1.05rem] font-semibold tracking-[-0.01em] text-ink transition-opacity hover:opacity-65 md:text-[1.15rem]"
          >
            {site.name}
          </Link>
          <SiteNav />
        </header>

        <article className="mx-auto max-w-[60rem] pb-[clamp(3.5rem,11vh,7.5rem)]">
          {/* title */}
          <motion.header
            {...group}
            className="pt-[clamp(2.5rem,8vh,5.25rem)]"
          >
            <motion.h1
              {...item}
              className="font-display text-[clamp(2.85rem,9vw,5.5rem)] font-medium leading-[0.95] tracking-[-0.02em] text-ink"
            >
              {about.title}
            </motion.h1>
            <motion.div {...item} className="mt-6 flex items-center gap-3">
              <span aria-hidden className="h-px w-7 shrink-0 bg-rouge" />
              <p className="text-[0.8rem] tracking-[0.01em] text-muted md:text-[0.84rem]">
                {site.positioning}
              </p>
            </motion.div>
          </motion.header>

          {/* editorial spread — the portrait beside the story, balanced */}
          <div className="mt-[clamp(2.5rem,7vh,4.5rem)] lg:grid lg:grid-cols-[20rem_1fr] lg:items-center lg:gap-x-[clamp(2.5rem,5vw,4.75rem)]">
            <motion.figure
              {...image}
              className="relative aspect-[4/5] w-full max-w-[18.5rem] overflow-hidden ring-1 ring-ink/10 shadow-[0_20px_48px_-28px_rgba(31,58,99,0.42)] lg:max-w-none"
            >
              <Image
                src={aboutImage}
                alt={about.portraitAlt}
                fill
                quality={90}
                sizes="(max-width: 1024px) 80vw, 320px"
                className="object-cover object-[45%_50%]"
              />
            </motion.figure>

            <motion.div
              {...inView}
              className="mt-[clamp(2.25rem,5vh,3rem)] max-w-[34rem] lg:mt-0"
            >
              {about.story.map((para, i) => (
                <p
                  key={i}
                  className={`text-[1.02rem] leading-[1.78] text-ink-soft md:text-[1.07rem] ${
                    i > 0 ? "mt-5" : ""
                  }`}
                >
                  {para}
                </p>
              ))}
            </motion.div>
          </div>

          {/* selected mixes */}
          <section className="mt-[clamp(3.5rem,9vh,6rem)]">
            <motion.div {...inView} className="flex items-center gap-3">
              <span aria-hidden className="h-px w-8 shrink-0 bg-coral" />
              <p className="text-[0.62rem] uppercase tracking-[0.3em] text-rouge">
                {about.mixesEyebrow}
              </p>
            </motion.div>
            <motion.h2
              {...inView}
              className="mt-5 font-display text-[clamp(1.95rem,4.4vw,3rem)] font-medium leading-[1.05] tracking-[-0.015em] text-ink"
            >
              {about.mixesHeading}
            </motion.h2>

            <motion.div
              {...inView}
              className="mt-[clamp(1.75rem,4vh,2.75rem)] grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6"
            >
              {about.mixes.map((mix, i) => (
                <a
                  key={mix.title}
                  href={mix.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col border border-line p-7 transition-colors duration-500 hover:border-ink/30 md:p-8"
                >
                  <span className="font-display text-[0.82rem] tabular-nums text-rouge">
                    {num(i)}
                  </span>
                  <h3 className="mt-2 font-display text-[clamp(1.45rem,2.7vw,1.95rem)] font-medium leading-[1.15] text-ink">
                    {mix.title}
                  </h3>
                  <p className="mt-2.5 text-[0.95rem] leading-[1.62] text-ink-soft">
                    {mix.note}
                  </p>
                  <span className="mt-7 inline-flex items-center gap-1.5 text-[0.7rem] uppercase tracking-[0.24em] text-ink">
                    Listen
                    <span
                      aria-hidden
                      className="text-blue transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </a>
              ))}
            </motion.div>
          </section>

          {/* more personal selections — a quieter, secondary note */}
          <motion.section
            {...inView}
            className="mt-[clamp(2.5rem,6vh,3.75rem)] border-t border-line pt-[clamp(2rem,4.5vh,3rem)]"
          >
            <div className="flex flex-col gap-x-10 gap-y-5 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-[30rem]">
                <h3 className="font-display text-[clamp(1.25rem,2.1vw,1.55rem)] font-medium leading-[1.2] text-ink">
                  {about.personal.title}
                </h3>
                <p className="mt-2.5 text-[0.92rem] leading-[1.62] text-muted">
                  {about.personal.note}
                </p>
              </div>
              <a
                href={about.personal.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex shrink-0 items-center gap-1.5 text-[0.7rem] uppercase tracking-[0.22em] text-ink-soft transition-colors duration-500 hover:text-ink"
              >
                {about.personal.buttonLabel}
                <span
                  aria-hidden
                  className="text-blue transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </div>
          </motion.section>
        </article>
      </div>
    </main>
  );
}
