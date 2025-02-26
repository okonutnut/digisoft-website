import { useParams } from "react-router-dom";
import PageLayout from "@/components/custom/layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Check } from "lucide-react";
import ContentCard from "@/components/custom/content/content-card";
import ContentHeader from "@/components/custom/content/content-header";
import DownloadSelect from "./components/download-select";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { GetExcelData } from "@/hooks/read-products";

export default function ProductPreview() {
  const { id } = useParams();
  const [data, setData] = useState<any>();

  const obj = GetExcelData(id as string);
  useEffect(() => {
    if (obj) {
      setData(obj);
    }
  }, [id, obj]);

  console.log(data);

  return (
    <PageLayout className="bg-white px-6" hasSidebar>
      {/* Header */}
      <Breadcrumb className="my-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Product</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/product/${id}`}>
              {id?.toUpperCase()}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <section className="my-2 flex flex-col gap-5">
        {/* TITLE */}
        <ContentHeader
          title={`${data?.Info[0].Title} (${data?.Info[0].Code})`}
          subtitle={data?.Info[0].Description}
        />
        {/* FAQ */}
        <ContentCard title="FAQ">
          <ul className="text-slate-900">
            {data?.FAQ.map((item: any, index: number) => (
              <li key={index}>
                <span className="flex gap-2">
                  <Check />
                  <strong>{item.Faq}</strong>
                </span>
              </li>
            ))}
          </ul>
        </ContentCard>

        <ContentCard title="DOWNLOAD">
          <div className="flex justify-start items-center gap-3">
            <p>Get {id?.toUpperCase()}</p>
            <DownloadSelect
              className="w-[300px]"
              options={data?.Downloads.map((item: any) => ({
                value: item.Link,
                label: item.Version,
              }))}
            />
          </div>
        </ContentCard>

        <ContentCard title="RELEASE NOTES">
          <div className="flex justify-start items-center gap-3">
            <p>Get {id?.toUpperCase()}</p>
            <DownloadSelect className="w-[300px]" />
            <Button>Download</Button>
          </div>
        </ContentCard>

        <ContentCard title="BROCHURES">
          <div className="flex justify-start items-center gap-3">
            <p>Get {id?.toUpperCase()}</p>
            <DownloadSelect className="w-[300px]" />
            <Button>Download</Button>
          </div>
        </ContentCard>
      </section>
    </PageLayout>
  );
}
