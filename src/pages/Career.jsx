import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
const breadcrumbsData = [
  { name: "Home", link: "/" },
  { name: "Work with us", link: "" },
  { name: "Career", link: "/career" },
];
const Career = () => {
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <Breadcrumbs breadcrumbs={breadcrumbsData} />
      <div className="h-96 flex items-center justify-center">
        <div className=" p-8 max-w-md text-center">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">
            Thank You!
          </h1>
          <p className="text-gray-600 mb-6">
            We appreciate your interest in joining our team. <br />
            Currently, there are no vacancies available. Please stay in touch
            for future opportunities.
          </p>
          <button
            onClick={() => (window.location.href = "/")}
            className="px-8 py-4 bg-[#0E1B3D] text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Career;
