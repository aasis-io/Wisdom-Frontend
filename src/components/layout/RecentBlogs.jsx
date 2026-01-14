import { Link } from "react-router-dom";

// TODO: Replace this with API call when backend is ready
// const fetchRecentBlogs = async () => {
//   const response = await fetch('/api/blogs/recent');
//   const data = await response.json();
//   return data;
// };

// Sample data - will be replaced with API call
const recentBlogsData = {
  featured: {
    id: 1,
    slug: "agile-development-projects-and-usability",
    title: "Agile Development Projects and Usability",
    date: "March 13, 2014",
    excerpt:
      "Agile methods aim to overcome usability barriers in traditional development, but pose new threats to user experience quality.",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174",
  },
  regular: [
    {
      id: 2,
      slug: "three-pillars-of-user-delight",
      title: "Three Pillars of User Delight",
      date: "November 16, 2014",
      excerpt:
        "Delight can be experienced viscerally, behaviourally, and reflectively. A great design is ...",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    },
    {
      id: 3,
      slug: "ux-mapping-methods",
      title: "UX Mapping Methods",
      date: "September 24, 2017",
      excerpt:
        "Visual-design principles can be applied consistently throughout the process of creating a polished UX map...",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    },
  ],
};

export function RecentBlogs() {
  // TODO: When backend is ready, uncomment this:
  // const [blogs, setBlogs] = useState(null);
  // const [loading, setLoading] = useState(true);
  //
  // useEffect(() => {
  //   const loadRecentBlogs = async () => {
  //     setLoading(true);
  //     const data = await fetchRecentBlogs();
  //     setBlogs(data);
  //     setLoading(false);
  //   };
  //   loadRecentBlogs();
  // }, []);
  //
  // if (loading) return <div>Loading...</div>;

  // For now, use sample data directly
  const blogs = recentBlogsData;

  return (
    <section className="mx-auto max-w-7xl px-6 pb-12">
      <h2 className="mb-10 text-2xl font-semibold text-gray-900">
        Our recent blogs
      </h2>
      <div className="grid gap-12 lg:grid-cols-2">
        {/* LEFT COLUMN - Regular Blogs */}
        <div className="space-y-10 order-2 lg:order-1">
          {blogs.regular.map((blog) => (
            <Link
              key={blog.id}
              to={`/blogs/${blog.slug}`}
              className="flex gap-6 group"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="h-28 w-40 lg:h-40 lg:w-56 rounded-xl object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div>
                <p className="text-sm text-orange-400">{blog.date}</p>
                <h3 className="mt-1 font-semibold text-gray-900 group-hover:text-yellow-500 transition">
                  {blog.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">{blog.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* RIGHT COLUMN – FEATURED */}
        <Link
          to={`/blogs/${blogs.featured.slug}`}
          className="order-1 lg:order-2 group"
        >
          <img
            src={blogs.featured.image}
            alt={blogs.featured.title}
            className="h-72 w-full rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <p className="mt-4 text-sm text-orange-400">{blogs.featured.date}</p>
          <h3 className="mt-2 text-xl font-semibold text-gray-900 group-hover:text-yellow-500 transition">
            {blogs.featured.title}
          </h3>
          <p className="mt-3 text-gray-500">{blogs.featured.excerpt}</p>
        </Link>
      </div>
    </section>
  );
}
