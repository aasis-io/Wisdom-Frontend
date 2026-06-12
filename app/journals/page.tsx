"use client";

import { Download, FileText } from "lucide-react";
import { useEffect, useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";

const breadcrumbsData = [
  { name: "Home", link: "/" },
  { name: "Journal Database", link: "/journals" },
];

export default function JournalsPage() {
  const [journals, setJournals] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJournals = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/getJournals`);
        const data = await res.json();
        const baseUrl = (process.env.NEXT_PUBLIC_API_BASE_URL || "").replace(/\/$/, "");

        const processed = data.map((item: any) => {
          if (item.image) {
            const rawUrl = item.image.startsWith("http")
              ? item.image
              : `${baseUrl}${item.image.startsWith("/") ? "" : "/"}${item.image}`;
            item.image = encodeURI(rawUrl);
          }
          if (item.pdf) {
            const pdfPath = item.pdf.startsWith("/uploads/")
              ? item.pdf.replace("/uploads/", "/waarc-uploads/")
              : item.pdf;
            const rawPdfUrl = pdfPath.startsWith("http")
              ? pdfPath
              : `${baseUrl}${pdfPath.startsWith("/") ? "" : "/"}${pdfPath}`;
            item.pdf = encodeURI(rawPdfUrl);
          }
          return item;
        });

        processed.sort((a: any, b: any) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());
        setJournals(processed);
      } catch {
        setError("Failed to load journals. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchJournals();
  }, []);

  const groupedJournals = journals.reduce((acc: Record<string, any[]>, journal) => {
    const cat = journal.category || "Other";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(journal);
    return acc;
  }, {});

  const handleDownload = async (url: string, filename: string) => {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Network response was not ok");
      const blob = await res.blob();
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      console.error("Download failed", err);
    }
  };

  return (
    <section className="bg-white">
      <Breadcrumbs breadcrumbs={breadcrumbsData} />
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-slate-900">Journal Database</h1>
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
                {groupedJournals[category].map((journal: any) => {
                  const filename = journal.title.replace(/\s+/g, "_") + ".pdf";
                  return (
                    <div
                      key={journal.id}
                      className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:border-slate-300 hover:shadow-sm"
                    >
                      <div
                        className="relative h-48 w-full overflow-hidden bg-slate-100 cursor-pointer"
                        onClick={() => window.open(journal.pdf || journal.link, "_blank")}
                      >
                        {journal.image && (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={journal.image}
                            alt={journal.title}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        )}
                      </div>
                      <div className="flex flex-1 flex-col justify-between p-6">
                        <div>
                          <div className="mb-3 flex items-center gap-2 text-slate-500">
                            <FileText className="h-5 w-5" />
                            <span className="text-sm">{journal.pdf ? "PDF Journal" : "External Link"}</span>
                          </div>
                          <h2 className="text-base font-semibold text-[#17254e] group-hover:text-slate-800">{journal.title}</h2>
                          <p className="mt-2 text-sm text-slate-600"><span className="font-medium">Authors:</span> {journal.authors}</p>
                          <p className="mt-2 text-sm text-slate-500">
                            <span className="font-medium">Published:</span>{" "}
                            {new Date(journal.publishedDate).toLocaleDateString(undefined, { year: "numeric", month: "long" })}
                          </p>
                        </div>
                        <div className="mt-6 flex items-center justify-between">
                          {(journal.pdf || journal.link) ? (
                            <a href={journal.pdf || journal.link} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-slate-700 hover:text-slate-900">
                              View Article →
                            </a>
                          ) : null}
                          {journal.pdf && (
                            <button
                              onClick={() => handleDownload(journal.pdf, filename)}
                              className="inline-flex items-center gap-1 rounded-md border border-slate-200 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50"
                            >
                              <Download className="h-4 w-4" /> Download PDF
                            </button>
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
}
