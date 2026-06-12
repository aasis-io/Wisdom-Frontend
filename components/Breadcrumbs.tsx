import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Crumb {
  name: string;
  link: string;
}

export default function Breadcrumbs({ breadcrumbs }: { breadcrumbs: Crumb[] }) {
  return (
    <section className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-6 flex items-center gap-2 text-sm text-slate-600">
        {breadcrumbs.map((crumb, i) => (
          <React.Fragment key={i}>
            {crumb.link ? (
              <Link href={crumb.link} className="hover:text-slate-900">
                {crumb.name}
              </Link>
            ) : (
              <span>{crumb.name}</span>
            )}
            {i < breadcrumbs.length - 1 && <ChevronRight className="h-4 w-4" />}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
