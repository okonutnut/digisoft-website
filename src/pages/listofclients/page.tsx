import PageLayout from "@/components/custom/layout";
import ContentCard from "@/components/custom/content/content-card";
import ContentHeader from "@/components/custom/content/content-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GetListOfClients } from "@/hooks/read-excel";

export default function ListOfClients() {
  const clients = GetListOfClients();

  const regionsMap: Record<string, string[]> = {};
  clients?.forEach((entry) => {
    Object.entries(entry).forEach(([region, school]) => {
      if (!regionsMap[region]) {
        regionsMap[region] = [];
      }
      regionsMap[region].push(school);
    });
  });

  return (
    <PageLayout
      hasNavbar
      pageName="Clients"
      className="bg-white dark:bg-[#004580]"
    >
      <section className="min-h-[80vh] container py-[1rem] flex flex-col gap-5 p-0">
        {/* TITLE */}
        <ContentHeader
          title="List of Clients"
          subtitle="List of clients who have purchased / subscribe to the products."
        />
        {/* LIST OF CLIENTS */}
        <ContentCard id="list-of-clients">
          <Accordion type="multiple" className="w-full">
            {Object.entries(regionsMap).map(([region, schools]) => (
              <AccordionItem key={region} value={region}>
                <AccordionTrigger>{region}</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5">
                    {schools.map((school, index) => (
                      <li key={index}>{school}</li>
                    ))}
                  </ul>
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
