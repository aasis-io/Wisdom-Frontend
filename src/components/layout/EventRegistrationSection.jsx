import { Mail, Phone, User } from "lucide-react";
import React from "react";

export default function EventRegistrationSection() {
  return (
    <section className="w-full bg-white py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid overflow-hidden rounded-3xl bg-gradient-to-br from-[#0E1B3D] to-[#142657] shadow-xl lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center px-8 py-14 pb-4 sm:pb-14 text-white sm:px-12 text-center">
            <h2 className="mb-6 text-lg font-medium leading-7 md:text-xl">
              Conferences, Workshops, and Research Dialogues
            </h2>

            <p className="mb-10 max-w-lg text-sm leading-relaxed text-white/80 md:text-base">
              Join our upcoming events to engage with experts, explore emerging
              research, and participate in interactive discussions that support
              learning, collaboration, and evidence-based practice.
            </p>

            <div>
              <button className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-5 text-sm font-semibold text-[#0E1B3D] transition hover:-translate-y-0.5 hover:bg-gray-100">
                Start learning now
              </button>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="flex items-center px-8 py-14 pt-8 sm:px-12 md:pt-14">
            <div className="w-full max-w-md">
              <h3 className="mb-8 text-center text-lg font-medium text-white">
                Register for Our Upcoming Events
              </h3>

              <form className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="mb-2 block text-sm text-white">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Enter your Full Name"
                      className="w-full rounded-xl bg-white py-4 pl-10 pr-4 text-sm text-gray-900 outline-none ring-2 ring-transparent transition focus:ring-[#F4B740]"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm text-white">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      placeholder="Enter your Email Address"
                      className="w-full rounded-xl bg-white py-4 pl-10 pr-4 text-sm text-gray-900 outline-none ring-2 ring-transparent transition focus:ring-[#F4B740]"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="mb-2 block text-sm text-white">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      placeholder="Enter your Phone Number"
                      className="w-full rounded-xl bg-white py-4 pl-10 pr-4 text-sm text-gray-900 outline-none ring-2 ring-transparent transition focus:ring-[#F4B740]"
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#F4B740] py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#e6ac2f]"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
