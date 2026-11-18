import type { ReactNode } from "react";
import "./advisory.css";

/**
 * SAP Advisory & Assurance pages, from the supplied pages: the body only. The site's own header, copyright notice and
 * footer wrap it, untouched. All nine pages share one stylesheet, scoped to .aa-page, and name their two typefaces the
 * way they did originally so the illustrations draw as they were made. They have no script of their own.
 */
export function AdvisoryPage({ children }: { children: ReactNode }) {
  return (
    <div className="aa-page">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Manrope:wght@400;500;600;700&display=swap"
        precedence="default"
      />
      {children}
      {/* The trademark line from the supplied page's footer (its copyright line is replaced by the site's notice). */}
      <footer>
        <div className="in">
          <span>SAP, S/4HANA, RISE with SAP, GROW with SAP, SAP Activate and Fiori are trademarks of SAP SE. Report examples are illustrations.</span>
        </div>
      </footer>
    </div>
  );
}
