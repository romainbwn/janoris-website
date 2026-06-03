export const site = {
  name: "JANORIS",

  /* positioning line, sits under the wordmark */
  positioning: "French DJ — Private Events & Venues",

  /* the lead paragraph */
  lead: "Open-format, house and timeless party music shaped around atmosphere, energy and the people in the room.",

  /* the emotional statement, larger, below the lead */
  statement: "Music for warm nights and the people in them.",

  /* the sound — music, energy, credibility */
  soundEyebrow: "The night, in sound",
  soundHeading: "The Sound",
  soundStatement: "Sets that move with the room.",
  soundIntro:
    "Golden-hour warm-ups, peak-time house, the last song of the night. Open-format, never on autopilot.",
  styles: [
    "Open Format",
    "House",
    "Disco House",
    "Sunset House",
    "Feel-Good Party Music",
    "Warm-Up & Rooftop Vibes",
    "Timeless Classics",
  ],

  /* where the music happens — people, memories, celebration */
  placesEyebrow: "The night comes alive",
  placesHeading: "Where the Music Happens",
  placesIntro:
    "Whether it’s a wedding, rooftop, venue or late-night dancefloor, the idea is simple: music that becomes part of the memory.",
  contexts: [
    {
      title: "Weddings",
      note: "Ceremony, golden hour, dinner and the dancefloor.",
    },
    {
      title: "Private Events & Villas",
      note: "Birthdays, villa parties and intimate celebrations.",
    },
    {
      title: "Venues & Rooftops",
      note: "Resident-style sets for bars, hotels and rooftop terraces.",
    },
    {
      title: "Corporate & Creative",
      note: "Launch nights and brand events for creative teams.",
    },
  ],

  /* actions */
  book: {
    label: "Book",
    href: "mailto:janoris.music@gmail.com?subject=Booking%20enquiry",
  },
  listen: {
    label: "Listen",
    href: "https://www.mixcloud.com/janoris/",
  },

  /* kind words — testimonials, social proof */
  kindWords: {
    heading: "Kind Words",
    portraitAlt:
      "JANORIS in a tuxedo behind the decks at a wedding under string lights",
    testimonials: [
      {
        quote:
          "Romain was fantastic to work with. He went above and beyond with what I asked for and really understood what I was trying to achieve. I would have no hesitation in working with him again.",
        author: "Jessica",
        location: "Australia",
        year: "2025",
      },
      {
        quote:
          "Romain was phenomenal. He went above and beyond what he was hired to do. I’ll definitely hire him again.",
        author: "Pip",
        location: "Australia",
        year: "2025",
      },
      {
        quote:
          "Romain did a fantastic job. He is reliable and communicated really well throughout the project. I highly recommend him and look forward to working with him again in the future.",
        author: "Client",
        location: "Australia",
        year: "2025",
      },
    ],
  },

  /* contact block */
  contact: {
    email: "janoris.music@gmail.com",
    whatsapp: "+33 6 67 67 32 69",
    whatsappHref: "https://wa.me/33667673269",
    mixcloud: "mixcloud.com/janoris",
    mixcloudHref: "https://www.mixcloud.com/janoris/",
  },

  /* about page — the person behind the sets */
  about: {
    title: "About",
    portraitAlt: "JANORIS behind the decks in warm, low golden light",
    story: [
      "At 16, I started hosting a weekly radio show on a local station in Marseille called Diva FM. Around the same time, I began DJing at venues and parties, learning early how different crowds and atmospheres respond to music.",
      "Alongside DJing, I built a career at one of the world’s largest music streaming platforms, working closely with labels, releases and music operations at scale.",
      "Today, my sets move between open-format, house and timeless party music, always with the same approach: good energy, good timing and music people genuinely connect with.",
      "I enjoy mixing crowd favourites with tasteful selections, keeping the atmosphere fun, warm and natural.",
      "Outside of DJing, I’m also heavily inspired by classic rock and Brazilian music.",
    ],
    mixesEyebrow: "Mixcloud",
    mixesHeading: "Selected Mixes",
    mixes: [
      {
        title: "Warm Up",
        note: "Slower grooves, warm-up energy and golden-hour selections.",
        href: "https://www.mixcloud.com/janoris/lets-groove-mix/",
      },
      {
        title: "Let’s Dance",
        note: "House, disco and feel-good party music built for the dancefloor.",
        href: "https://www.mixcloud.com/janoris/hallier-mix-001/",
      },
    ],

    /* a quieter, more personal coda — a second musical side */
    personal: {
      title: "More Personal Selections",
      note: "Late-night grooves and more personal selections outside the usual dancefloor setting.",
      buttonLabel: "SoundCloud",
      href: "https://soundcloud.com/janopaul",
    },
  },
} as const;

export const navLinks = [
  { label: "About", href: "/about", external: false },
  { label: "Listen", href: site.listen.href, external: true },
  { label: "Book", href: site.book.href, external: false },
] as const;
