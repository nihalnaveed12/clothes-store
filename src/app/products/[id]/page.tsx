"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import Rating from "@/components/ui/Rating";
import { updateQuantity, addToCart } from "@/store/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";

interface Products {
  id: number;
  name: string;
  price: number;
  collection: string;
  alert?: string;
  description?: string;
  imageUrl: string;
  rating: string;
}

export default function SingleProduct() {
  const { id } = useParams();
  const [products, setProducts] = useState<Products[]>([]);
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    fetch(`/api/products/`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [id]);

  const product = products.find((p) => p.id === Number(id));
  const item = items.find((i) => i.id === product?.id);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
    }
  };

  const handleQuantityChange = (increment: boolean) => {
    if(product) {
      dispatch(
        updateQuantity({
          id: product.id.toString(),
          increment,
        })
      );
    }
  };

  return (
    <div className="max-w-screen-lg mx-auto">
      {product ? (
        <div className="grid md:grid-cols-2 grid-cols-1 py-24 px-7 gap-6 place-content-center">
          <div className="w-full aspect-square overflow-hidden h-full rounded-lg">
            <Image
              src={product.imageUrl || ""}
              alt="Product-Image"
              width={1000}
              height={1000}
              loading="lazy"
              className="rounded-lg transition-transform hover:scale-125 duration-700 object-contain"
            />
          </div>

          <div className="flex flex-col gap-2  w-[90%]">
            <h1 className="text-3xl">{product.name}</h1>
            <div className="flex gap-2 items-center">
              <Rating
                initialValue={product.rating ? parseFloat(product.rating) : 0}
                allowFraction
                SVGclassName="inline-block"
                emptyClassName="fill-gray-50"
                size={19}
                readonly
              />
              <p className="mt-1 text-zinc-600">{product.rating}</p>
            </div>
            <p className="font-semibold text-3xl pt-4">PKR {product.price}</p>
            <div className="flex items-center gap-1.5 text-sm tracking-wide py-4">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute w-2 h-2 rounded-full bg-emerald-400 inset-0 animate-ping"></span>
              </span>
              {product.alert}
            </div>
            <p>{product.description}</p>

          
            <div className="flex gap-3 items-center py-4">
              <span className="text-xl font-semibold">Quantity</span>
              <button
                className="rounded-full text-lg flex items-center justify-center bg-zinc-700 text-zinc-50 w-6 h-6 hover:bg-zinc-950 active:bg-zinc-700"
                onClick={() => handleQuantityChange(false)} 
              >
                -
              </button>

              
              <span>{item ? item.quantity : 1}</span>

              <button
                className="rounded-full text-lg flex items-center justify-center bg-zinc-700 text-zinc-50 w-6 h-6 hover:bg-zinc-950 active:bg-zinc-700"
                onClick={() => handleQuantityChange(true)} 
              >
                +
              </button>
            </div>

            
            <div className="pt-6 w-full">
              <Button onClick={handleAddToCart} className="w-full">
                {"Add To Cart"}
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <p className="pt-24 h-screen text-2xl text-blue-300 font-semibold justify-center flex items-center">Loading...</p>
      )}
    </div>
  );
}
