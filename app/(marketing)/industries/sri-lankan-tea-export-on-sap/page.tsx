import type { Metadata } from "next";
import { TeaPage } from "@/components/industries/tea/TeaPage";
import { CanaryNote } from "@/components/CanaryNote";
import { JsonLd } from "@/components/JsonLd";
import { DEFAULT_OG_IMAGE, absoluteUrl, breadcrumbLd, brand, robotsDefault, siteUrl } from "@/lib/seo";

const path = "/industries/sri-lankan-tea-export-on-sap";
const title = "Sri Lankan Tea Export on SAP";
const description =
  "How SAP runs a Sri Lankan tea exporter, from auction to vessel: buying, tasting, blending, packing, export clearance and contract costing on one SAP Cloud ERP core.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  robots: robotsDefault,
  openGraph: {
    type: "website",
    url: path,
    siteName: brand.name,
    locale: "en_US",
    title: `${title} | ${brand.name}`,
    description,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: title }],
  },
  twitter: { card: "summary_large_image", title: `${title} | ${brand.name}`, description, images: [DEFAULT_OG_IMAGE] },
};

const ld = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name: `${title} | ${brand.name}`,
    description,
    inLanguage: "en",
    isPartOf: { "@id": `${siteUrl}/#website` },
    publisher: { "@id": `${siteUrl}/#organization` },
    dateModified: "2026-11-09",
    about: [
      { "@type": "Thing", name: "Tea export" },
      { "@type": "Thing", name: "SAP Cloud ERP" },
    ],
    spatialCoverage: { "@type": "Country", name: "Sri Lanka" },
  },
  breadcrumbLd([
    { name: "Home", path: "/" },
    { name: "Industries", path: "/industries" },
    { name: title, path },
  ]),
];

export default function Page() {
  return (
    <>
      <JsonLd data={ld} />
      <TeaPage />
      <CanaryNote />
    </>
  );
}
