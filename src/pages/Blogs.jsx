import { ChevronRight } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

// TODO: Replace this with API call when backend is ready
// const fetchBlogs = async () => {
//   const response = await fetch('/api/blogs');
//   const data = await response.json();
//   return data;
// };

// Sample data - will be replaced with API call
const allBlogs = [
  {
    id: 1,
    slug: "advancing-policy-through-evidence-based-research",
    title: "Advancing Policy Through Evidence-Based Research",
    tag: "Research",
    date: "March 12, 2025",
    description:
      "Explore how WAARC leverages rigorous research to inform policy decisions and institutional development across Nepal.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
  {
    id: 2,
    slug: "capacity-building-in-public-institutions",
    title: "Capacity Building in Public Institutions",
    tag: "Consulting",
    date: "February 25, 2025",
    description:
      "Insights into our consulting initiatives that strengthen organizational capacities and foster sustainable growth.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600",
  },
  {
    id: 3,
    slug: "trends-in-education-and-knowledge-development",
    title: "Trends in Education and Knowledge Development",
    tag: "Insights",
    date: "January 30, 2025",
    description:
      "A look at emerging educational practices and knowledge management strategies shaping the future of learning.",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174",
  },
  {
    id: 4,
    slug: "digital-transformation-in-government-services",
    title: "Digital Transformation in Government Services",
    tag: "Technology",
    date: "December 18, 2024",
    description:
      "Examining the role of digital innovation in modernizing public sector service delivery and governance.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
  },
  {
    id: 5,
    slug: "sustainable-development-goals-progress-and-challenges",
    title: "Sustainable Development Goals: Progress and Challenges",
    tag: "Research",
    date: "November 22, 2024",
    description:
      "An analysis of Nepal's journey toward achieving the SDGs and the key challenges that lie ahead.",
    image: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0",
  },
  {
    id: 6,
    slug: "leadership-development-for-21st-century",
    title: "Leadership Development for the 21st Century",
    tag: "Consulting",
    date: "October 15, 2024",
    description:
      "Strategies for cultivating effective leadership in rapidly changing organizational environments.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
];

export default function Blogs() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [loading, setLoading] = useState(false);

  // TODO: When backend is ready, replace the sample data loading with:
  // useEffect(() => {
  //   const loadBlogs = async () => {
  //     setLoading(true);
  //     const data = await fetchBlogs();
  //     setAllBlogs(data);
  //     setLoading(false);
  //   };
  //   loadBlogs();
  // }, []);

  const loadMore = () => {
    setLoading(true);

    // Simulate API call - replace with actual pagination when backend is ready
    // const loadMoreBlogs = async () => {
    //   const response = await fetch(`/api/blogs?page=${nextPage}`);
    //   const data = await response.json();
    //   setBlogs([...blogs, ...data]);
    // };

    setTimeout(() => {
      setVisibleCount((prev) => prev + 3);
      setLoading(false);
    }, 1500);
  };

  const blogs = allBlogs.slice(0, visibleCount);
  const hasMore = visibleCount < allBlogs.length;

  return (
    <section className="bg-white">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link to={"/"} className="hover:text-slate-900">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link to={"/blogs"} className="hover:text-slate-900">
              Blogs
            </Link>
          </div>
        </div>
      </section>
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          {/* HEADER */}
          <div className="mb-14 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-yellow-500">
              Insights & Research
            </span>
            <h1 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Knowledge, Research & Consultancy
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              WAARC delivers evidence-based research, professional insights, and
              consultancy services to empower organizations and individuals.
            </p>
          </div>

          {/* BLOG GRID */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <Link
                key={blog.id}
                to={`/blogs/${blog.slug}`}
                className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* IMAGE */}
                <div className="relative h-56 overflow-hidden p-4 bg-gray-50">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-full w-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-7">
                  {/* META */}
                  <div className="mb-3 flex items-center gap-3 text-xs">
                    <span className="rounded-full bg-yellow-400 px-3 py-1 font-semibold text-white">
                      {blog.tag}
                    </span>
                    <span className="text-gray-500">{blog.date}</span>
                  </div>

                  {/* TITLE */}
                  <h3 className="mb-3 text-lg font-semibold leading-snug text-[#17254E] transition group-hover:text-yellow-500">
                    {blog.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-sm leading-relaxed text-gray-600">
                    {blog.description}
                  </p>

                  {/* READ MORE */}
                  <div className="mt-6">
                    <span className="inline-flex items-center text-sm font-semibold text-[#17254E] transition group-hover:text-yellow-500">
                      Read more
                      <svg
                        className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* LOAD MORE BUTTON */}
          {hasMore && (
            <div className="mt-12 text-center">
              <button
                onClick={loadMore}
                disabled={loading}
                className="inline-flex items-center justify-center rounded-full bg-[#17254E] px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <svg
                      className="mr-2 h-5 w-5 animate-spin"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Loading...
                  </>
                ) : (
                  "Load More"
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
