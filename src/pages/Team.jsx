import { ChevronDown, ChevronRight, ChevronUp } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router";
import Bijay from "/team/bijay1.jpg";
import Hari from "/team/hari1.jpg";
import Prem from "/team/prem1.jpg";

/* Example team data */
const teamMembers = [
  {
    id: 1,
    name: "Bijay Raj Giri ",
    role: "Managing Director",
    image: Bijay,
    description: "",
  },
  {
    id: 2,
    name: "Er. Hari Parsad Ghimire",
    role: "Senior Research Fellow",
    image: Hari,
    description: "",
  },
  {
    id: 3,
    name: "Prem Bahadur Giri",
    role: "Senior Research Fellow",
    image: Prem,
    description: "",
  },
];

const TeamCard = ({ member }) => {
  const [open, setOpen] = useState(false);

  // Maximum characters to show in preview
  const previewLength = 100;

  // Decide what to display: short preview or full description
  const displayedText =
    open || !member.description
      ? member.description
      : member.description.slice(0, previewLength) +
        (member.description.length > previewLength ? "..." : "");

  return (
    <div className="group flex flex-col items-center text-center">
      {/* Image */}
      <div className="overflow-hidden rounded-full w-64 h-64">
        <img
          src={member.image}
          alt={member.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="mt-4 px-2 flex flex-col items-center">
        <h3 className="text-lg font-semibold text-slate-900">{member.name}</h3>
        <p className="text-sm font-medium text-[#1e2a4a]">{member.role}</p>

        {/* Description with Read more */}
        {member.description && (
          <>
            <p className="mt-2 text-sm text-slate-600 max-w-xs">
              {displayedText}
            </p>

            {member.description.length > previewLength && (
              <button
                onClick={() => setOpen(!open)}
                className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-[#1e2a4a] hover:underline"
              >
                {open ? "Read less" : "Read more"}
                {open ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

const Team = () => {
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
            <span className="text-slate-900">Our Team</span>
          </div>
        </div>
      </section>

      {/* Header */}
      <div className="py-14">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[#1e2a4a]">
            Our Team
          </h2>
          <p className="mt-2 text-base text-slate-600">
            Meet the Minds Behind WAARC — Dedicated to Knowledge, Research, and
            Innovation.
          </p>
        </div>
      </div>

      {/* Team Grid */}
      <div className="mx-auto max-w-5xl px-6 pb-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
