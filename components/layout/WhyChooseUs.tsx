"use client";

import { Calendar, FileText, TrendingUp, Users } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function WhyChooseUs() {
  const [aboutData, setAboutData] = useState<any>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/getAbout`)
      .then((r) => r.json())
      .then((data) => {
        if (data?.image) {
          const baseUrl = (process.env.NEXT_PUBLIC_API_BASE_URL || "").replace(/\/$/, "");
          data.image = data.image.startsWith("http")
            ? data.image
            : `${baseUrl}${data.image.startsWith("/") ? "" : "/"}${data.image}`;
        }
        setAboutData(data);
      })
      .catch(console.error);
  }, []);

  if (!aboutData)
    return (
      <div className="grid gap-16 lg:grid-cols-[40%_60%] items-center">
        <div className="h-100 w-full max-w-md rounded-3xl bg-gray-200 animate-pulse" />
        <div className="grid gap-x-12 gap-y-12 sm:grid-cols-2">
          {Array(4).fill(0).map((_, idx) => (
            <div key={idx} className="h-48 rounded-3xl bg-gray-100 animate-pulse" />
          ))}
        </div>
      </div>
    );

  const cardsConfig = [
    { icon: <Calendar className="h-6 w-6" />, color: "bg-[#1e2a4a]" },
    { icon: <FileText className="h-6 w-6" />, color: "bg-[#f4b740]" },
    { icon: <Users className="h-6 w-6" />, color: "bg-[#f4b740]" },
    { icon: <TrendingUp className="h-6 w-6" />, color: "bg-[#1e2a4a]" },
  ];

  return (
    <>
      <h3 className="mb-12 text-center text-3xl font-extrabold text-[#1e2a4a]">Why Choose Us</h3>

      <div className="grid gap-16 lg:grid-cols-[40%_60%] items-center">
        <div className="relative mx-auto flex w-full max-w-md items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={aboutData.image} alt="Research work" width={600} height={400} className="w-full rounded-3xl" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-xl">
              <Image src="/images/logoOut.svg" alt="Rotating outer logo" width={128} height={128} className="absolute inset-0 h-full w-full animate-spin-slow" />
              <Image src="/images/logoIn.svg" alt="Inner logo" width={64} height={72} className="relative z-10" />
            </div>
          </div>
        </div>

        <div className="grid gap-x-12 gap-y-12 sm:grid-cols-2">
          {aboutData.whyUs.map((card: any, index: number) => {
            const config = cardsConfig[index % cardsConfig.length];
            return (
              <div key={card.id} className="relative rounded-3xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
                <div className={`absolute -top-6 left-1/2 -translate-x-1/2 flex h-14 w-14 items-center justify-center rounded-full text-white ${config.color}`}>
                  {config.icon}
                </div>
                <h4 className="mt-6 text-center text-lg font-bold text-[#1e2a4a]">{card.title}</h4>
                <p className="mt-3 text-center text-base leading-relaxed text-gray-600">{card.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
