import type { Metadata } from "next";
import { AdvisoryPage } from "@/components/sap-advisory/AdvisoryPage";
import { LicenceBody } from "@/components/sap-advisory/LicenceBody";
import { CanaryNote } from "@/components/CanaryNote";
import { JsonLd } from "@/components/JsonLd";
import { advisoryPages } from "@/lib/sap-advisory";
import { advisoryLd, advisoryMetadata } from "@/lib/sap-advisory-seo";

const page = advisoryPages.find((x) => x.slug === "sap-licence-advisory")!;

export const metadata: Metadata = advisoryMetadata(page);

export default function Page() {
  return (
    <>
      <JsonLd data={advisoryLd(page)} />
      <AdvisoryPage>
        <LicenceBody />
      </AdvisoryPage>
      <CanaryNote />
    </>
  );
}
