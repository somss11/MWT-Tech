"use client";

import Script from "next/script";
import { GA_ID, LINKEDIN_PARTNER_ID } from "@/lib/analytics";
import { useConsent } from "@/lib/consent";

/**
 * Google Analytics (the Google tag) and the LinkedIn Insight Tag. Neither loads until the visitor accepts in the
 * cookie banner (ConsentBanner). Both are the vendors' own snippets, loaded the way Next.js loads scripts.
 */
export function Analytics() {
  const consent = useConsent();
  if (consent !== "granted" || !GA_ID) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="google-tag" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
      </Script>
      <Script id="linkedin-insight" strategy="afterInteractive">
        {`_linkedin_partner_id = "${LINKEDIN_PARTNER_ID}";
window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
window._linkedin_data_partner_ids.push(_linkedin_partner_id);
(function(l) {
if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
window.lintrk.q=[]}
var s = document.getElementsByTagName("script")[0];
var b = document.createElement("script");
b.type = "text/javascript";b.async = true;
b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
s.parentNode.insertBefore(b, s);})(window.lintrk);`}
      </Script>
    </>
  );
}
