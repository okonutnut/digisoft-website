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
  const products = GetAllProducts();
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <>
      <Carousel
        plugins={[plugin.current]}
        className="h-full w-full flex items-center justify-center relative m-0 p-0 z-20 bg-transparent"
      >
        <CarouselContent>
          {products.map((product, index: number) => (
            <CarouselItem key={index}>
              <ProductCard
                title={product.title}
                description={product.short_des as string}
                link={product.href}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
}
