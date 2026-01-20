import { ChevronRight, Download, FileText } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import JournalImg1 from "/journals/images/governance.jpg";
import JournalImg4 from "/journals/images/household.jpg";
import JournalImg3 from "/journals/images/spatial.jpg";
import JournalImg2 from "/journals/images/sustainable.jpg";

const journals = [
  {
    id: 1,
    title:
      "E Governance And Service Delivery In Nepal Evidence From Nagarjun Municipality",
    authors:
      "Prem Bahadur Giri, Uttam Raj Giri, Bijay Raj Giri, Ajay Giri, Trilochana Pokhrel",
    published: "December 2025",
    pdfUrl:
      "/journals/E-Governance_and_Service_Delivery_in_Nepal_Evidence_from_Nagarjun_Municipality.pdf",
    image: JournalImg1,
  },
  {
    id: 2,
    title:
      "Sustainable Energy Development Through Community Forestry In Nepal: Insights From Siranchowk Rural Municipality, Gorkha",
    authors: "GIRI, P. B., YUCHAROEN, GHIMIRE, H. P.",
    published: "August 2025",
    pdfUrl:
      "/journals/Sustainable_Energy_Development_Through_Community_Forest_in_Nepal_Insights_From_Siranchowk_Rural_Municipality_Gorkha.pdf",
    image: JournalImg2,
  },
  {
    id: 3,
    title:
      "Spatial Heterogeneity in Clean Cooking Adoption in Kathmandu Valley, Evidence from Multiscale Geographically Weighted Regression",
    authors: "Hari Prasad Ghimire, Prem Bahadur Giri",
    published: "November 2025",
    pdfUrl:
      "/journals/SpatialHeterogeneityinCleanCookingAdoptioninKathmanduValleyEvidencefromMultiscaleGeographicallyWeightedRegression.pdf",
    image: JournalImg3,
  },
  {
    id: 4,
    title:
      "Meeting Household Energy Needs through Community Forestry: A Systematic Review of Evidence from Nepal",
    authors:
      "Prem Bahadur Giri, Hari Prasad Ghimire, Bijay Raj Giri, Trilochana Pokhrel",
    published: "November 2025",
    pdfUrl:
      "/journals/Meeting_Household_Energy_Needs_through_Community_Forestry_A_Systematic_Review_of_Evidence_from_Nepal.pdf",
    image: JournalImg4,
  },
];

const Journals = () => {
  return (
    <section className="bg-white">
      {/* Breadcrumb */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link to="/" className="hover:text-slate-900">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-slate-900 font-medium">Journal Database</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-slate-900">
            Journal Database
          </h1>
          <p className="mt-2 text-slate-600 max-w-2xl">
            Access peer-reviewed journals in PDF format. Click any journal to
            view or download.
          </p>
        </div>

        {/* Journal Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {journals.map((journal) => (
            <div
              key={journal.id}
              className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:border-slate-300 hover:shadow-sm"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <a
                  href={journal.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={journal.image}
                    alt={journal.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </a>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <div className="mb-3 flex items-center gap-2 text-slate-500">
                    <FileText className="h-5 w-5" />
                    <span className="text-sm">PDF Journal</span>
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
                    {journal.published}
                  </p>
                </div>

                {/* Actions */}
                <div className="mt-6 flex items-center justify-between">
                  <a
                    href={journal.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-slate-700 hover:text-slate-900"
                  >
                    View Journal →
                  </a>

                  <a
                    href={journal.pdfUrl}
                    download
                    className="inline-flex items-center gap-1 rounded-md border border-slate-200 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50"
                  >
                    <Download className="h-4 w-4" />
                    Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Journals;
