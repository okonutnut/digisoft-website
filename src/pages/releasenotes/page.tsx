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
    <PageLayout hasNavbar className="bg-white">
      <section className="container min-h-screen mt-[1rem] flex flex-col gap-5 p-0">
        {/* TITLE */}
        <ContentHeader
          title="Release Notes"
          subtitle="List of release notes of all products"
        />

        {/* ACCORDION OF RELEASE NOTES */}
        <ContentCard>
          <Accordion type="single" collapsible>
            {products.map((product, index: number) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{product.title}</AccordionTrigger>
                <AccordionContent>
                  <ViewReleaseNotesTextArea
                    title={product.title}
                    code={product.code}
                  >
                    <div className="font-medium">{product.title}</div>
                  </ViewReleaseNotesTextArea>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ContentCard>
      </section>
    </PageLayout>
  );
}
