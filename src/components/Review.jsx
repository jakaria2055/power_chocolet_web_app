// Import icon from lucide-react
import { StarHalf } from "lucide-react";

// Static testimonial data
const testimonials = [
  {
    id: 1,
    title: "The Best Training Program!",
    body: "The boxing program helped me build confidence, strength, and endurance. The coaches are supportive and push you to be your best. Highly recommend for anyone serious about their fitness!",
    name: "Stive Meloni",
    role: "Ceo Of Miko",
    rating: 4,
    img: "/image/profile_g1.png",
  },
  {
    id: 2,
    title: "The Best Training Program!",
    body: "The boxing program helped me build confidence, strength, and endurance. The coaches are supportive and push you to be your best. Highly recommend for anyone serious about their fitness!",
    name: "Stive Meloni",
    role: "Ceo Of Miko",
    rating: 4.5,
    img: "/image/profile_g2.png",
  },
  {
    id: 3,
    title: "The Best Training Program!",
    body: "The boxing program helped me build confidence, strength, and endurance. The coaches are supportive and push you to be your best. Highly recommend for anyone serious about their fitness!",
    name: "Stive Meloni",
    role: "Ceo Of Miko",
    rating: 4,
    img: "/image/profile_m1.jpg",
  },
  {
    id: 4,
    title: "The Best Training Program!",
    body: "The boxing program helped me build confidence, strength, and endurance. The coaches are supportive and push you to be your best. Highly recommend for anyone serious about their fitness!",
    name: "Stive Meloni",
    role: "Ceo Of Miko",
    rating: 4.5,
    img: "/image/profile_m2.jpg",
  },
  {
    id: 5,
    title: "The Best Training Program!",
    body: "The boxing program helped me build confidence, strength, and endurance. The coaches are supportive and push you to be your best. Highly recommend for anyone serious about their fitness!",
    name: "Stive Meloni",
    role: "Ceo Of Miko",
    rating: 4,
    img: "/image/profile_g2.png",
  },
  {
    id: 6,
    title: "The Best Training Program!",
    body: "The boxing program helped me build confidence, strength, and endurance. The coaches are supportive and push you to be your best. Highly recommend for anyone serious about their fitness!",
    name: "Stive Meloni",
    role: "Ceo Of Miko",
    rating: 4.5,
    img: "/image/profile_m1.jpg",
  },
];

// Star rating component
function StarRating({ rating }) {
  return (
    // Rating wrapper
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => {
        // Check full star
        const filled = star <= Math.floor(rating);

        // Check half star
        const half = !filled && star - 0.5 <= rating;

        return (
          <span
            key={star}
            className={`text-sm ${filled || half ? "text-amber-400" : "text-neutral-600"}`}
          >
            ★
          </span>
        );
      })}

      {/* Numeric rating */}
      <span className="text-xs text-neutral-400 ml-1">({rating})</span>
    </div>
  );
}

// Single testimonial card component
function TestimonialCard({ title, body, name, role, rating, img }) {
  return (
    // Card wrapper
    <div className="bg-black w-[430px] rounded-2xl p-6 flex flex-col gap-3 h-[280px]">
      {/* Testimonial title */}
      <h3 className="text-white font-semibold text-lg leading-snug">{title}</h3>

      {/* Testimonial message */}
      <p className="text-neutral-400 text-sm leading-relaxed text-justify mb-5">
        {body}
      </p>

      {/* Client info section */}
      <div className="flex items-center gap-3">
        {/* Client image */}
        <img src={img} alt="profile_pic" className="w-15 h-15 rounded-full" />

        {/* Client name and role */}
        <div className="flex-1 min-w-0">
          <p className="text-white text-lg font-medium leading-tight truncate">
            {name}
          </p>
          <p className="text-neutral-500 text-sm leading-tight">{role}</p>
        </div>

        {/* Rating display */}
        <div className="flex items-center justify-center">
          <StarRating rating={rating} />
        </div>
      </div>
    </div>
  );
}

// Main review section component
export default function Review() {
  return (
    // Review section wrapper
    <section className="w-full px-4 py-5 sm:px-6 lg:px-10 pb-15">
      <div className="relative">
        {/* Top decorative polygon dots */}
        <div className="absolute -right-10 -top-5 hidden md:grid grid-cols-3 gap-4  ">
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

        {/* Section heading */}
        <div className="mb-8 px-2 ml-2 sm:px-1">
          <h2 className="text-[26px] sm:text-[32px] font-bold text-[#444]">
            What Our Clients Are Saying
          </h2>
          <p className="mt-1 text-[15px] sm:text-[18px] text-[#4b4b4b]">
            Real Stories, Real Results – Hear From Our Athletes
          </p>
        </div>

        {/* Testimonials container */}
        <div className="bg-neutral-200 rounded-4xl p-5 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} {...t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}