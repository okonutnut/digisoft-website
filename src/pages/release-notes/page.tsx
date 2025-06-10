import PageLayout from "@/components/custom/layout";
import ContentCard from "@/components/custom/content/content-card";
import ContentHeader from "@/components/custom/content/content-header";
import { GetAllProducts } from "@/hooks/read-excel";
import ViewReleaseNotesTextArea from "./components/modal";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function ReleaseNotes() {
  const products = GetAllProducts().map((item) => ({
    code: item.code,
    title: item.title,
  }));

  return (
    <PageLayout hasNavbar className="bg-white dark:bg-[#004580]">
      <section className="container mt-[1rem] flex flex-col gap-5 p-0">
        {/* TITLE */}
        <ContentHeader
          title="Release Notes"
          subtitle="List of release notes for all products"
        />

        {/* ACCORDION OF RELEASE NOTES */}
        <ContentCard className="min-h-[50vh]">
          <Accordion type="single" collapsible>
            {products.map((product, index: number) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{product.title}</AccordionTrigger>
                <AccordionContent>
                  <ViewReleaseNotesTextArea
                    title={product.title}
                    code={product.code as string}
                  >
                    <div className="font-medium">{product.title}</div>
                  </ViewReleaseNotesTextArea>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ContentCard>
      </section>

      {/* OVERLAY BOTTOM */}
      <div className="w-full xs:h-[120px] sm:h-[200px] md:h-[200px] lg:h-[400px] xl:h-[400px] 2xl:h-[400px] bg-[url('/images/overlay/bottom.svg')] bg-cover bg-no-repeat bg-bottom p-0 m-0"></div>
    </PageLayout>
  );
}
