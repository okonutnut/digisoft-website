import PageLayout from "@/components/custom/layout";
import ContentCard from "@/components/custom/content/content-card";
import ContentHeader from "@/components/custom/content/content-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { GetListOfClients } from "@/hooks/read-excel";

export default function ListOfClients() {
  const clients = GetListOfClients();
  console.log(clients);

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
      className="px-6"
      hasSidebar
      productTitle="Menu"
      pageName="Clients"
      menuItems={[{ title: "List of all client", id: "list-of-clients" }]}
    >
      <section className="my-8 flex flex-col gap-5">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>List of Clients</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
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
