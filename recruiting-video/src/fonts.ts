import { loadFont } from "@remotion/fonts";
import { staticFile } from "remotion";

// Fonts are bundled in public/fonts (both SIL Open Font License),
// so rendering works without access to Google Fonts.

// Headline font: bold, condensed, sporty
export const headlineFont = "Anton";
loadFont({
  family: headlineFont,
  url: staticFile("fonts/Anton-latin.woff2"),
  weight: "400",
});

// Body font (variable font, covers all weights)
export const bodyFont = "Inter";
loadFont({
  family: bodyFont,
  url: staticFile("fonts/Inter-latin.woff2"),
  weight: "100 900",
});
