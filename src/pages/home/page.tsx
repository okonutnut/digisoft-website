import PageLayout from "@/components/custom/layout";
import ProductCarousel from "./components/product-carousel";

export default function HomePage() {
  return (
    <PageLayout hasNavbar>
      <ProductCarousel />
    </PageLayout>
  );
}
