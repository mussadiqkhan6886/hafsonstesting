import { Playfair_Display, Italianno } from "next/font/google";

export const interTight = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const instrumentSerif = Italianno({
  subsets: ["latin"],
  weight: ["400"]
});
