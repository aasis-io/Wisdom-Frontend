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
      {/* Breadcrumb */}
      <Breadcrumbs breadcrumbs={breadcrumbsData} />
      <div className="bg-white py-12 lg:py-8">
        <Services />
      </div>
    </>
  );
}
