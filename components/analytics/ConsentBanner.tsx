"use client";

import Link from "next/link";
import { setConsent, useConsent } from "@/lib/consent";

/** Cookie notice shown until the visitor chooses. Accept and Decline carry equal weight. See Analytics for what it gates. */
export function ConsentBanner() {
  const consent = useConsent();
  if (consent !== "unset") return null;

  const button =
    "inline-flex min-h-11 items-center justify-center rounded-full px-5 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

  return (
    <div
      role="region"
      aria-label="Cookie choices"
      className="fixed inset-x-0 bottom-0 border-t border-white/15 bg-[#0a110e]/95 px-5 py-4 text-white shadow-[0_-8px_30px_rgba(0,0,0,0.45)] backdrop-blur"
      style={{ zIndex: 90, paddingBottom: "max(16px, env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
        <p className="text-sm leading-relaxed text-white/80">
          We use cookies to measure activity and traffic on this site. They load only if you accept.{" "}
          <Link href="/privacy" className="underline underline-offset-2 hover:text-white">
            Privacy policy
          </Link>
        </p>
        <div className="flex flex-none gap-3">
          <button
            type="button"
            onClick={() => setConsent("denied")}
            className={`${button} border border-white/30 text-white hover:border-white/60`}
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => setConsent("granted")}
            className={`${button} border border-transparent bg-[#7fd9b4] text-[#06130d] hover:brightness-110`}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
