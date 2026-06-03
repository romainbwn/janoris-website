/** Art-direction tokens — kept in sync with globals.css */
export const colors = {
  paper: "#f8f2e6",
  midnight: "#123a63",
  peach: "#fbdcc7",
  ink: "#231f1c",
  inkSoft: "#423b35",
  muted: "#645f57",
  cream: "#f7f1e0",
  rouge: "#c23b27",
  coral: "#ef6d42",
  blue: "#1f86b3",
  gold: "#f0b765",
} as const;

/** Section images.
 *  hero, sound + about are campaign-graded in /scripts/grade-hero.py;
 *  the wedding frame is used as shot. */
export const heroImage = "/images/janoris-hero-graded.jpg";
export const soundImage = "/images/purple-dj.jpg";
export const celebrationImage = "/images/wedding crowd.JPG";
export const aboutImage = "/images/janoris-about.jpg";
