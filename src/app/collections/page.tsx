import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import ScrollAnimation from "@/components/animations/ScrollAnimation";
export default function Collection() {
  const collections = [
    {
      name: "One Piece",
      src: "https://www.junaidjamshed.com/media/wysiwyg/W-C-6.jpg",
      href: "/collections/one-piece",
    },
    {
      name: "Two Piece",
      src: "https://www.junaidjamshed.com/media/wysiwyg/W-C-8.jpg",
      href: "/collections/two-piece",
    },
    {
      name: "Three Piece",
      src: "https://www.junaidjamshed.com/media/wysiwyg/W-C-10.jpg",
      href: "/collections/three-piece",
    },
  ];

  return (
    <div className="py-24 bg-zinc-50">
      <h1 className="text-4xl font-bold text-center pb-6">Our Collections</h1>
      <div className="grid max-w-screen-2xl mx-auto sm:grid-cols-3 grid-cols-1 gap-6 px-7">
        {collections.map((col, index) => (
          <ScrollAnimation key={index}>
            <Link
              href={col.href}
              className="flex flex-col gap-3 hover:opacity-90"
              
            >
              <Image
                src={col.src}
                alt={col.name}
                height={1000}
                width={1000}
                className=""
              ></Image>
              <Button className="text-center text-2xl font-semibold bg-zinc-900 hover:bg-zinc-950 active:bg-zinc-900">
                {col.name}
              </Button>
            </Link>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
}
