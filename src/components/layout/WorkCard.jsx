import { FiArrowUpRight } from "react-icons/fi";

function WorkCard({ image, category, title, description }) {
  return (
    <div
      className="
          group h-full bg-white
          rounded-lg
          transition-all duration-300
          hover:-translate-y-1
          shadow-[0_6px_20px_rgba(0,0,0,0.08)]
         p-4 border border-gray-50
        "
    >
      {/* Image */}
      <div className="overflow-hidden rounded-t-lg">
        <img
          src={image}
          alt={title}
          className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex min-h-[210px] flex-col justify-between p-6">
        <div>
          <span className="text-sm font-semibold text-[#f4b740]">
            {category}
          </span>

          <h3 className="mt-2 text-lg font-bold text-[#1e2a4a]">{title}</h3>

          <p className="mt-3 text-sm leading-relaxed text-gray-600">
            {description}
          </p>
        </div>

        {/* Arrow */}
        <div className="mt-6 flex items-center justify-between">
          {/* Get Details Button */}
          <button className="rounded-full border border-[#1e2a4a] px-4 py-1.5 text-sm font-medium text-[#1e2a4a] transition hover:bg-[#1e2a4a] hover:text-white">
            Get Details
          </button>

          {/* Arrow Icon */}
          <FiArrowUpRight
            className="text-lg text-[#1e2a4a] transition-transform duration-300
    group-hover:rotate-45"
          />
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
