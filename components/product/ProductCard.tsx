import Link from "next/link";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
};

const products: Product[] = [
  {
    id: 1,
    title: "iPhone 15 Pro",
    price: 999,
    image:
      "https://m.media-amazon.com/images/I/61l9ppRIiqL._AC_UF1000,1000_QL80_.jpg",
    description: "Latest Apple iPhone with A17 chip.",
  },
  {
    id: 2,
    title: "Samsung Galaxy S23",
    price: 899,
    image:
      "https://m.media-amazon.com/images/I/61VfL-aiToL._AC_UF1000,1000_QL80_.jpg",
    description: "Powerful Android flagship phone.",
  },
];

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === Number(params.id));

  if (!product) {
    return <div className="p-10">Product not found</div>;
  }

  return (
    <div className="p-6 bg-white min-h-screen">
      <div className="grid md:grid-cols-2 gap-10">
        {/* IMAGE */}
        <div className="flex justify-center">
          <img src={product.image} className="max-h-[400px] object-contain" />
        </div>

        {/* INFO */}
        <div>
          <h1 className="text-2xl font-bold">{product.title}</h1>

          <p className="text-xl text-red-500 mt-4">${product.price}</p>

          <p className="mt-4 text-gray-600">{product.description}</p>

          <button className="mt-6 bg-yellow-400 px-6 py-3 rounded hover:bg-yellow-500">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
