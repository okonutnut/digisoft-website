import { Link, useParams } from "react-router-dom";
import PageLayout from "@/components/custom/layout";
import { Check } from "lucide-react";
import ContentCard from "@/components/custom/content/content-card";
import ContentHeader from "@/components/custom/content/content-header";
import { GetProductDetails } from "@/hooks/read-excel";
import TextArea from "@/components/custom/textarea";
import { DownloadVersion } from "./components/download-combobox";
import useReleaseNotes from "@/hooks/useReleaseNotes";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function ProductPreview() {
  const { id } = useParams();

  // Get Product Details & Release Notes
  const getReleaseNotes = useReleaseNotes(id as string);
  const data = GetProductDetails(id as string);

  return (
    <PageLayout
      className="bg-white px-6"
      hasSidebar
      productTitle={id?.toUpperCase()}
      pageName="Products"
      menuItems={[
        { title: "Overview", id: "top" },
        { title: "Download", id: "download" },
        { title: "Release Notes", id: "release" },
        { title: "Brochures", id: "brochure" },
      ]}
    >
      <section className="my-8 flex flex-col gap-5 items-start h-screen">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{id}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* TITLE */}
        <ContentHeader
          title={data?.title}
          subtitle={data?.description}
          id="top"
        />

        {/* FAQ */}
        {data?.faq && data?.faq.length > 0 && (
          <ContentCard title="FAQ" id="faq">
            <ul className="text-slate-900">
              {data?.faq.map((item: string, index: number) => (
                <li key={index}>
                  <span className="flex gap-2">
                    <Check />
                    <strong>{item}</strong>
                  </span>
                </li>
              ))}
            </ul>
          </ContentCard>
        )}

        {/* DOWNLOADS */}
        <ContentCard title="DOWNLOAD" id="download">
          <div className="flex items-center justify-start gap-3 flex-wrap">
            {data?.download && data.download.length > 0 ? (
              <>
                <p className="font-semibold my-0">
                  Get{" "}
                  <span className="text-primary text-sm">
                    {id?.toUpperCase()}
                  </span>
                </p>
                <DownloadVersion
                  className="w-[500px]"
                  options={data?.download.map(
                    (dl: { version: string; link: string }) => {
                      return { label: dl.version, value: dl.link };
                    }
                  )}
                />
              </>
            ) : (
              "No download available."
            )}
          </div>
        </ContentCard>

        {/* RELEASE NOTES */}
        <ContentCard title="RELEASE NOTES" id="release" className="max-w-[50%]">
          {getReleaseNotes && getReleaseNotes != "No release notes found." ? (
            <TextArea value={getReleaseNotes} />
          ) : (
            <p className="italic text-slate-600 text-sm">
              No release notes available.
            </p>
          )}
        </ContentCard>

        {/* BROCHURES */}
        <ContentCard title="BROCHURES" id="brochure">
          {data?.brochure && data?.brochure.length > 0 ? (
            <ul className="flex justify-start items-center gap-3 flex-wrap">
              {data?.brochure.map(
                (item: { title: string; link: string }, index: number) => (
                  <li key={index}>
                    <Link to={item.link} className="text-sm underline">
                      {item.title}
                    </Link>
                  </li>
                )
              )}
            </ul>
          ) : (
            <p className="italic text-slate-600 text-sm">
              No brochues available.
            </p>
          )}
        </ContentCard>
      </section>
    </PageLayout>
  );
}
