import { ChevronRight } from "lucide-react"; // or your preferred icon
import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ breadcrumbs }) => {
  return (
    <section className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-6 flex items-center gap-2 text-sm text-slate-600">
        {breadcrumbs.map((crumb, i) => (
          <React.Fragment key={i}>
            <Link to={crumb.link} className="hover:text-slate-900">
              {crumb.name}
            </Link>
            {i < breadcrumbs.length - 1 && <ChevronRight className="h-4 w-4" />}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Breadcrumbs;
