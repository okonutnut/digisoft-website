import { Link, useParams } from "react-router-dom";
import PageLayout from "@/components/custom/layout";
import { Check } from "lucide-react";
import ContentCard from "@/components/custom/content/content-card";
import ContentHeader from "@/components/custom/content/content-header";
import { GetProductDetails } from "@/hooks/read-excel";
import TextArea from "@/components/custom/textarea";
import { DownloadVersion } from "./components/download-combobox";
import useReleaseNotes from "@/hooks/read-notes";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ModeToggle } from "@/components/mode-toggle";
import MobileNav from "../../components/custom/mobile-nav";

export default function ProductPreview() {
  const { id } = useParams();

  // Get Product Details & Release Notes
  const getReleaseNotes = useReleaseNotes(id as string);
  const data = GetProductDetails(id as string);

  return (
    <PageLayout
      hasSidebar
      pageName="Products"
      className="bg-white dark:bg-[#004580]"
      menuItems={[
        { title: "Overview", id: "top" },
        { title: "Download", id: "download" },
        { title: "Release Notes", id: "release" },
        { title: "Brochures", id: "brochure" },
      ]}
    >
      <section className="relative w-full flex flex-col min-h-screen">
        {/* HEADER */}
        <MobileNav />
        <div className="w-full xs:hidden md:flex lg:flex xl:flex 2xl:flex justify-between items-center my-3 px-3 z-10">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="dark:text-white">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="cursor-default">
                  {id?.toUpperCase()}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <ModeToggle />
        </div>

        <section className="p-4 gap-2 flex flex-col z-10">
          {/* TITLE */}
          <ContentHeader
            title={data?.title}
            subtitle={data?.description as string}
            id="top"
          />

          {/* FAQ */}
          {Array.isArray(data?.faq) && data.faq.length > 0 && (
            <ContentCard title="FAQ" id="faq">
              <ul>
                {(data.faq as string[]).map((item, index) => (
                  <li key={index}>
                    <span className="flex gap-2 2xl:text-lg xs:text-[12px] text-[#16294a] dark:text-white">
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
                <DownloadVersion
                  className="xs:min-w-full sm:min-w-full md:min-w-[200px] 2xl:min-w-[500px] xl:min-w-[200px] lg:min-w-[300px] dark:bg-[#004580] bg-white"
                  options={(
                    data?.download as { version: string; link: string }[]
                  ).map((dl) => {
                    return { label: dl.version, value: dl.link };
                  })}
                />
              ) : (
                "No download available."
              )}
            </div>
          </ContentCard>

          {/* RELEASE NOTES */}
          <ContentCard
            title="RELEASE NOTES"
            id="release"
            className="2xl:max-w-[50%]"
          >
            {getReleaseNotes && getReleaseNotes != "No release notes found." ? (
              <TextArea value={getReleaseNotes} className="xs:text-xs" />
            ) : (
              <p className="italic text-slate-600 dark:text-slate-100 text-sm">
                No release notes available.
              </p>
            )}
          </ContentCard>

          {/* BROCHURES */}
          <ContentCard title="BROCHURES" id="brochure">
            {Array.isArray(data?.brochure) && data.brochure.length > 0 ? (
              <ul className="flex justify-start items-center gap-3 flex-wrap">
                {data.brochure
                  .filter(
                    (item): item is { title: string; link: string } =>
                      typeof item.title === "string" &&
                      typeof item.link === "string"
                  )
                  .map((item, index) => (
                    <li key={index}>
                      <Link to={item.link} className="text-sm underline">
                        {item.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            ) : (
              <p className="italic text-slate-600 dark:text-slate-100 text-sm">
                No brochues available.
              </p>
            )}
          </ContentCard>
        </section>
      </section>

      {/* OVERLAY BOTTOM */}
      <div className="w-full xs:h-[120px] sm:h-[200px] md:h-[200px] lg:h-[400px] xl:h-[400px] 2xl:h-[200px] bg-[url('/images/overlay/bottom.svg')] bg-cover bg-no-repeat bg-bottom p-0 m-0"></div>
    </PageLayout>
  );
}
