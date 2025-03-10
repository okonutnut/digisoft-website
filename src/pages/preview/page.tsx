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
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function ProductPreview() {
  const { id } = useParams();

  // Get Product Details & Release Notes
  const getReleaseNotes = useReleaseNotes(id as string);
  const data = GetProductDetails(id as string);

  return (
    <PageLayout
      className="px-2"
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
      <section className="w-full my-3 flex flex-col gap-5 min-h-screen">
        {/* HEADER */}
        <div className="xs:flex md:hidden lg:hidden xl:hidden 2xl:hidden w-full justify-between items-center px-2">
          <SidebarTrigger />
          <Link
            to="/"
            className="xl:text-2xl xs:text-xl font-bold text-current"
          >
            DIGITAL SOFTWARE
          </Link>
          <ModeToggle />
        </div>
        <div className="w-full xs:hidden md:flex lg:flex xl:flex 2xl:flex justify-between items-center">
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

        <section className="p-2 gap-2 flex flex-col">
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
                <>
                  <p className="font-semibold my-0">
                    GET{" "}
                    <span className="text-primary">{id?.toUpperCase()}</span>
                  </p>
                  <DownloadVersion
                    className="xs:min-w-full 2xl:min-w-[500px] xl:min-w-[400px] lg:min-w-[300px] md:min-w-[200px] sm:min-w-[150px]"
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
      </section>
    </PageLayout>
  );
}
