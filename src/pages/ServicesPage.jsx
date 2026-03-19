import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import Services from "../components/layout/Services";
const breadcrumbsData = [
  { name: "Home", link: "/" },
  { name: "Services", link: "/services" },
];
export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbsData} />
      <section className="bg-white py-12 lg:py-8 contain-layout">
        <Services />
      </section>

    </>
  );
}
