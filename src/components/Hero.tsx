
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import ScrollAnimation from "@/components/animations/ScrollAnimation"

export default function Hero() {
  return (
    <header className="h-screen pt-24 bg-zinc-50">
      <div className="absolute inset-0 ">
        <Image
          src="/home.png"
          alt="Clothes Shop"
          height={1000}
          width={1000}
          quality={100}
          priority
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 opacity-50 bg-black" />
      </div>

<ScrollAnimation>

      <div className=" z-10 relative max-w-screen-xl mx-auto px-7 flex flex-col justify-center ">
        <div className="flex flex-col gap-y-6 justify-center items-center pb-10 h-screen">
          <h2 className="rounded-xl border-zinc-50 text-center  text-white border py-1 px-4 font-light w-[250px]">
            New winter collection 2025
          </h2>
          <h1 className="md:text-5xl text-3xl font-bold text-center text-zinc-50 max-w-[1000px]">
            Where style speaks, trends reasonate, fashion flourishes
          </h1>
          <p className=" text-zinc-50 text-center max-w-[700px]">
            Unveilling a fashion destination where trends blend seamlessly with
            your individual style aspirations. Discover today!
          </p>
          <Link href="/products">
            <Button className="rounded-full px-4 py-5 text-lg bg-zinc-50 hover:bg-zinc-100 text-zinc-950  animate-bounce duration-1000">
              New Collection
              <ArrowRight className="bg-zinc-950 rounded-full text-zinc-50" />
            </Button>
          </Link>
        </div>
      </div>
</ScrollAnimation>
    </header>
  );
}
