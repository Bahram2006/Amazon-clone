import ProductCard from "@/components/product/ProductCard";

const products = [
  {
    id: 1,
    title: "iPhone 15 Pro",
    price: 999,
    image: "https://m.media-amazon.com/images/I/61l9ppRIiqL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 2,
    title: "Samsung Galaxy S23",
    price: 899,
    image: "https://m.media-amazon.com/images/I/61VfL-aiToL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 3,
    title: "Headphones",
    price: 199,
    image: "https://m.media-amazon.com/images/I/71g5fmdr1XL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 4,
    title: "Gaming Mouse",
    price: 59,
    image: "https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_UF1000,1000_QL80_.jpg",
  },
];

export default function Home() {
  return (
    <main className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}