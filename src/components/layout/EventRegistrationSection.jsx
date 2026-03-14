import { Mail, Phone, User } from "lucide-react";
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
      try {
        const data = await getUpcomingEvent();

        if (data && Object.keys(data).length) {
          const mappedEvent = {
            title: data.title,
            eventDate: data.date,
            registrationLink: data.link,
            image: data.image,
          };
          setEvent(mappedEvent);

          if (data.image) {
            const baseUrl = import.meta.env.VITE_API_BASE_URL.replace(
              /\/$/,
              ""
            );
            const fullUrl = /^https?:\/\//i.test(data.image)
              ? data.image
              : `${baseUrl}/${data.image.replace(/^\/+/, "")}`;
            setEventImage(fullUrl);
          } else {
            setEventImage(null);
          }
        } else {
          setEvent(null);
          setEventImage(null);
        }
      } catch (error) {
        console.error("Failed to fetch event", error);
        setEvent(null);
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
    const { fullName, email, phone } = formData;

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
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-white py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid overflow-hidden rounded-3xl bg-linear-to-br from-[#0E1B3D] to-[#142657] shadow-xl lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center px-8 py-14 pb-4 sm:pb-14 text-white sm:px-12 text-center">
            {event ? (
              <>
                <h2 className="mb-3 text-lg font-medium md:text-xl">
                  {event.title}
                </h2>

                {eventImage && (
                  <img
                    src={eventImage}
                    alt={event.title}
                    className="mx-auto mb-4 h-40 w-full max-w-sm rounded-2xl object-cover"
                  />
                )}

                {event.eventDate && (
                  <p className="mb-3 text-sm text-white/80">
                    Event Date: {new Date(event.eventDate).toDateString()}
                  </p>
                )}

                {event.registrationLink && (
                  <a
                    href={event.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white underline hover:text-gray-300 transition"
                  >
                    Register for Event
                  </a>
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

          {/* RIGHT FORM */}
          <div className="flex items-center px-8 py-14 pt-8 sm:px-12 md:pt-14">
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
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? "Registering..." : "Register"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
