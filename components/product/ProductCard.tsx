type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white p-4 rounded-md shadow hover:shadow-lg transition">
      
      {/* IMAGE */}
      <div className="h-48 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain"
        />
      </div>

      {/* TITLE */}
      <h2 className="text-sm mt-4 line-clamp-2">{product.title}</h2>

      {/* PRICE */}
      <p className="font-bold mt-2">${product.price}</p>

      {/* BUTTON */}
      <button className="mt-4 w-full bg-yellow-400 py-2 rounded hover:bg-yellow-500">
        Add to Cart
      </button>
    </div>
  );
}