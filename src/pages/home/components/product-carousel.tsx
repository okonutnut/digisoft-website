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
        className="h-[90vh] w-full bg-white dark:bg-[#004580] flex items-center justify-center relative m-0 p-0"
        id="element"
      >
        <div className="absolute top-0 left-0 w-full h-[300px] bg-[url('/images/overlay/top.svg')] bg-cover bg-no-repeat bg-bottom"></div>
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
