import PageLayout from "@/components/custom/layout";
import ProductCarousel from "./components/product-carousel";
import { FeaturesSectionDemo } from "./components/feature-card";

export default function HomePage() {
  return (
    <PageLayout className="bg-white dark:bg-[#004580]" hasNavbar>
      <ProductCarousel />
      <FeaturesSectionDemo />
    </PageLayout>
  );
}
