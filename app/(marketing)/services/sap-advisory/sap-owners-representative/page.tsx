import type { Metadata } from "next";
import { AdvisoryPage } from "@/components/sap-advisory/AdvisoryPage";
import { OwnersBody } from "@/components/sap-advisory/OwnersBody";
import { CanaryNote } from "@/components/CanaryNote";
import { JsonLd } from "@/components/JsonLd";
import { advisoryPages } from "@/lib/sap-advisory";
import { advisoryLd, advisoryMetadata } from "@/lib/sap-advisory-seo";

const page = advisoryPages.find((x) => x.slug === "sap-owners-representative")!;

export const metadata: Metadata = advisoryMetadata(page);

export default function Page() {
  return (
    <>
      <JsonLd data={advisoryLd(page)} />
      <AdvisoryPage>
        <OwnersBody />
      </AdvisoryPage>
      <CanaryNote />
    </>
  );
}
