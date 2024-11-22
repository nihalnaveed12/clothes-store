import { NextResponse } from "next/server";
import products from "@/data/product";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const productId = searchParams.get("id");

  if (productId) {
    const product = products.find((p) => p.id === parseInt(productId, 10));
    if (product) {
      return NextResponse.json(product);
    } else {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
  }

  return NextResponse.json(products);
}
