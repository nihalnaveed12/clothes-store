"use client";
import React, { useEffect, useState } from "react";
import ProductCart from "@/components/ProductCart";
import { Products } from "@/data/product";
import ScrollAnimation from "@/components/animations/ScrollAnimation";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  // type CarouselApi,
} from "@/components/ui/carousel";

export function TopSelling() {
  // const [api, setApi] = React.useState<CarouselApi>();
  

  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // useEffect(() => {
  //   if (!api) {
  //     return;
  //   }

  //   setCount(api.scrollSnapList().length);
  //   setCurrent(api.selectedScrollSnap() + 1);

  //   api.on("select", () => {
  //     setCurrent(api.selectedScrollSnap() + 1);
  //   });
  // }, [api]);

  return (
    <div className="overflow-hidden py-20">
      <Carousel
        // setApi={setApi}
        opts={{
          align: "center",
          loop: true,
        }}
        className="relative w-full mb-6 md:mb-9 max-w-screen-2xl mx-auto "
      >
        <ScrollAnimation>
          <h2 className="text-5xl font-bold text-center pb-10">
            Top Selling Products
          </h2>
        </ScrollAnimation>

        <CarouselContent>
          {products.slice(9, 15).map((product, index) => (
            <CarouselItem
              key={index}
              className="w-full max-w-[358px] pl-5 md:basis-1/2"
            >
              <ProductCart products={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute flex items-center left-16 bottom-[50%]">
          <CarouselPrevious className="w-10 h-10 bg-zinc-800 text-zinc-50 hover:bg-zinc-950 hover:text-zinc-50 border-none hover:scale-105 duration-400 active:bg-zinc-800" />
        </div>
        <div className="absolute bottom-[50%] right-16">
          <CarouselNext className="w-10 h-10 bg-zinc-800 text-zinc-50 hover:bg-zinc-950 hover:text-zinc-50 border-none hover:scale-105 duration-400 active:bg-zinc-800" />
        </div>
      </Carousel>
    </div>
  );
}

export default TopSelling;
