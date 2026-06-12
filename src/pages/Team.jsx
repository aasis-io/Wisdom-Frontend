import React, { useEffect, useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import { getTeamMembers } from "../services/api";
import SEO from "./../components/SEO";

/** Breadcrumb data */
const breadcrumbsData = [
  { name: "Home", link: "/" },
  { name: "Our Team", link: "/team" },
];

/** Card component */
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

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const data = await getTeamMembers();

        const baseUrl = import.meta.env.VITE_API_BASE_URL.replace(/\/$/, "");

        const formatted = data.map((member) => ({
          id: member.id,
          name: member.name,
          role: member.position,
          location: member.location,
          image: member.image.startsWith("http")
            ? member.image
            : `${baseUrl}${member.image.startsWith("/") ? "" : "/"}${
                member.image
              }`,
        }));

        setTeamMembers(formatted);
      } catch (error) {
        console.error("Failed to fetch team members", error);
      }
    };

    fetchTeam();
  }, []);

  return (
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
              Meet the Minds Behind WAARC — Dedicated to Knowledge, Research,
              and Innovation.
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
};

export default Team;
