import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";


const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "Chandragiri-6, Kathmandu",
  },
  {
    icon: Mail,
    label: "Email",
    value: "waarc2022@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+977 984-7947004",
  },
];

const ContactUs = () => {
  return (
    <section className="bg-white">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link to={"/"} className="hover:text-slate-900">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link to={"/contact"} className="hover:text-slate-900">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="mb-14">
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Contact Us
            </h1>
            <p className="mt-4 max-w-3xl text-gray-600 leading-relaxed">
              Reach out to Wisdom Academy & Research Center (WAARC) to discuss
              research, collaboration, or professional consultation tailored to
              your needs.
            </p>
          </div>

          {/* Main Card */}
          <div
            className="
    relative grid md:grid-cols-2 bg-[#17254e] rounded-xl overflow-hidden shadow-sm
  "
          >
            {/* Left – Info Panel */}
            <div className=" text-white p-10 md:p-12 flex justify-center place-items-center">
              <div>
                <h2 className="text-2xl font-semibold mb-8">
                  Wisdom Academy & Research Center
                </h2>

                <div className="space-y-6">
                  {contactInfo.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className="flex items-start gap-4">
                        <Icon className="h-5 w-5 mt-1 text-white" />
                        <div>
                          <p className="text-sm opacity-80">{item.label}</p>
                          <p className="font-medium">{item.value}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* Right – Form */}
            <div className="p-10 md:p-12 bg-gray-50">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Leave a message
              </h3>

              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Full Name *"
                  className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-[#1f73b7] focus:outline-none"
                />

                <input
                  type="email"
                  placeholder="Email Address *"
                  className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-[#1f73b7] focus:outline-none"
                />

                <input
                  type="text"
                  placeholder="Subject *"
                  className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-[#1f73b7] focus:outline-none"
                />

                <textarea
                  rows={5}
                  placeholder="Questions / Comments *"
                  className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-[#1f73b7] focus:outline-none"
                />

                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-md bg-[#17254e] px-6 py-3 text-sm font-semibold text-white hover:bg-[#f2b84b] transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
