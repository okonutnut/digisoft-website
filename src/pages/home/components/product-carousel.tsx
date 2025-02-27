import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import ProductCard from "./product-card";
import { GetAllProducts } from "@/hooks/read-excel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

export default function ProductCarousel() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const products = GetAllProducts();
  return (
    <>
      <Carousel plugins={[plugin.current]} className="h-screen" id="element">
        <CarouselContent>
          {products.map((product, index: number) => (
            <CarouselItem key={index}>
              <ProductCard title={product.title} description={product.faq} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
}
