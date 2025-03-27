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
    <PageLayout hasNavbar pageName="Clients" className="bg-white">
      <section className="container my-[1rem] flex flex-col gap-5 p-0">
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
    </PageLayout>
  );
}
