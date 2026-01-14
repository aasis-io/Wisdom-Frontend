import {
  ArrowLeft,
  BookmarkPlus,
  Calendar,
  CheckCircle,
  ChevronRight,
  Clock,
  Facebook,
  Link2,
  Linkedin,
  Tag,
  Twitter,
} from "lucide-react";
import { useState } from "react";

const primaryColor = "#17254e";
const secondaryColor = "#fbbf24";

// Sample blog data - this will be replaced with API call
const sampleBlogData = {
  id: "sustainable-development-monitoring-evaluation",
  title: "The Future of Monitoring and Evaluation in Sustainable Development",
  subtitle:
    "How data-driven approaches are transforming development impact measurement",
  author: {
    name: "Dr. Sarah Mitchell",
    title: "Senior M&E Specialist",
    bio: "Dr. Mitchell has over 15 years of experience in monitoring and evaluation across Africa and Asia, specializing in education and health programs.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
  },
  publishDate: "2025-01-05",
  readTime: "8 min read",
  category: "Monitoring & Evaluation",
  tags: ["M&E", "Impact Measurement", "Data Analytics", "SDGs", "Development"],
  featuredImage:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600",

  content: {
    introduction: [
      "In an era where accountability and evidence-based decision-making are paramount, monitoring and evaluation (M&E) has evolved from a compliance exercise to a strategic tool for maximizing development impact. Organizations worldwide are embracing innovative approaches to measure, learn, and adapt their interventions.",
      "This transformation is driven by technological advancements, increased donor expectations, and a growing recognition that what gets measured gets managed. But what does the future hold for M&E in the development sector?",
    ],

    sections: [
      {
        type: "heading",
        level: 2,
        content: "The Evolution of M&E Practices",
      },
      {
        type: "paragraph",
        content:
          "Traditional M&E approaches focused primarily on output tracking and compliance reporting. Today's M&E systems are designed to capture outcomes, understand attribution, and generate actionable insights that inform program adaptation and strategic decision-making.",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
        caption:
          "Modern M&E dashboards provide real-time insights into program performance",
        alt: "Data analytics dashboard",
      },
      {
        type: "paragraph",
        content:
          "The shift from traditional to adaptive M&E represents a fundamental change in how organizations approach learning and accountability. Rather than viewing M&E as a retrospective exercise, leading organizations now integrate it into their program design and implementation processes.",
      },

      {
        type: "heading",
        level: 2,
        content: "Key Trends Shaping the Future",
      },
      {
        type: "paragraph",
        content:
          "Several interconnected trends are reshaping the M&E landscape. Understanding these trends is crucial for organizations seeking to strengthen their measurement systems:",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Real-time data collection using mobile technology and digital platforms",
          "Integration of big data and predictive analytics for forward-looking insights",
          "Participatory approaches that engage beneficiaries in the evaluation process",
          "Use of geospatial data and mapping for targeted interventions",
          "Artificial intelligence and machine learning for pattern recognition",
          "Blockchain technology for transparent and tamper-proof data management",
        ],
      },

      {
        type: "heading",
        level: 3,
        content: "Technology as an Enabler",
      },
      {
        type: "paragraph",
        content:
          "Technology has democratized data collection and analysis. Tools that were once accessible only to large organizations with substantial budgets are now available to even the smallest NGOs. Cloud-based platforms, mobile data collection apps, and open-source analytics tools have transformed the M&E landscape.",
      },
      {
        type: "quote",
        content:
          "The question is no longer whether we can collect data, but whether we can turn that data into meaningful insights that drive better decisions and ultimately, greater impact.",
        author:
          "Dr. James Chen, Director of Impact Measurement, Global Development Institute",
      },

      {
        type: "heading",
        level: 2,
        content: "Comparative Analysis: Traditional vs. Adaptive M&E",
      },
      {
        type: "table",
        headers: ["Aspect", "Traditional M&E", "Adaptive M&E"],
        rows: [
          ["Focus", "Compliance and reporting", "Learning and adaptation"],
          ["Timing", "End-of-project evaluation", "Continuous monitoring"],
          ["Data Use", "Retrospective analysis", "Real-time decision support"],
          ["Stakeholder Role", "Data subjects", "Active participants"],
          ["Flexibility", "Fixed indicators", "Evolving indicators"],
          [
            "Technology",
            "Paper-based or basic digital",
            "Advanced digital platforms",
          ],
        ],
      },

      {
        type: "heading",
        level: 2,
        content: "Building Effective M&E Systems",
      },
      {
        type: "paragraph",
        content:
          "Creating a robust M&E system requires careful planning and a clear understanding of organizational needs. Here's a step-by-step approach to developing an effective system:",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Define clear objectives and develop a theory of change",
          "Identify meaningful indicators aligned with your goals",
          "Select appropriate data collection methods and tools",
          "Build staff capacity and establish data quality protocols",
          "Create feedback loops for continuous learning",
          "Invest in data visualization and communication tools",
          "Establish a culture of evidence-based decision-making",
        ],
      },

      {
        type: "heading",
        level: 3,
        content: "The Role of Data Quality",
      },
      {
        type: "paragraph",
        content:
          "Data quality remains the foundation of credible M&E. Organizations must balance the need for comprehensive data with the practical constraints of data collection. This includes establishing clear data quality standards, implementing verification processes, and regularly auditing data collection procedures.",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200",
        caption:
          "Field data collection using mobile technology improves accuracy and timeliness",
        alt: "Field worker using mobile device",
      },

      {
        type: "heading",
        level: 2,
        content: "Challenges and Solutions",
      },
      {
        type: "paragraph",
        content:
          "Despite advances in M&E practices, organizations continue to face significant challenges. The most common obstacles include:",
      },
      {
        type: "callout",
        title: "Common M&E Challenges",
        content:
          "Limited budgets for M&E activities, inadequate staff capacity, resistance to data-driven decision-making, difficulty measuring long-term outcomes, and balancing donor requirements with organizational learning needs.",
      },
      {
        type: "paragraph",
        content:
          "Addressing these challenges requires a multifaceted approach that combines technical solutions with organizational change management. Successful organizations prioritize M&E in their budgets, invest in staff development, and cultivate leadership commitment to evidence-based practice.",
      },

      {
        type: "heading",
        level: 2,
        content: "Case Study: Transforming Education Outcomes",
      },
      {
        type: "paragraph",
        content:
          "A recent initiative in East Africa demonstrates the power of adaptive M&E. An education program serving 50,000 students implemented a real-time monitoring system that tracked learning outcomes, teacher performance, and resource utilization.",
      },
      {
        type: "paragraph",
        content:
          "By analyzing data monthly rather than annually, the program identified struggling schools early and provided targeted support. The result: a 35% improvement in learning outcomes within two years, compared to 12% in similar programs using traditional M&E approaches.",
      },

      {
        type: "heading",
        level: 2,
        content: "Looking Ahead: The Next Decade",
      },
      {
        type: "paragraph",
        content:
          "As we look to the future, several developments will likely shape M&E practice over the next decade. The integration of artificial intelligence will enable more sophisticated analysis of complex datasets, identifying patterns and correlations that humans might miss.",
      },
      {
        type: "paragraph",
        content:
          "Participatory approaches will become increasingly sophisticated, with beneficiaries not just providing data but actively participating in interpretation and decision-making. Mobile technology will enable even more granular data collection, while blockchain may provide new solutions for data security and verification.",
      },

      {
        type: "heading",
        level: 2,
        content: "Conclusion",
      },
      {
        type: "paragraph",
        content:
          "The future of M&E in sustainable development is bright. As technology advances and methodologies mature, organizations have unprecedented opportunities to understand their impact and improve their effectiveness. However, technology alone is not the answer.",
      },
      {
        type: "paragraph",
        content:
          "Success requires a commitment to learning, a willingness to adapt, and a culture that values evidence. Organizations that embrace these principles—while leveraging the tools and approaches available—will be best positioned to maximize their development impact in the years ahead.",
      },
    ],

    conclusion:
      "The transformation of M&E from a compliance exercise to a strategic tool represents one of the most significant shifts in development practice. By embracing innovation while maintaining rigor, organizations can build measurement systems that truly serve their mission of creating positive change.",
  },

  relatedPosts: [
    {
      id: "data-visualization-impact",
      title: "Data Visualization for Impact: Telling Stories with Numbers",
      category: "Data & Analytics",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400",
      date: "2024-12-28",
    },
    {
      id: "participatory-evaluation",
      title: "Participatory Evaluation: Engaging Communities in M&E",
      category: "Monitoring & Evaluation",
      image:
        "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=400",
      date: "2024-12-15",
    },
    {
      id: "technology-development",
      title: "Technology in Development: Opportunities and Challenges",
      category: "Innovation",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400",
      date: "2024-12-10",
    },
  ],
};

export default function BlogDetail() {
  const blogPost = sampleBlogData;
  const [copied, setCopied] = useState(false);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        blogPost.title
      )}&url=${encodeURIComponent(window.location.href)}`,
      "_blank"
    );
  };

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        window.location.href
      )}`,
      "_blank"
    );
  };

  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        window.location.href
      )}`,
      "_blank"
    );
  };

  const renderContent = (item, index) => {
    switch (item.type) {
      case "heading":
        const HeadingTag = `h${item.level}`;
        const headingClasses =
          item.level === 2
            ? "text-3xl font-bold text-slate-900 mt-12 mb-6"
            : "text-2xl font-bold text-slate-900 mt-10 mb-4";
        return (
          <HeadingTag key={index} className={headingClasses}>
            {item.content}
          </HeadingTag>
        );

      case "paragraph":
        return (
          <p
            key={index}
            className="text-base text-slate-700 leading-relaxed mb-6"
          >
            {item.content}
          </p>
        );

      case "image":
        return (
          <figure key={index} className="my-12">
            <img
              src={item.url}
              alt={item.alt}
              className="w-full rounded-2xl shadow-lg"
            />
            {item.caption && (
              <figcaption className="text-center text-sm text-slate-600 mt-4 italic">
                {item.caption}
              </figcaption>
            )}
          </figure>
        );

      case "list":
        const ListTag = item.ordered ? "ol" : "ul";
        const listClass = item.ordered
          ? "list-decimal list-inside space-y-3 my-6 ml-4"
          : "space-y-3 my-6";
        return (
          <ListTag key={index} className={listClass}>
            {item.items.map((listItem, i) => (
              <li
                key={i}
                className="text-base text-slate-700 leading-relaxed flex items-start gap-3"
              >
                {!item.ordered && (
                  <div
                    className="mt-2 h-2 w-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: secondaryColor }}
                  />
                )}
                <span className={item.ordered ? "" : "flex-1"}>{listItem}</span>
              </li>
            ))}
          </ListTag>
        );

      case "quote":
        return (
          <blockquote
            key={index}
            className="my-12 border-l-4 pl-8 py-4"
            style={{ borderColor: primaryColor }}
          >
            <p className="text-xl font-serif text-slate-800 italic leading-relaxed mb-4">
              "{item.content}"
            </p>
            {item.author && (
              <cite className="text-sm text-slate-600 not-italic font-semibold">
                — {item.author}
              </cite>
            )}
          </blockquote>
        );

      case "table":
        return (
          <div key={index} className="my-12 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr style={{ backgroundColor: `${primaryColor}10` }}>
                  {item.headers.map((header, i) => (
                    <th
                      key={i}
                      className="border border-slate-300 px-6 py-4 text-left font-semibold"
                      style={{ color: primaryColor }}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {item.rows.map((row, i) => (
                  <tr key={i} className="even:bg-slate-50">
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className="border border-slate-300 px-6 py-4 text-slate-700"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case "callout":
        return (
          <div
            key={index}
            className="my-10 rounded-2xl border-2 p-8"
            style={{
              borderColor: `${secondaryColor}60`,
              backgroundColor: `${secondaryColor}10`,
            }}
          >
            {item.title && (
              <h4
                className="text-xl font-bold mb-4"
                style={{ color: primaryColor }}
              >
                {item.title}
              </h4>
            )}
            <p className="text-base text-slate-800 leading-relaxed">
              {item.content}
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <a href="/" className="hover:text-slate-900">
              Home
            </a>
            <ChevronRight className="h-4 w-4" />
            <a href="/blog" className="hover:text-slate-900">
              Blog
            </a>
            <ChevronRight className="h-4 w-4" />
            <span className="text-slate-900">{blogPost.category}</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative">
        <div className="mx-auto max-w-4xl px-6 py-12 lg:py-16">
          {/* Category Badge */}
          <div className="mb-6">
            <span
              className="inline-block rounded-full px-4 py-2 text-sm font-semibold text-white"
              style={{ backgroundColor: primaryColor }}
            >
              {blogPost.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-slate-900 leading-tight lg:text-4xl">
            {blogPost.title}
          </h1>

          {/* Subtitle */}
          {blogPost.subtitle && (
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              {blogPost.subtitle}
            </p>
          )}

          {/* Meta Information */}
          <div className="mt-8 flex flex-wrap items-center gap-6 text-slate-600">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>
                {new Date(blogPost.publishDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>{blogPost.readTime}</span>
            </div>
          </div>

          {/* Author Info */}
          <div className="mt-8 flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <img
              src={blogPost.author.image}
              alt={blogPost.author.name}
              className="h-16 w-16 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold text-slate-900">
                {blogPost.author.name}
              </h3>
              <p className="text-sm text-slate-600">{blogPost.author.title}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="mx-auto max-w-6xl px-6 mb-16">
        <img
          src={blogPost.featuredImage}
          alt={blogPost.title}
          className="w-full rounded-3xl shadow-2xl"
        />
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-4xl px-6 pb-16">
        <div className="grid lg:grid-cols-12 gap-12 overflow-hidden">
          {/* Sidebar - Share Options */}
          <aside className="hidden lg:block lg:col-span-1">
            <div className="sticky top-8 space-y-4">
              <button
                onClick={shareOnTwitter}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-blue-100 hover:text-blue-600 transition"
                aria-label="Share on Twitter"
              >
                <Twitter className="h-5 w-5" />
              </button>
              <button
                onClick={shareOnLinkedIn}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-blue-100 hover:text-blue-700 transition"
                aria-label="Share on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </button>
              <button
                onClick={shareOnFacebook}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-blue-100 hover:text-blue-600 transition"
                aria-label="Share on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </button>
              <button
                onClick={copyLink}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition"
                aria-label="Copy link"
              >
                {copied ? (
                  <CheckCircle className="h-5 w-5 text-green-600" />
                ) : (
                  <Link2 className="h-5 w-5" />
                )}
              </button>
              <button
                className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition"
                aria-label="Bookmark"
              >
                <BookmarkPlus className="h-5 w-5" />
              </button>
            </div>
          </aside>

          {/* Article Content */}
          <article className="lg:col-span-11 min-w-0">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none">
              {blogPost.content.introduction.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base text-slate-700 leading-relaxed mb-6 first:text-lg first:font-medium"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Dynamic Content Sections */}
            <div className="mt-8">
              {blogPost.content.sections.map((section, index) =>
                renderContent(section, index)
              )}
            </div>

            {/* Conclusion */}
            {blogPost.content.conclusion && (
              <div
                className="mt-12 rounded-2xl p-8"
                style={{ backgroundColor: `${primaryColor}08` }}
              >
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ color: primaryColor }}
                >
                  Key Takeaway
                </h3>
                <p className="text-base text-slate-700 leading-relaxed">
                  {blogPost.content.conclusion}
                </p>
              </div>
            )}

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <div className="flex items-center gap-2 flex-wrap">
                <Tag className="h-5 w-5 text-slate-500" />
                {blogPost.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700 hover:bg-slate-200 transition cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <div className="flex items-start gap-6">
                <img
                  src={blogPost.author.image}
                  alt={blogPost.author.name}
                  className="h-24 w-24 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    About the Author
                  </h3>
                  <h4
                    className="text-lg font-semibold mb-2"
                    style={{ color: primaryColor }}
                  >
                    {blogPost.author.name}
                  </h4>
                  <p className="text-sm text-slate-600 mb-3">
                    {blogPost.author.title}
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    {blogPost.author.bio}
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile Share Options */}
            <div className="mt-8 lg:hidden">
              <div className="flex items-center justify-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <span className="text-sm font-semibold text-slate-600">
                  Share:
                </span>
                <button
                  onClick={shareOnTwitter}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-600 hover:text-blue-600 transition"
                >
                  <Twitter className="h-5 w-5" />
                </button>
                <button
                  onClick={shareOnLinkedIn}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-600 hover:text-blue-700 transition"
                >
                  <Linkedin className="h-5 w-5" />
                </button>
                <button
                  onClick={shareOnFacebook}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-600 hover:text-blue-600 transition"
                >
                  <Facebook className="h-5 w-5" />
                </button>
                <button
                  onClick={copyLink}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-600 hover:text-slate-900 transition"
                >
                  {copied ? (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  ) : (
                    <Link2 className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Related Posts */}
      <section className="border-t border-slate-200 bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Related Articles
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {blogPost.relatedPosts.map((post) => (
              <a
                key={post.id}
                href={`/blog/${post.id}`}
                className="group rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <span
                      className="text-xs font-semibold uppercase tracking-wide"
                      style={{ color: primaryColor }}
                    >
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 line-clamp-2 group-hover:underline">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Blog */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <a
          href="/blogs"
          className="inline-flex items-center gap-2 font-semibold transition-all hover:gap-3"
          style={{ color: primaryColor }}
        >
          <ArrowLeft className="h-5 w-5" />
          Back to All Articles
        </a>
      </section>
    </div>
  );
}
