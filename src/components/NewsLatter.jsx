import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) return;
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  return (
    <section className="relative w-full px-4 py-10 sm:px-6 lg:px-10 flex justify-center">
      <div className="absolute right-10 -top-5 hidden md:grid grid-cols-3 gap-4  ">
        {Array.from({ length: 10 }).map((_, i) => (
          <div>
            <img
              key={i}
              src="/icon/p.png"
              alt="polygon"
              className="w-2 h-4 bg-gray-400/50 rounded-l-full rounded-r-4xl"
            />
          </div>
        ))}
      </div>

      <div className="bg-black rounded-3xl w-6xl px-6 py-14 sm:px-12 lg:px-20 text-center">
        {/* Eyebrow */}
        <p className="text-white text-sm sm:text-base font-normal mb-3">
          Join our community
        </p>

        {/* Heading */}
        <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
          Subscribe to our{" "}
          <span className="relative inline-block">newsletter</span>
        </h2>

        {/* Description */}
        <p className="text-neutral-400 text-sm sm:text-base max-w-3xl mx-auto mb-10 leading-relaxed">
          Join our community of fitness enthusiasts and athletes! By subscribing
          to our newsletter, you’ll receive expert training tips, nutrition
          guides, exclusive discounts, and the latest news on upcoming events
          and products.
        </p>

        {/* Input + Button */}
        <div className="flex items-center max-w-lg mx-auto bg-neutral-950 border-2 border-white  rounded-full px-3 py-2 gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
            placeholder="Enter Your Email"
            className="flex-1 bg-transparent text-white placeholder:text-white/80 text-sm sm:text-base outline-none px-3 py-1"
          />
          <button
            onClick={handleSubscribe}
            className="bg-white text-black text-sm sm:text-base font-semibold px-6 py-2.5 rounded-full hover:bg-neutral-200 transition-colors duration-200 whitespace-nowrap flex-shrink-0"
          >
            SUBSCRIBE
          </button>
        </div>
      </div>

      <div className="absolute left-10 -bottom-10 hidden md:grid grid-cols-3 gap-4 space-x-5  ">
        {Array.from({ length: 10 }).map((_, i) => (
          <div>
            <img
              key={i}
              src="/icon/p.png"
              alt="polygon"
              className="w-4 h-2 bg-gray-400/50 rounded-t-full rounded-b-4xl"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
