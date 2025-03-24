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
import { ModeToggle } from "@/components/mode-toggle";
import MobileNav from "./components/mobile-nav";

export default function ProductPreview() {
  const { id } = useParams();

  // Get Product Details & Release Notes
  const getReleaseNotes = useReleaseNotes(id as string);
  const data = GetProductDetails(id as string);

  return (
    <PageLayout
      hasSidebar
      pageName="Products"
      menuItems={[
        { title: "Overview", id: "top" },
        { title: "Download", id: "download" },
        { title: "Release Notes", id: "release" },
        { title: "Brochures", id: "brochure" },
      ]}
    >
      <section className="relative w-full flex flex-col gap-5 min-h-screen mb-4">
        {/* HEADER */}
        <MobileNav />
        <div className="w-full xs:hidden md:flex lg:flex xl:flex 2xl:flex justify-between items-center my-3 px-3 z-10">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
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

        <section className="px-4 gap-2 flex flex-col z-10">
          {/* TITLE */}
          <ContentHeader
            title={data?.title}
            subtitle={data?.description}
            id="top"
          />

          {/* FAQ */}
          {data?.faq && data?.faq.length > 0 && (
            <ContentCard title="FAQ" id="faq">
              <ul>
                {data?.faq.map((item: string, index: number) => (
                  <li key={index}>
                    <span className="flex gap-2 2xl:text-lg xs:text-[12px]">
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
                  className="xs:min-w-full sm:min-w-full md:min-w-[200px] 2xl:min-w-[500px] xl:min-w-[400px] lg:min-w-[300px]"
                  options={data?.download.map(
                    (dl: { version: string; link: string }) => {
                      return { label: dl.version, value: dl.link };
                    }
                  )}
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
        {/* 
        <div className="hidden lg:block xl:block 2xl:block absolute w-full h-full bg-[url('/images/preview-bg.svg')] bg-cover bg-center bg-no-repeat scale-x-[-1] z-0"></div> */}
      </section>
    </PageLayout>
  );
}
