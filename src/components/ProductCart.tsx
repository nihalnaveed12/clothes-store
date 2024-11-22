"use client";
import { Products } from "@/data/product";
import Link from "next/link";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import Image from "next/image";
import Rating from "./ui/Rating";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";
import ScrollAnimation from "@/components/animations/ScrollAnimation"

type ProductProps = {
  products: Products;
};

export default function ProductCart({ products }: ProductProps) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart(products)
    );
  };

  return (
<ScrollAnimation>

    <Card className="shadow-none hover:shadow-md">
      <Link
        href={`/products/${products.id}`}
        className="flex flex-col aspect-auto"
      >
        <div className="w-full aspect-square overflow-hidden h-full">
          <Image
            src={products.imageUrl}
            alt="Product-Image"
            width={1000}
            height={1000}
            loading="lazy"
            className="rounded-t-md transition-transform hover:scale-105 duration-700  hover:rounded-md object-contain"
          ></Image>
        </div>

        <div className="flex flex-col gap-2 px-2 py-3">
          <h1 className="text-[80%] font-semibold">{products.name}</h1>
          <div className="flex gap-2 items-center ">
            <Rating
              initialValue={parseFloat(products.rating)}
              allowFraction
              SVGclassName="inline-block"
              emptyClassName="fill-gray-50"
              size={19}
              readonly
            />
            <p className="mt-1 text-zinc-600">{products.rating}</p>
          </div>
          <p className="font-semibold">Rs: {products.price}</p>
        </div>
      </Link>

      <div className="p-3 ">
        <Button onClick={handleAddToCart} className="w-full active:bg-zinc-950">
          Add To Cart
        </Button>
      </div>
    </Card>
</ScrollAnimation>
  );
}
