"use client";
import React, { useEffect, useState } from "react";
import ProductCart from "@/components/ProductCart";
import { Products } from "@/data/product";
import { Skeleton } from "./ui/skeleton";
import ScrollAnimation from "@/components/animations/ScrollAnimation";

export default function ProductsPage() {
  const [products, setProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Failed to load products :", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto pt-20">
      <ScrollAnimation>
        <h1 className="text-4xl font-bold text-center">Winter Collections</h1>
      </ScrollAnimation>
      {loading ? (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 px-7 gap-6 my-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <div className="flex flex-col justify-center items-center gap-3" key={index}>
              <Skeleton
                key={index}
                className="h-[300px] w-[300px] rounded-xl"
              />
              <div className="flex flex-col gap-2">
                <Skeleton
                  key={index}
                  className="h-[20px] w-[300px] rounded-xl"
                />
                <Skeleton
                  key={index}
                  className="h-[10px] w-[150px] rounded-xl"
                />
                <Skeleton
                  key={index}
                  className="h-[10px] w-[70px] rounded-xl"
                />
                <div className="flex justify-center mt-3">
                  <Skeleton
                    key={index}
                    className="h-[40px] w-[250px] rounded-xl "
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 px-7 gap-6 my-6">
          {products.slice(0, 8).map((product, index) => (
            <ScrollAnimation key={index}>
              <ProductCart products={product}  />
            </ScrollAnimation>
          ))}
        </div>
      )}
    </div>
  );
}
