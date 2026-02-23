import { ChevronRight } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Career = () => {
  return (
    <div className="bg-white">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link to={"/"} className="hover:text-slate-900">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <p className="hover:text-slate-900">Work With Us</p>
            <ChevronRight className="h-4 w-4" />
            <span className="text-slate-900">Career</span>
          </div>
        </div>
      </section>
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
