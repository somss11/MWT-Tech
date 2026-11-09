"use client";

import { useSyncExternalStore } from "react";

/** The visitor's cookie choice, kept in this browser only. "unset" means they have not chosen: nothing optional loads. */
export type Consent = "unset" | "granted" | "denied";

const KEY = "mw-consent-v1";
const EVENT = "mw-consent-change";

function read(): Consent {
  try {
    const v = window.localStorage.getItem(KEY);
    return v === "granted" || v === "denied" ? v : "unset";
  } catch {
    return "unset";
  }
}

export function setConsent(value: "granted" | "denied") {
  try {
    window.localStorage.setItem(KEY, value);
  } catch {
    /* storage blocked: the choice lasts until reload, which errs on the safe side */
  }
  window.dispatchEvent(new Event(EVENT));
}

function subscribe(cb: () => void) {
  window.addEventListener(EVENT, cb);
  window.addEventListener("storage", cb);
  return () => {
    window.removeEventListener(EVENT, cb);
    window.removeEventListener("storage", cb);
  };
}

/** On the server and during hydration this is "unset", so nothing optional renders early. */
export function useConsent(): Consent {
  return useSyncExternalStore(subscribe, read, () => "unset" as Consent);
}
