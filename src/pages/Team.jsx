import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import SEO from "./../components/SEO";
import Aashish from "/team/aashish.jpg";
import Anup from "/team/anup.jpg";
import Bijay from "/team/bijay1.jpg";
import Hari from "/team/hari1.jpg";
import Prem from "/team/prem1.jpg";
import Ujjwal from "/team/team4.jpg";

/** Breadcrumb data */
const breadcrumbsData = [
  { name: "Home", link: "/" },
  { name: "Our Team", link: "/team" },
];

/** Team members data */
const teamMembers = [
  {
    id: 1,
    name: "Bijay Raj Giri",
    role: "Managing Director",
    location: "Rome, Italy",
    image: Bijay,
  },
  {
    id: 2,
    name: "Dr. Anup K.C",
    role: "Senior Editor",
    location: "Arkanas, USA",
    image: Anup,
  },
  {
    id: 3,
    name: "Er. Hari Parsad Ghimire",
    role: "Senior Research Fellow",
    location: "Kathmandu, Nepal",
    image: Hari,
  },
  {
    id: 4,
    name: "Prem Bahadur Giri",
    role: "Senior Research Fellow",
    location: "Kathmandu, Nepal",
    image: Prem,
  },
  {
    id: 5,
    name: "Aashish Subedi",
    role: "International Student Counselor",
    location: "Rome, Italy",
    image: Aashish,
  },

  {
    id: 6,
    name: "Ujjwal Giri",
    role: "Student Support Officer",
    location: "Cassino, Italy",
    image: Ujjwal,
  },
];

/** Card component to display a team member */
const TeamCard = ({ member }) => (
  <div className="group flex flex-col items-center text-center">
    <div className="overflow-hidden rounded-full w-64 h-64">
      <img
        src={member.image}
        alt={`${member.name} - ${member.role}`}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    <div className="mt-4 px-2 flex flex-col items-center">
      <h3 className="text-lg font-semibold text-slate-900">{member.name}</h3>
      <p className="text-sm font-medium text-[#1e2a4a]">{member.role}</p>
      <p className="text-sm text-slate-600">{member.location}</p>
    </div>
  </div>
);

/** Team Section */
const Team = () => (
  <>
    <SEO
      title="Our Team | Wisdom Academy & Research Center (WAARC)"
      description="Meet the researchers, advisors, and professionals behind Wisdom Academy & Research Center (WAARC), advancing research, policy, and education in Nepal."
      canonical="https://waarc.edu.np/team"
      keywords="WAARC team, Wisdom Academy team, research scholars Nepal, academic professionals Nepal, policy researchers Nepal"
      ogImage=""
    />
    <section className="bg-white">
      {/* Breadcrumb */}
      <Breadcrumbs breadcrumbs={breadcrumbsData} />

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
  </>
);

export default Team;
