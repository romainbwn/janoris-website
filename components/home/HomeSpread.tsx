"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { FilmGrain } from "@/components/ui/FilmGrain";
import { SiteNav } from "@/components/ui/SiteNav";
import { celebrationImage, heroImage, soundImage } from "@/lib/editorial";
import { fadeUp, imageReveal, stagger } from "@/lib/motion";
import { site } from "@/lib/site";

const num = (i: number) => String(i + 1).padStart(2, "0");

export function HomeSpread() {
  const reduce = useReducedMotion();

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
  const inViewImage = reduce
    ? undefined
    : {
        variants: imageReveal,
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: { once: true, amount: 0.25 },
      };

  return (
    <main className="relative min-h-dvh bg-paper p-[var(--frame)]">
      {/* warm Riviera light + the faintest whisper of grain */}
      <div
        aria-hidden
        className="atm-hero pointer-events-none fixed inset-0 z-0"
      />
      <FilmGrain opacity={0.009} blend="multiply" className="fixed inset-0 z-0" />

      {/* ═══════════ hero — intimate ═══════════ */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] lg:grid-rows-[auto_1fr] lg:min-h-[calc(100svh_-_2*var(--frame))]">
        {/* masthead */}
        <header className="flex items-baseline justify-end border-b border-line px-1 pb-5 pt-1 md:px-2 md:pb-6 lg:col-start-2 lg:row-start-1 lg:pr-1">
          <SiteNav />
        </header>

        {/* image — the red-curtain frame, campaign-graded, clean */}
        <figure className="relative isolate m-0 h-[54svh] min-h-[340px] w-full overflow-hidden sm:h-[60svh] lg:col-start-1 lg:row-start-1 lg:row-span-2 lg:h-full lg:min-h-[78svh]">
          <motion.div {...image} className="absolute inset-0">
            <Image
              src={heroImage}
              alt="JANORIS playing a live set, framed by warm red stage drapes"
              fill
              quality={95}
              loading="eager"
              fetchPriority="high"
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-[50%_40%]"
            />
          </motion.div>
          {/* fades — kept light and neutral, never brown */}
          <div
            aria-hidden
            className="absolute inset-0 [background:linear-gradient(to_top,rgba(20,16,14,0.34)_0%,transparent_15%)]"
          />
          <div
            aria-hidden
            className="absolute inset-0 hidden lg:block lg:[background:linear-gradient(to_right,transparent_88%,var(--paper)_100%)]"
          />
        </figure>

        {/* text */}
        <motion.div
          {...group}
          className="flex flex-col px-1 pb-1 pt-10 md:px-2 md:pt-12 lg:col-start-2 lg:row-start-2 lg:py-[clamp(2rem,4.5vh,3.75rem)] lg:pl-[clamp(1.75rem,3.6vw,4rem)] lg:pr-1"
        >
          <div className="flex flex-1 flex-col justify-center">
            <motion.div {...item} className="@container">
              <h1 className="wordmark whitespace-nowrap text-[clamp(3.25rem,18cqw,8.5rem)] font-semibold leading-[0.9] tracking-[-0.02em] text-ink">
                {site.name}
              </h1>
              <div className="mt-6 flex items-center gap-3 md:mt-7">
                <span aria-hidden className="h-px w-7 shrink-0 bg-rouge" />
                <p className="text-[0.8rem] tracking-[0.01em] text-muted md:text-[0.84rem]">
                  {site.positioning}
                </p>
              </div>
            </motion.div>

            <motion.p
              {...item}
              className="mt-8 max-w-[30rem] text-[1rem] leading-[1.7] text-ink-soft md:mt-9 md:text-[1.05rem]"
            >
              {site.lead}
            </motion.p>

            <motion.p
              {...item}
              className="mt-7 max-w-[26rem] font-display text-[clamp(1.45rem,2.6vw,2.15rem)] font-medium leading-[1.32] text-ink md:mt-9"
            >
              {site.statement}
            </motion.p>
          </div>

          {/* foot — actions */}
          <motion.div
            {...item}
            className="mt-12 border-t border-line pt-7 md:pt-8 lg:mt-0"
          >
            <div className="flex flex-wrap items-baseline gap-x-10 gap-y-3">
              <a
                href={site.book.href}
                className="ed-link ed-link-primary text-[0.74rem] uppercase tracking-[0.24em] text-ink"
              >
                {site.book.label}
              </a>
              <a
                href={site.listen.href}
                target="_blank"
                rel="noopener noreferrer"
                className="ed-link text-[0.74rem] uppercase tracking-[0.24em] text-ink-soft transition-colors hover:text-blue"
              >
                {site.listen.label}
                <span aria-hidden className="ml-1.5 text-blue">
                  ↗
                </span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ═══════════ the sound — musical ═══════════ */}
      <section className="relative z-10 isolate overflow-hidden bg-midnight">
        <div aria-hidden className="atm-sound pointer-events-none absolute inset-0" />
        <FilmGrain opacity={0.016} blend="overlay" />
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 lg:min-h-[86svh]">
          {/* image — right on desktop, on top on mobile */}
          <figure className="relative isolate m-0 h-[52svh] min-h-[320px] w-full overflow-hidden sm:h-[58svh] lg:col-start-2 lg:row-start-1 lg:h-full">
            <motion.div {...inViewImage} className="absolute inset-0">
              <Image
                src={soundImage}
                alt="JANORIS behind the decks under purple and blue club light"
                fill
                quality={90}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-[50%_34%]"
              />
            </motion.div>
            <div
              aria-hidden
              className="absolute inset-0 [background:linear-gradient(to_top,rgba(18,58,99,0.62)_0%,transparent_18%)] lg:[background:linear-gradient(to_left,transparent_86%,var(--midnight)_100%)]"
            />
          </figure>

          {/* text — left */}
          <motion.div
            {...inView}
            className="flex flex-col justify-center px-1 py-[clamp(3.25rem,8vh,6rem)] md:px-2 lg:col-start-1 lg:row-start-1 lg:pl-1 lg:pr-[clamp(1.75rem,3.6vw,4rem)]"
          >
            <div className="flex items-center gap-3">
              <span aria-hidden className="h-px w-8 shrink-0 bg-gold" />
              <p className="text-[0.62rem] uppercase tracking-[0.3em] text-gold">
                {site.soundEyebrow}
              </p>
            </div>
            <h2 className="mt-5 font-display text-[clamp(2.1rem,4.6vw,3.4rem)] font-medium leading-[1.04] tracking-[-0.015em] text-cream">
              {site.soundHeading}
            </h2>
            <p className="mt-3 font-display text-[clamp(1.25rem,2.2vw,1.7rem)] font-medium leading-[1.3] text-gold">
              {site.soundStatement}
            </p>
            <p className="mt-5 max-w-[30rem] text-[1rem] leading-[1.7] text-cream-soft md:text-[1.05rem]">
              {site.soundIntro}
            </p>

            {/* the set list — numbered, editorial */}
            <ul className="mt-9 max-w-[27rem] border-b border-cream/15">
              {site.styles.map((style, i) => (
                <li
                  key={style}
                  className="flex items-baseline gap-5 border-t border-cream/15 py-[0.7rem]"
                >
                  <span className="font-display text-[0.82rem] tabular-nums text-gold">
                    {num(i)}
                  </span>
                  <span className="text-[1rem] tracking-[0.01em] text-cream md:text-[1.05rem]">
                    {style}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ where the music happens — celebration ═══════════ */}
      <section className="relative z-10 isolate overflow-hidden bg-peach">
        <div
          aria-hidden
          className="atm-celebration pointer-events-none absolute inset-0"
        />
        <FilmGrain opacity={0.01} blend="multiply" />
        <div className="relative z-10 px-1 py-[clamp(3.5rem,9vh,7rem)] md:px-2">
          <div className="mx-auto max-w-[46rem]">
            {/* heading */}
            <motion.div {...inView} className="max-w-[34rem]">
              <div className="flex items-center gap-3">
                <span aria-hidden className="h-px w-8 shrink-0 bg-coral" />
                <p className="text-[0.62rem] uppercase tracking-[0.3em] text-rouge">
                  {site.placesEyebrow}
                </p>
              </div>
              <h2 className="mt-5 font-display text-[clamp(2.1rem,4.6vw,3.4rem)] font-medium leading-[1.05] tracking-[-0.015em] text-ink">
                {site.placesHeading}
              </h2>
              <p className="mt-5 text-[1rem] leading-[1.7] text-ink-soft md:text-[1.08rem]">
                {site.placesIntro}
              </p>
            </motion.div>

            {/* the celebration frame — contained, cinematic, premium */}
            <motion.figure
              {...inViewImage}
              className="relative mt-[clamp(2.25rem,5vh,3.75rem)] aspect-[798/354] w-full overflow-hidden ring-1 ring-ink/10 shadow-[0_28px_64px_-32px_rgba(31,58,99,0.55)]"
            >
              <Image
                src={celebrationImage}
                alt="A wedding dancefloor mid-celebration, hands in the air under confetti"
                fill
                quality={90}
                sizes="(max-width: 1024px) 90vw, 736px"
                className="object-cover object-[50%_46%]"
              />
              <div
                aria-hidden
                className="absolute inset-0 [background:linear-gradient(to_top,rgba(20,16,14,0.16)_0%,transparent_24%)]"
              />
            </motion.figure>

            {/* the rooms — numbered, with a line on each */}
            <motion.div
              {...inView}
              className="mt-[clamp(2.5rem,6vh,4rem)] grid grid-cols-1 gap-x-10 gap-y-9 sm:grid-cols-2"
            >
              {site.contexts.map((context, i) => (
                <div key={context.title} className="border-t border-line-peach pt-5">
                  <span className="font-display text-[0.82rem] tabular-nums text-rouge">
                    {num(i)}
                  </span>
                  <h3 className="mt-1.5 font-display text-[clamp(1.3rem,2.4vw,1.7rem)] font-medium leading-[1.2] text-ink">
                    {context.title}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-[1.6] text-ink-soft">
                    {context.note}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* contact — bottom-right, logo bottom-left */}
            <motion.div
              {...inView}
              className="mt-[clamp(3rem,7vh,5rem)] flex items-center justify-between gap-6 border-t border-line-peach pt-8"
            >
              <Image
                src="/janoris-logo.png"
                alt="Janoris"
                width={88}
                height={88}
                className="h-[64px] w-[64px] shrink-0 sm:h-[80px] sm:w-[80px] md:h-[96px] md:w-[96px]"
              />
              <div className="grid grid-cols-[auto_auto] gap-x-8 gap-y-3.5 text-right sm:gap-x-12">
                <p className="col-span-2 text-[0.62rem] uppercase tracking-[0.32em] text-rouge">
                  Contact
                </p>
                <span className="self-baseline text-[0.6rem] uppercase tracking-[0.22em] text-ink-soft">
                  Email
                </span>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="ed-link justify-self-end text-[0.95rem] text-ink transition-colors hover:text-rouge"
                >
                  {site.contact.email}
                </a>
                <span className="self-baseline text-[0.6rem] uppercase tracking-[0.22em] text-ink-soft">
                  WhatsApp
                </span>
                <a
                  href={site.contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ed-link justify-self-end text-[0.95rem] text-ink transition-colors hover:text-rouge"
                >
                  {site.contact.whatsapp}
                </a>
                <span className="self-baseline text-[0.6rem] uppercase tracking-[0.22em] text-ink-soft">
                  Mixcloud
                </span>
                <a
                  href={site.contact.mixcloudHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ed-link justify-self-end text-[0.95rem] text-ink transition-colors hover:text-rouge"
                >
                  {site.contact.mixcloud}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
