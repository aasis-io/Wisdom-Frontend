import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Our Team | WAARC",
  description: "Meet the researchers, advisors, and professionals behind Wisdom Academy & Research Center (WAARC), advancing research, policy, and education in Nepal.",
  keywords: ["WAARC team", "Wisdom Academy team", "research scholars Nepal", "academic professionals Nepal", "policy researchers Nepal"],
  alternates: { canonical: "https://waarc.edu.np/team" },
  openGraph: { title: "Our Team | WAARC", url: "https://waarc.edu.np/team" },
};

const breadcrumbsData = [
  { name: "Home", link: "/" },
  { name: "Our Team", link: "/team" },
];

async function getTeamMembers() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/getTeam`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const data = await res.json();
    const baseUrl = (process.env.NEXT_PUBLIC_API_BASE_URL || "").replace(/\/$/, "");
    return data.map((member: any) => ({
      id: member.id,
      name: member.name,
      role: member.position,
      location: member.location,
      image: member.image.startsWith("http")
        ? member.image
        : `${baseUrl}${member.image.startsWith("/") ? "" : "/"}${member.image}`,
    }));
  } catch {
    return [];
  }
}

function TeamCard({ member }: { member: any }) {
  return (
    <div className="group flex flex-col items-center text-center">
      <div className="overflow-hidden rounded-full w-64 h-64 relative">
        <Image
          src={member.image}
          alt={`${member.name} - ${member.role}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="256px"
        />
      </div>
      <div className="mt-4 px-2 flex flex-col items-center">
        <h3 className="text-lg font-semibold text-slate-900">{member.name}</h3>
        <p className="text-sm font-medium text-[#1e2a4a]">{member.role}</p>
        <p className="text-sm text-slate-600">{member.location}</p>
      </div>
    </div>
  );
}

export default async function TeamPage() {
  const teamMembers = await getTeamMembers();

  return (
    <>
      <section className="bg-white">
        <Breadcrumbs breadcrumbs={breadcrumbsData} />
        <div className="py-14">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[#1e2a4a]">Our Team</h2>
            <p className="mt-2 text-base text-slate-600">
              Meet the Minds Behind WAARC — Dedicated to Knowledge, Research, and Innovation.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-5xl px-6 pb-20">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member: any) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
