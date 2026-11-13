import { cookies } from "next/headers";
import { findCompetitor } from "./competitors";
import { ACCESS_COOKIE, readAccessToken } from "./token";

/**
 * Whether the current request comes from a visitor who has registered. The blocklist is checked again here, not
 * only when they registered, so adding a company to it takes effect straight away for anyone who signed in earlier.
 */
/**
 * Local development only: set CASE_ACCESS_BYPASS=1 in .env.local to read the case studies without registering, so you
 * do not have to receive an emailed code on localhost. Ignored whenever NODE_ENV is "production" (every Vercel build,
 * preview or live), so it cannot open the gate on the real site.
 */
const devBypass = () => process.env.NODE_ENV !== "production" && process.env.CASE_ACCESS_BYPASS === "1";

export async function getAccess(): Promise<{ domain: string } | null> {
  if (devBypass()) return { domain: "localhost" };
  const store = await cookies();
  const access = readAccessToken(store.get(ACCESS_COOKIE)?.value);
  if (!access) return null;
  if (findCompetitor(access.domain)) return null;
  return access;
}
