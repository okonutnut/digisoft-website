import PageLayout from "@/components/custom/layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <PageLayout hasNavbar>
      <section className="flex flex-col justify-center items-center h-[100vh]">
        <h1 className="2xl:text-6xl font-bold text-primary mb-6">
          Student Information &amp; Accounting System (SIAS)
        </h1>
        <span className="uppercase text-4xl font-bold text-center mb-10">
          The most <span className="text-[#f1f1f1]">advance</span>, most
          <span className="text-[#f1f1f1]"> complete</span> <br /> &amp;
          <span className="text-[#f1f1f1]"> fully integrated</span>
          <br />
          school system in the philippines
        </span>
        <Link to={"/products/sias"}>
          <Button className="px-10 uppercase">See more</Button>
        </Link>
      </section>
    </PageLayout>
  );
}
