import { OilBody } from "./OilBody";
import "./oil.css";

/**
 * Oil and Gas on SAP, from the supplied page: the body only. The site's own header, copyright notice and
 * footer wrap it, untouched. The page names its two typefaces and loads them the way it did originally, so its
 * illustrations (which name the fonts directly) draw exactly as they were made. It has no script of its own.
 */
export function OilPage() {
  return (
    <div className="og-page">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Manrope:wght@400;500;600;700&display=swap"
        precedence="default"
      />
      <OilBody />
      {/* The trademark line from the supplied page's footer (its copyright line is replaced by the site's notice). */}
      <footer>
        <div className="in">
          <span>SAP and other SAP products are trademarks of SAP SE. Company names belong to their owners. Illustrations are illustrative.</span>
        </div>
      </footer>
    </div>
  );
}
