import PageLayout from "@/components/custom/layout";
import ContentCard from "@/components/custom/content/content-card";
import ContentHeader from "@/components/custom/content/content-header";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { GetAllProducts } from "@/hooks/read-excel";
import ViewReleaseNotesModal from "./components/modal";
import { ModeToggle } from "@/components/mode-toggle";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Link } from "react-router-dom";

export default function ReleaseNotes() {
  const products = GetAllProducts().map((item) => ({
    code: item.code,
    title: item.title,
  }));

  return (
    <PageLayout
      className="px-2"
      hasSidebar
      pageName="Releases"
      productTitle="Navigation"
      menuItems={[{ title: "Release Notes", id: "top" }]}
    >
      <section className="h-screen my-3 flex flex-col gap-5" id="top">
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
                  Release Notes
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <ModeToggle />
        </div>
        {/* TITLE */}
        <ContentHeader
          title="Release Notes"
          subtitle="List of release notes for all products"
        />

        {/* TABLE OF RELEASE NOTES */}
        <ContentCard>
          <Table>
            <TableCaption>
              A list of your software products. (Click to view)
            </TableCaption>
            <TableBody>
              {products.map((product, index: number) => (
                <TableRow key={index}>
                  <ViewReleaseNotesModal
                    title={product.title}
                    code={product.code}
                  >
                    <TableCell className="font-medium py-2">
                      {product.title}
                    </TableCell>
                  </ViewReleaseNotesModal>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ContentCard>
      </section>
    </PageLayout>
  );
}
