import ProductCard from "@/components/product-card";

function ProductGrid({ products }) {
  return (
    <>
      <h2 className="text-5xl md:text-8xl lg:text-9xl font-Staatliches font-bold">
        Our Collection
      </h2>
      <div>
        <button className="rounded-full border-4 border-black mr-1 md:mr-5 py-1 px-2 md:py-10 md:px-16 text-xl md:text-3xl lg:text-4xl font-Staatliches font-bold cursor-pointer mb-2">
          Winter Collection
        </button>
        <button className="rounded-full border-4 border-black mr-1 md:mr-5 py-1 px-2 md:py-10 md:px-16 text-xl md:text-3xl lg:text-4xl font-Staatliches font-bold cursor-pointer mb-2">
          New arrival
        </button>
      </div>
      <div className="gap-8 grid sm:grid-cols-2 lg:grid-cols-3">
        {products.map(ProductCard)}
      </div>
    </>
  );
}

export default ProductGrid;
