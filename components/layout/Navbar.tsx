"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <header className="bg-[#131921] text-white">
      <div className="flex items-center justify-between px-4 py-2 gap-4">
        
        {/* LOGO */}
        <Link href="/" className="text-xl font-bold">
          Amazon
        </Link>

        {/* SEARCH */}
        <div className="flex flex-1 max-w-2xl">
          <input
            type="text"
            placeholder="Search Amazon"
            className="w-full px-4 py-2 text-black outline-none"
          />
          <button className="bg-yellow-400 px-4 text-black font-semibold">
            Search
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-6 text-sm">
          
          <div className="flex flex-col cursor-pointer">
            <span className="text-xs">Hello, sign in</span>
            <span className="font-bold">Account & Lists</span>
          </div>

          <div className="flex flex-col cursor-pointer">
            <span className="text-xs">Returns</span>
            <span className="font-bold">& Orders</span>
          </div>

          <div className="flex items-center gap-2 cursor-pointer">
            <ShoppingCart size={24} />
            <span className="font-bold">Cart</span>
          </div>

        </div>
      </div>
    </header>
  );
}