import products from "@/data/product";
import ProductCart from "@/components/ProductCart";

export default function CollectionsPage({
  params: { collection },
}: {
  params: { collection: string };
}) {
  const product = products.filter((p) => p.collection === collection);

  return (
    <div className="pt-24 px-4">
      <h1 className="text-4xl font-bold text-center pb-4">
        {collection.replace("-", " ").toUpperCase()} COLLECTION
      </h1>
      <div className="max-w-screen-2xl mx-auto ">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 px-7 gap-6 my-6">
          {product.map((p, index) => (
            <div className="" key={index}>
              
                <ProductCart products={p} />
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
