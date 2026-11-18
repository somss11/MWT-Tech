// The SAP Advisory & Assurance pages: the hub and the eight pages under it. Used by the header menu, sitemap, llms.txt and each page's metadata.
export const ADVISORY_HUB = "/services/sap-advisory";

export type AdvisoryPage = { slug: string; label: string; title: string; description: string };

export const advisoryHub: AdvisoryPage = {
  slug: "",
  label: "SAP Advisory & Assurance",
  title: "SAP Advisory & Assurance",
  description: "Client-side SAP advisory and assurance for S/4HANA, RISE and GROW programmes, reporting to your leadership, not your vendor.",
};

export const advisoryPages: AdvisoryPage[] = [
  { slug: "s4hana-readiness-roadmap", label: "S/4HANA Readiness & Roadmap", title: "SAP S/4HANA Readiness & Roadmap", description: "ECC to S/4HANA decisions, RISE or GROW, business case, requirements and roadmap, prepared independently before you appoint an SAP partner." },
  { slug: "sap-partner-selection", label: "Implementation Partner Selection", title: "SAP Implementation Partner Selection", description: "Structured RFP, evaluation and contract support to choose the right SAP implementation partner for S/4HANA, RISE or GROW." },
  { slug: "sap-licence-advisory", label: "Licence & Commercial Advisory", title: "SAP Licence & Commercial Advisory", description: "Independent review of RISE and GROW order forms, user types, licence BOMs, sizing and renewal terms." },
  { slug: "sap-owners-representative", label: "Owner's Representative & PMO", title: "SAP Owner's Representative & Client-Side PMO", description: "Senior SAP programme leadership acting for you, managing the SAP partner to contract across every vendor and business unit." },
  { slug: "sap-programme-assurance", label: "Programme Assurance", title: "Independent SAP Programme Assurance", description: "Independent oversight of S/4HANA, RISE and GROW programmes: risk, progress, quality and monthly board reporting." },
  { slug: "sap-health-check-recovery", label: "Health Check & Recovery", title: "SAP Programme Health Check & Recovery", description: "Fast, independent diagnosis of slipping S/4HANA, RISE and GROW programmes, with a practical recovery plan." },
  { slug: "sap-go-live-readiness", label: "Go-Live Readiness & Quality Gates", title: "SAP Go-Live Readiness & Quality Gates", description: "Independent go or no-go assurance on testing, data migration, cutover and support readiness before your S/4HANA go-live." },
  { slug: "sap-value-realisation", label: "Value Realisation & Optimisation", title: "SAP Value Realisation & Optimisation", description: "Benefits tracking, adoption analysis and optimisation after your S/4HANA go-live." },
];

export const advisoryPath = (p: AdvisoryPage) => (p.slug ? `${ADVISORY_HUB}/${p.slug}` : ADVISORY_HUB);
