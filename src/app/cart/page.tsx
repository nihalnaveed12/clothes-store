"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { updateQuantity, removeFromCart } from "@/store/cartSlice";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ScrollAnimation from "@/components/animations/ScrollAnimation"



export default function CartPage() {
  const { items, total } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity , 0)

  return (
    <div className="py-24 min-h-80">
      <div className="max-w-screen-xl mx-auto px-4">
        {items.length === 0 ? (
          <p className="text-center">Your cart is empty</p>
        ) : (
          <div className="flex gap-4 flex-col">
            {items.map((item, index) => (
              <ScrollAnimation key={index}>
              <div
                className="flex sm:justify-between  flex-col sm:flex-row gap-4 bg-zinc-50 px-7 py-4 rounded-xl shadow-md"
                
              >
                <div className="flex gap-3 flex-col sm:flex-row items-center">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    height={1000}
                    width={1000}
                    className="w-24 h-24 rounded-xl"
                  ></Image>
                  <div className="flex flex-col sm:text-start text-center">
                    <h3>{item.name}</h3>
                    <h3>
                      {item.collection.split("-").join(" ").toUpperCase()}
                    </h3>
                    <h3>PKR {item.price}</h3>
                  </div>
                </div>

                <div className="flex gap-6 items-center justify-center sm:justify-end">
                  <div className="flex gap-3 items-center">
                    <button
                      className="rounded-full text-lg flex items-center justify-center bg-zinc-700 text-zinc-50 w-6 h-6 hover:bg-zinc-950 active:bg-zinc-700"
                      onClick={() =>
                        dispatch(
                          updateQuantity({ id: item.id.toString(), increment: false })
                        )
                      }
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="rounded-full text-lg flex items-center justify-center bg-zinc-700 text-zinc-50 w-6 h-6 hover:bg-zinc-950 active:bg-zinc-700"
                      onClick={() =>
                        dispatch(
                          updateQuantity({ id: item.id.toString(), increment: true })
                        )
                      }
                    >
                      +
                    </button>
                  </div>

                  <div className="">
                    <Button
                      onClick={() => dispatch(removeFromCart(item.id.toString()))}
                      className="bg-red-500 hover:bg-red-600 active:bg-red-500"
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
              </ScrollAnimation>
            ))}
            <div className="mt-5 flex flex-col gap-5 bg-zinc-50 p-4 rounded-xl max-w-md justify-center w-full shadow-lg">
              <h2 className="text-3xl font-bold">Cart Summary</h2>
              <div className="flex flex-col gap-1">
                <p className="text-md">Number of Items: {items.length}</p>
                <p className="text-md">Product Quantity: {totalQuantity}</p>
                <p className="text-md font-semibold">
                  Total: Rs <span>{total}</span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

