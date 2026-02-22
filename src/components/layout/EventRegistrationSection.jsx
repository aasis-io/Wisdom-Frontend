import { Mail, Phone, User } from "lucide-react";
import React, { useState } from "react";
// import { getUpcomingEvent } from "../../services/api"; // 🔜 BACKEND INTEGRATION

export default function EventRegistrationSection() {
  const [event, setEvent] = useState(null);

  /*
  🔜 BACKEND INTEGRATION (REFERENCE STYLE)

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await getUpcomingEvent();
        setEvent(response.data); // expected: { title, eventDate, image, registrationLink }
      } catch (error) {
        console.error("Failed to fetch event", error);
      }
    };

    fetchEvent();
  }, []);
  */

  return (
    <section className="w-full bg-white py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid overflow-hidden rounded-3xl bg-linear-to-br from-[#0E1B3D] to-[#142657] shadow-xl lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center px-8 py-14 pb-4 sm:pb-14 text-white sm:px-12 text-center">
            {event ? (
              <>
                {event.image && (
                  <img
                    src={event.image}
                    alt={event.title}
                    className="mx-auto mb-6 h-40 w-full max-w-sm rounded-2xl object-cover"
                  />
                )}

                <h2 className="mb-4 text-lg font-medium md:text-xl">
                  {event.title}
                </h2>

                {event.eventDate && (
                  <p className="mb-6 text-sm text-white/80">
                    📅 {new Date(event.eventDate).toDateString()}
                  </p>
                )}

                {event.registrationLink && (
                  <div>
                    <a
                      href={event.registrationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-5 text-sm font-semibold text-[#0E1B3D] transition hover:-translate-y-0.5 hover:bg-gray-100"
                    >
                      Register for Event
                    </a>
                  </div>
                )}
              </>
            ) : (
              <>
                <h2 className="mb-6 text-lg font-medium md:text-xl">
                  No upcoming event
                </h2>

                <p className="mb-10 max-w-lg text-sm leading-relaxed text-white/80 md:text-base">
                  Please come back soon. We are currently preparing exciting
                  events and learning opportunities for you.
                </p>
              </>
            )}
          </div>

          {/* RIGHT FORM (UNCHANGED) */}
          <div className="flex items-center px-8 py-14 pt-8 sm:px-12 md:pt-14">
            <div className="w-full max-w-md">
              <h3 className="mb-8 text-center text-lg font-medium text-white">
                Register for Our Upcoming Events
              </h3>

              <form className="space-y-6">
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
