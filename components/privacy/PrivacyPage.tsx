import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import { CopyrightSpy } from "@/components/copyright/CopyrightSpy";
import { PrivacyBody } from "./PrivacyBody";
import "@/components/copyright/copyright.css";

const jakarta = Plus_Jakarta_Sans({ variable: "--font-pjs", subsets: ["latin"], weight: ["500", "600", "700", "800"] });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], weight: ["400", "500", "600", "700"] });

/**
 * Privacy Policy. It is built on the Copyright and Content Use page's layout and stylesheet (the .cr and .cp- classes),
 * so the two legal pages look the same. The site's own header, copyright notice and footer wrap it, untouched.
 */
export function PrivacyPage() {
  return (
    <div className={`cr ${jakarta.variable} ${manrope.variable}`}>
      <div id="top">
        <PrivacyBody />
      </div>
      <CopyrightSpy />
    </div>
  );
}
