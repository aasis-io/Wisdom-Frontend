import { Star } from "lucide-react";

const reviews = [
  {
    name: "James Walker",
    role: "Everest Base Camp Trekker",
    image: "https://i.pravatar.cc/150?img=12",
    rating: 5,
    review:
      "From planning to the final descent, everything was flawless. The guides were knowledgeable, patient, and genuinely cared about our safety and experience. This was more than a trek — it was a lifetime memory.",
  },
  {
    name: "Sophie Laurent",
    role: "Adventure Traveler · France",
    image: "https://i.pravatar.cc/150?img=32",
    rating: 5,
    review:
      "Exceptional service and professionalism. Every detail was thoughtfully handled, allowing us to truly enjoy the mountains without stress. I felt safe, supported, and inspired throughout the journey.",
  },
  {
    name: "Michael Chen",
    role: "High-Altitude Hiker",
    image: "https://i.pravatar.cc/150?img=56",
    rating: 5,
    review:
      "I’ve trekked in many countries, but this experience stands out. The team’s local knowledge, warmth, and organization were simply outstanding. Highly recommended for serious trekkers.",
  },
];

export default function ReviewsSection() {
  return (
    <section className="relative bg-white py-12 overflow-hidden">
      {/* BACKGROUND PATTERN */}
      <div
        aria-hidden="true"
        className="
      pointer-events-none
      absolute inset-0
      z-0
      opacity-[0.06]
      bg-[radial-gradient(#000_1px,transparent_1px)]
      bg-[length:24px_24px]
    "
      />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="mb-8 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-amber-500">
            Client Stories
          </span>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Real experiences from travelers who trusted us with their Himalayan
            journey.
          </p>
        </div>

        {/* REVIEWS GRID */}
        <div
          className="
  -mx-6 px-6
  flex gap-6 overflow-x-auto pb-12
  snap-x snap-mandatory
  sm:grid sm:gap-8 sm:overflow-visible sm:px-0 sm:mx-0
  sm:grid-cols-2
  lg:grid-cols-3
"
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="
              group relative
              min-w-[85%] snap-center
              rounded-3xl border border-slate-100 bg-white p-8
              shadow-[0_26px_32px_rgba(0,0,0,0.06)]
              transition-all duration-300
              hover:-translate-y-2
              sm:min-w-0
            "
            >
              {/* QUOTE DECOR */}
              <span className="absolute right-6 top-6 text-6xl font-serif text-slate-100 group-hover:text-amber-100 transition">
                “
              </span>

              {/* STARS */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* REVIEW TEXT */}
              <p className="relative z-10 text-slate-700 leading-relaxed">
                {review.review}
              </p>

              {/* USER */}
              <div className="mt-8 flex items-center gap-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-amber-400/30"
                />
                <div>
                  <p className="font-semibold text-slate-900">{review.name}</p>
                  <p className="text-sm text-slate-500">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-6 text-center">
          <button className="rounded-full border border-slate-300 px-8 py-3 text-sm font-semibold text-slate-700 transition hover:border-amber-500 hover:text-amber-600">
            Read All Reviews
          </button>
        </div>
      </div>
    </section>
  );
}
