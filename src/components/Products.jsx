// Import Plus icon from lucide-react
import { Plus } from "lucide-react";

// Static product list data
const products = [
  {
    id: 1,
    title: "Mint flavor chocolate",
    price: "৳399.00",
    image: "/image/chocolate1.png",
  },
  {
    id: 2,
    title: "Mint flavor chocolate",
    price: "৳399.00",
    image: "/image/chocolate2.png",
  },
  {
    id: 3,
    title: "Mint flavor chocolate",
    price: "৳399.00",
    image: "/image/chocolate3.png",
  },
  {
    id: 4,
    title: "Mint flavor chocolate",
    price: "৳399.00",
    image: "/image/chocolate3.png",
  },
  {
    id: 5,
    title: "Mint flavor chocolate",
    price: "৳399.00",
    image: "/image/chocolate2.png",
  },
  {
    id: 6,
    title: "Mint flavor chocolate",
    price: "৳399.00",
    image: "/image/chocolate1.png",
  },
];

// Main Products section component
export default function Products() {
  return (
    // Products section wrapper
    <section className="w-full  px-3 pb-30 sm:px-4 md:px-5 lg:px-6  overflow-hidden">
      {/* Main container */}
      <div className="relative mx-auto w-full max-w-[1450px]">
        {/* Section heading */}
        <div className="mb-8 px-2 sm:px-1">
          <h2 className="text-[26px] sm:text-[32px] font-bold text-[#444]">
            Our Products
          </h2>
          <p className="mt-1 text-[15px] sm:text-[18px] text-[#4b4b4b]">
            Fuel Your Workouts with Protein-Packed Nutrition
          </p>
        </div>

        {/* Product cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Left bottom decorative dots */}
        <div className="absolute left-0 bottom-[-120px] hidden md:grid grid-cols-3 gap-4 ">
          {Array.from({ length: 12 }).map((_, i) => (
            <div>
              <img
                key={i}
                src="/icon/p.png"
                alt="polygon"
                className="w-5 h-3 bg-gray-300 rounded-b-full"
              />
            </div>
          ))}
        </div>

        {/* Right bottom decorative dots */}
        <div className="absolute right-20 bottom-[-120px] hidden md:grid grid-cols-3 gap-3 ">
          {Array.from({ length: 12 }).map((_, i) => (
            <div>
              <img
                key={i}
                src="/icon/p.png"
                alt="polygon"
                className="w-3 h-5 bg-gray-300 rounded-l-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Reusable single product card component
function ProductCard({ product }) {
  return (
    // Product card wrapper
    <div className="rounded-3xl bg-black p-5  shadow-lg">
      {/* Product image container */}
      <div
        className={`relative rounded-[24px] overflow-hidden min-h-[240px] sm:min-h-[270px] md:min-h-[290px] lg:min-h-[300px] flex flex-col items-center justify-center`}
      >
        {/* Product image */}
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-[100%] object-contain rounded-2xl"
        />

        {/* Product content area */}
        <div className="mt-10 flex  items-center justify-between gap-40">
          {/* Product title and pricing */}
          <div>
            <h3 className="text-white text-xl sm:text-[20px] leading-snug">
              {product.title}
            </h3>

            {/* Price and rating */}
            <div className="mt-1 flex items-center gap-3 flex-wrap">
              <span className="text-white text-[20px] sm:text-[24px] font-medium">
                {product.price}
              </span>
              <div className="flex items-center justify-center">
                <span className="text-[#57B233] text-[16px] tracking-[2px]">
                  ★★★★
                </span>
                <span className="text-gray-400 text-[16px] tracking-[2px]">
                  ★
                </span>
              </div>
            </div>
          </div>

          {/* Add to cart button */}
          <button className="flex h-[54px] w-[54px] sm:h-[58px] sm:w-[58px] shrink-0 items-center justify-center rounded-[14px] bg-[#57B233] text-white transition hover:scale-105">
            <Plus size={28} strokeWidth={2.3} />
          </button>
        </div>
      </div>
    </div>
  );
}