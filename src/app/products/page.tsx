"use client";
import React, { useEffect, useMemo, useState , Suspense} from "react";
import ProductCart from "@/components/ProductCart";
import { Label } from "@/components/ui/label";
import { SlidersHorizontal } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { useSearchParams } from "next/navigation";

interface Products {
  id: number;
  name: string;
  price: number;
  collection: string;
  alert: string;
  description: string;
  imageUrl: string;
  rating: string;
}

function ProductList() {
  const [products, setProducts] = useState<Products[]>([]);
  const [filters, setFilters] = useState({
    priceRange: [0, 5000],
    rating: "all",
    collection: "all",
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
               


  useEffect(() => {
    setLoading(true);
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to fetch products. Please try again later.");
        setLoading(false);
      });
  }, []);

  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    filtered = filtered.filter(
      (product) =>
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1]
    );

    if (filters.rating !== "all") {
      filtered = filtered.filter(
        (product) => parseFloat(product.rating) >= parseFloat(filters.rating)
      );
    }

    if (filters.collection !== "all") {
      filtered = filtered.filter((product) =>
        product.collection
          .toLowerCase()
          .includes(filters.collection.toLowerCase())
      );
    }

    filtered = filtered.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );

    return filtered;
  }, [filters, products, search]);

  const handleFilterChange = (key: string, value: number[] | string) => {
    setFilters((prevFilters) => ({ ...prevFilters, [key]: value }));
  };

  return (
    <div className="max-w-screen-xl mx-auto pt-20 px-4">
      <h1 className="text-4xl font-bold text-center">All Products</h1>
      {error && <p className="text-red-500">{error}</p>}
      <div className="flex md:flex-row flex-col items-start gap-6 my-6">
        <div className="flex flex-col gap-6 md:w-1/3 w-full px-4">
          <div className="flex gap-x-2">
            <SlidersHorizontal className="w-6" />
            <h1 className="text-xl font-semibold">Filters</h1>
          </div>
          <div className="flex flex-col gap-3">
            <Label className="block font-semibold">Price Range:</Label>
            <input
              type="range"
              min={1000}
              max={5000}
              step={100}
              className=""
              value={filters.priceRange[1]}
              onChange={(e) =>
                handleFilterChange("priceRange", [0, parseInt(e.target.value)])
              }
            />
            <span>Up to {filters.priceRange[1]} PKR</span>
          </div>

          <div className="flex flex-col gap-2">
            <Label className="font-semibold">Rating:</Label>
            <select
              value={filters.rating}
              onChange={(e) => handleFilterChange("rating", e.target.value)}
              className="border p-1"
            >
              <option value="all">All</option>
              <option value="4.0">4.0+</option>
              <option value="4.5">4.5+</option>
              <option value="5.0">5.0</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="block font-semibold">Collection:</label>
            <select
              value={filters.collection}
              onChange={(e) => handleFilterChange("collection", e.target.value)}
              className="border p-1"
            >
              <option value="all">All</option>
              <option value="one-piece">One-Piece</option>
              <option value="two-piece">Two-Piece</option>
              <option value="three-piece">Three-Piece</option>
            </select>
          </div>
        </div>

        <div className="w-full">
          {loading ? (
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 px-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <div className="flex flex-col w-full" key={index}>
                  <Skeleton
                    key={index}
                    className="h-[290px] w-[290px] rounded-xl mb-2"
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
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 px-4 gap-6 ">
              {filteredProducts.map((product, index) => (
                <div key={index}>
                  <ProductCart products={product} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default function ProductsPage() {
  return (
    <Suspense fallback={<div>Loading products...</div>}>
      <ProductList />
    </Suspense>
  );
}