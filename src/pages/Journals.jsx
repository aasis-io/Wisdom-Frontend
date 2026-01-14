import { ChevronRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Journals = () => {
  return (
    <section className="bg-white">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link to={"/"} className="hover:text-slate-900">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link to={"/journals"} className="hover:text-slate-900">
              Journal Database
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Journals;
