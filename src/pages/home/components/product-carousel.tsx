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
        className="h-screen w-full bg-white flex items-center justify-center relative"
        id="element"
      >
        <div className="absolute bottom-0 left-0 w-full h-full bg-[url('/images/hero-new.svg')] bg-cover bg-no-repeat bg-bottom"></div>
        <CarouselContent>
          {products.map((product, index: number) => (
            <CarouselItem key={index}>
              <ProductCard
                title={product.title}
                description={product.short_des}
                link={product.href}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
}
