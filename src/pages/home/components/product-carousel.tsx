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
        className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center"
        id="element"
      >
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-cover bg-no-repeat bg-center 2xl:bg-[url('/images/overlay.svg')] xl:bg-[url('/images/overlay.svg')] lg:bg-[url('/images/overlay.svg')] md:bg-[url('/images/overlay-mobile.svg')] sm:bg-[url('/images/overlay-mobile.svg')] xs:bg-[url('/images/overlay-mobile.svg')]"></div>
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
