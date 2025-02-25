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

export default function ProductPreview() {
  const { id } = useParams();
  return (
    <PageLayout className="bg-white" hasSidebar>
      {/* HEADER */}
      <section className="p-4 mt-8" id="header">
        <Breadcrumb>
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
      </section>

      <section className="p-4 flex flex-col gap-5" id="overview">
        {/* TITLE */}
        <div>
          <h1 className="text-4xl my-5 font-bold text-primary">
            Student Information &amp; Accounting System (SIAS)
          </h1>
          <p className="text-md text-gray-600">
            SIAS is a web-based application that allows students to view their
            academic records, pay their tuition fees, and view their grades.
          </p>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-lg font-bold text-primary">FAQ</h2>
          <ul className="text-slate-900">
            <li>
              <span className="flex gap-2">
                <Check />
                <strong>
                  The MOST ADVANCED, MOST COMPLETE and FULLY INTEGRATED School
                  Software in the Philippines!
                </strong>
              </span>
            </li>
            <li>
              <span className="flex gap-2">
                <Check />
                <strong>
                  The ONLY school software with INTEGRATED Learning Management
                  System (LMS) in the Philippines.
                </strong>
              </span>
            </li>
            <li>
              <span className="flex gap-2">
                <Check />
                <strong>
                  The ONLY school software that is ACTIVELY MAINTAINED,
                  DOWNLOADABLE and UPGRADEABLE-BY-DESIGN in the Philippines.
                </strong>
              </span>
            </li>
            <li>
              <span className="flex gap-2">
                <Check />
                <strong>
                  The ONLY school software which is 100% Desktop and MOBILE
                  friendly (All User Interfaces: Admin, Trans, Tools & Reports)
                </strong>
              </span>
            </li>
            <li>
              <span className="flex gap-2">
                <Check />
                <strong>
                  The NO. 1 school software implemented at least 100 times in
                  private and government colleges & universities!
                </strong>
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* DOWNLOAD */}
      <section className="p-4 flex flex-col gap-5" id="download">
        <div>
          <h2 className="text-lg font-bold text-primary">DOWNLOAD</h2>
          <ul className="text-slate-900">
            <li>
              <span className="flex gap-2">
                <Check />
                <strong>
                  The MOST ADVANCED, MOST COMPLETE and FULLY INTEGRATED School
                  Software in the Philippines!
                </strong>
              </span>
            </li>
            <li>
              <span className="flex gap-2">
                <Check />
                <strong>
                  The ONLY school software with INTEGRATED Learning Management
                  System (LMS) in the Philippines.
                </strong>
              </span>
            </li>
            <li>
              <span className="flex gap-2">
                <Check />
                <strong>
                  The ONLY school software that is ACTIVELY MAINTAINED,
                  DOWNLOADABLE and UPGRADEABLE-BY-DESIGN in the Philippines.
                </strong>
              </span>
            </li>
            <li>
              <span className="flex gap-2">
                <Check />
                <strong>
                  The ONLY school software which is 100% Desktop and MOBILE
                  friendly (All User Interfaces: Admin, Trans, Tools & Reports)
                </strong>
              </span>
            </li>
            <li>
              <span className="flex gap-2">
                <Check />
                <strong>
                  The NO. 1 school software implemented at least 100 times in
                  private and government colleges & universities!
                </strong>
              </span>
            </li>
          </ul>
        </div>
      </section>
    </PageLayout>
  );
}
