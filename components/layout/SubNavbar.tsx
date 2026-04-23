"use client";

const categories = [
  "All",
  "Today's Deals",
  "Customer Service",
  "Registry",
  "Gift Cards",
  "Sell",
  "Electronics",
  "Fashion",
  "Home",
];

export default function SubNavbar() {
  return (
    <div className="bg-[#232f3e] text-white text-sm">
      <div className="flex items-center gap-4 px-4 py-2 overflow-x-auto">
        {categories.map((item) => (
          <span
            key={item}
            className="whitespace-nowrap cursor-pointer hover:underline"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}