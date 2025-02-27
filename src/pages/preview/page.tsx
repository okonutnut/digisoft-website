import { Link, useParams } from "react-router-dom";
import PageLayout from "@/components/custom/layout";
import { Check } from "lucide-react";
import ContentCard from "@/components/custom/content/content-card";
import ContentHeader from "@/components/custom/content/content-header";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { GetExcelData } from "@/hooks/read-excel";
import TextArea from "@/components/custom/textarea";
import { DownloadVersion } from "./components/download-combobox";

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
    <PageLayout
      className="bg-white px-6"
      hasSidebar
      productTitle={id?.toUpperCase()}
      pageName="Products"
    >
      <section className="my-8 flex flex-col gap-5">
        {/* TITLE */}
        <ContentHeader
          title={`${data?.Info[0].Title} (${data?.Info[0].Code})`}
          subtitle={data?.Info[0].Description}
        />

        {/* FAQ */}
        <ContentCard title="">
          <ul className="text-slate-900">
            {data?.FAQ.map((item: any, index: number) => (
              <li key={index}>
                <span className="flex gap-2">
                  <Check />
                  <strong>{item.FAQ}</strong>
                </span>
              </li>
            ))}
          </ul>
        </ContentCard>

        {/* DOWNLOADS */}
        <ContentCard title="DOWNLOAD">
          <div className="flex items-center gap-3">
            <p className="font-semibold">
              Get <span className="text-primary">{id?.toUpperCase()}</span>
            </p>
            <DownloadVersion
              className="w-[300px]"
              options={data?.Download.map((item: any) => ({
                value: item.Link,
                label: item.Version,
              }))}
            />
          </div>
        </ContentCard>

        {/* RELEASE NOTES */}
        <ContentCard title="RELEASE NOTES">
          <TextArea value={data?.ReleaseNote[0].Notes} />
        </ContentCard>

        {/* BROCHURES */}
        <ContentCard title="BROCHURES">
          <ul className="flex justify-start items-center gap-3">
            {data?.Brochure.map((item: any, index: number) => (
              <li key={index}>
                <Link to={`${item?.Link}`}>
                  <Button variant={"link"}>{item?.Title}</Button>
                </Link>
              </li>
            ))}
          </ul>
        </ContentCard>
      </section>
    </PageLayout>
  );
}
