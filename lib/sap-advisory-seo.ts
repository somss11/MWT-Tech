import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, absoluteUrl, breadcrumbLd, brand, robotsDefault, siteUrl } from "@/lib/seo";
import { advisoryHub, advisoryPath, type AdvisoryPage } from "@/lib/sap-advisory";

export function advisoryMetadata(p: AdvisoryPage): Metadata {
  const path = advisoryPath(p);
  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: path },
    robots: robotsDefault,
    openGraph: {
      type: "website",
      url: path,
      siteName: brand.name,
      locale: "en_US",
      title: `${p.title} | ${brand.name}`,
      description: p.description,
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: p.title }],
    },
    twitter: { card: "summary_large_image", title: `${p.title} | ${brand.name}`, description: p.description, images: [DEFAULT_OG_IMAGE] },
  };
}

export function advisoryLd(p: AdvisoryPage) {
  const path = advisoryPath(p);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "SAP Advisory & Assurance", path: advisoryPath(advisoryHub) },
    ...(p.slug ? [{ name: p.title, path }] : []),
  ];
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${absoluteUrl(path)}#webpage`,
      url: absoluteUrl(path),
      name: `${p.title} | ${brand.name}`,
      description: p.description,
      inLanguage: "en",
      isPartOf: { "@id": `${siteUrl}/#website` },
      publisher: { "@id": `${siteUrl}/#organization` },
      dateModified: "2026-11-18",
      about: [{ "@type": "Thing", name: "SAP advisory and assurance" }],
    },
    breadcrumbLd(crumbs),
  ];
}
