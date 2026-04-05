import { ArrowRight, CalendarDays, Mail, Phone, User } from "lucide-react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getUpcomingEvent, registerForEvent } from "../../services/api";

export default function EventRegistrationSection() {
  const [event, setEvent] = useState(null);
  const [eventImage, setEventImage] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvent = async () => {
      const data = await getUpcomingEvent();

      if (!data) {
        setEvent(null);
        setEventImage(null);
        return;
      }

      const mappedEvent = {
        title: data.title,
        eventDate: data.date,
        registrationLink: data.link,
        image: data.image,
      };

      setEvent(mappedEvent);

      if (data.image) {
        const baseUrl = import.meta.env.VITE_API_BASE_URL.replace(/\/$/, "");
        const fullUrl = /^https?:\/\//i.test(data.image)
          ? data.image
          : `${baseUrl}/${data.image.replace(/^\/+/, "")}`;
        setEventImage(fullUrl);
      } else {
        setEventImage(null);
      }
    };

    fetchEvent();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullName = formData.fullName.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();

    if (!fullName || !email || !phone) {
      toast.error("Please fill all fields");
      return;
    }

    setLoading(true);
    try {
      await registerForEvent({ fullName, email, phone });
      toast.success("Successfully registered for upcoming events!");
      setFormData({ fullName: "", email: "", phone: "" });
    } catch (error) {
      toast.error("Failed to register. Please try again.");
      console.error("Registration error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-white py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="overflow-hidden rounded-3xl bg-linear-to-br from-[#0E1B3D] to-[#142657] shadow-2xl">
          {event ? (
            // EVENT AVAILABLE → SHOW ELEGANT CTA ONLY
            <div className="grid lg:grid-cols-2">
              <div className="flex flex-col justify-center px-8 pt-12 pb-6 md:py-12 text-white sm:px-12">
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#F4B740]">
                  Upcoming Event
                </p>

                <h2 className="mb-4 text-2xl font-semibold leading-tight md:text-4xl">
                  {event.title}
                </h2>

                {event.eventDate && (
                  <div className="mb-6 flex items-center gap-3 text-white/80">
                    <CalendarDays className="h-5 w-5 text-[#F4B740]" />
                    <span className="text-sm md:text-base">
                      {new Date(event.eventDate).toDateString()}
                    </span>
                  </div>
                )}

                <p className="mb-8 max-w-xl text-sm leading-relaxed text-white/75 md:text-base">
                  Don’t miss this opportunity to join our latest event. Secure
                  your spot now and be part of an engaging and valuable
                  experience.
                </p>

                {event.registrationLink && (
                  <a
                    href={event.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#F4B740] px-6 py-4 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#e6ac2f]"
                  >
                    Register for This Event
                    <ArrowRight className="h-4 w-4" />
                  </a>
                )}
              </div>

              {eventImage && (
                <div className="p-6 sm:p-8 lg:p-10">
                  <img
                    src={eventImage}
                    alt={event.title}
                    className="h-full max-h-[420px] w-full rounded-3xl object-cover shadow-xl"
                  />
                </div>
              )}
            </div>
          ) : (
            <div className="grid lg:grid-cols-2">
              <div className="flex flex-col justify-center px-8 py-14 text-center text-white sm:px-12 lg:text-left">
                <h2 className="mb-6 text-2xl font-semibold md:text-3xl text-center">
                  No upcoming event
                </h2>
                <p className="max-w-lg text-sm leading-relaxed text-center text-white/80 md:text-base">
                  Please come back soon. We are currently preparing exciting
                  events and learning opportunities for you.
                </p>
              </div>

              <div className="flex items-center px-8 py-14 sm:px-12">
                <div className="w-full max-w-md">
                  <h3 className="mb-8 text-center text-lg font-medium text-white">
                    Register for Our Upcoming Events
                  </h3>

                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                      <label className="mb-2 block text-sm text-white">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
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
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
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
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter your Phone Number"
                          className="w-full rounded-xl bg-white py-4 pl-10 pr-4 text-sm text-gray-900 outline-none ring-2 ring-transparent transition focus:ring-[#F4B740]"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className={`w-full rounded-xl bg-[#F4B740] py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#e6ac2f] ${
                        loading ? "cursor-not-allowed opacity-50" : ""
                      }`}
                    >
                      {loading ? "Registering..." : "Register"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
