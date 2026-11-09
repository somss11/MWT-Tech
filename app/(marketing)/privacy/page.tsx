import type { Metadata } from "next";
import { PrivacyPage } from "@/components/privacy/PrivacyPage";
import { brand, DEFAULT_OG_IMAGE } from "@/lib/seo";

const description =
  "What Mawkish Technologies collects when you visit this website or contact us, why we collect it, who processes it for us, and the choices and rights you have.";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description,
  alternates: { canonical: "/privacy" },
  openGraph: {
    type: "website",
    url: "/privacy",
    siteName: brand.name,
    locale: "en_US",
    title: `Privacy Policy | ${brand.name}`,
    description,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: brand.name }],
  },
};

export default function PrivacyRoute() {
  return <PrivacyPage />;
}
