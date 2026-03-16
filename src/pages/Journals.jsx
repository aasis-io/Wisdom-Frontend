import { Download, FileText } from "lucide-react";
import React, { useEffect, useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import { getJournals } from "../services/api";

const breadcrumbsData = [
  { name: "Home", link: "/" },
  { name: "Journal Database", link: "/journals" },
];

const Journals = () => {
  const [journals, setJournals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJournals = async () => {
      try {
        setLoading(true);
        const data = await getJournals();
        const baseUrl = import.meta.env.VITE_API_BASE_URL.replace(/\/$/, "");

        const processed = data.map((item) => {
          if (item.image) {
            item.image = item.image.startsWith("http")
              ? item.image
              : `${baseUrl}${item.image.startsWith("/") ? "" : "/"}${
                  item.image
                }`;
          }
          if (item.pdf) {
            item.pdf = item.pdf.startsWith("http")
              ? item.pdf
              : `${baseUrl}${item.pdf.startsWith("/") ? "" : "/"}${item.pdf}`;
          }
          return item;
        });

        processed.sort(
          (a, b) => new Date(b.publishedDate) - new Date(a.publishedDate)
        );

        setJournals(processed);
      } catch (err) {
        console.error(err);
        setError("Failed to load journals. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchJournals();
  }, []);

  const groupedJournals = journals.reduce((acc, journal) => {
    const cat = journal.category || "Other";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(journal);
    return acc;
  }, {});

  return (
    <section className="bg-white">
      <Breadcrumbs breadcrumbs={breadcrumbsData} />

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-slate-900">
            Journal Database
          </h1>
        </div>

        {loading && <p className="text-slate-600">Loading journals...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {!loading &&
          Object.keys(groupedJournals).map((category) => (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-semibold text-slate-800 mb-6">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </h2>

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {groupedJournals[category].map((journal) => {
                  return (
                    <div
                      key={journal.id}
                      className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:border-slate-300 hover:shadow-sm"
                    >
                      <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                        {journal.image && (
                          <img
                            src={journal.image}
                            alt={journal.title}
                            className="h-full w-full object-cover transition-transform duration-300 cursor-pointer group-hover:scale-105"
                          />
                        )}
                      </div>

                      <div className="flex flex-1 flex-col justify-between p-6">
                        <div>
                          <div className="mb-3 flex items-center gap-2 text-slate-500">
                            <FileText className="h-5 w-5" />
                            <span className="text-sm">
                              {journal.pdf ? "PDF Journal" : "External Link"}
                            </span>
                          </div>

                          <h2 className="text-base font-semibold text-[#17254e] group-hover:text-slate-800">
                            {journal.title}
                          </h2>

                          <p className="mt-2 text-sm text-slate-600 leading">
                            <span className="font-medium">Authors:</span>{" "}
                            {journal.authors}
                          </p>

                          <p className="mt-2 text-sm text-slate-500">
                            <span className="font-medium">Published:</span>{" "}
                            {new Date(journal.publishedDate).toLocaleDateString(
                              undefined,
                              { year: "numeric", month: "long", day: "numeric" }
                            )}
                          </p>
                        </div>

                        <div className="mt-6 flex items-center justify-between">
                          {/* View Article: always use external link if available, else PDF */}
                          {journal.pdf || journal.link ? (
                            <a
                              href={journal.pdf || journal.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm font-medium text-slate-700 hover:text-slate-900"
                            >
                              View Article →
                            </a>
                          ) : null}

                          {/* Download: only if PDF exists */}
                          {journal.pdf && (
                            <a
                              href={journal.pdf}
                              download
                              className="inline-flex items-center gap-1 rounded-md border border-slate-200 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50"
                            >
                              <Download className="h-4 w-4" />
                              Download PDF
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
      </section>
    </section>
  );
};

export default Journals;
