import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Education and Study Abroad Advisory",
    description: "Guiding students towards the right education and global opportunities",
    image: "/images/education.webp",
    path: "/services/study-advisory",
    width: 600,
    height: 400,
  },
  {
    title: "Research",
    description: "Research-Driven Insights for Policy, Education, and Development",
    image: "/images/research.webp",
    path: "/services/research",
    width: 600,
    height: 400,
  },
];

export default function Services() {
  return (
    <section className="py-6">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-lg font-semibold uppercase tracking-wide text-[#1e2a4a]">Our Services</h2>
          <p className="mt-3 text-base text-gray-600">
            Comprehensive research and consultancy services tailored to informed decision-making.
          </p>
        </div>

        <div className="mt-10 grid gap-8 grid-cols-1 lg:grid-cols-2 min-h-[420px]">
          {services.map((service, idx) => (
            <Link key={idx} href={service.path} className="block group">
              <div className="relative w-full pt-[66.66%] bg-gray-100 overflow-hidden rounded-3xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  priority={idx === 0}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-8 pb-10">
                  <h3 className="text-xl md:text-2xl font-bold text-white">{service.title}</h3>
                  <p className="mt-2 max-w-md text-gray-200">{service.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center gap-3">
          <span className="h-2 w-10 rounded-full bg-[#f2b84b]" />
          <span className="h-2 w-2 rounded-full bg-gray-300" />
          <span className="h-2 w-2 rounded-full bg-gray-300" />
        </div>
      </div>
    </section>
  );
}
