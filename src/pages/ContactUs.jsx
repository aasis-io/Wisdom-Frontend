import emailjs from "@emailjs/browser";
import { Mail, MapPin, Phone } from "lucide-react";
import React, { useRef, useState } from "react";
import { toast } from "react-hot-toast";
import Breadcrumbs from "../components/Breadcrumbs";

const breadcrumbsData = [
  { name: "Home", link: "/" },
  { name: "Contact Us", link: "/contact" },
];

const contactInfo = [
  { icon: MapPin, label: "Address", value: "Chandragiri-6, Kathmandu" },
  { icon: Mail, label: "Email", value: "waarc2022@gmail.com" },
  { icon: Phone, label: "Phone", value: "+977 984-7947004" },
];

const ContactUs = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      toast.success("Message sent successfully!");
      setFormData({ fullName: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white">
      <Breadcrumbs breadcrumbs={breadcrumbsData} />
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-6">
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

          <div className="relative grid md:grid-cols-2 bg-[#17254e] rounded-xl overflow-hidden shadow-sm">
            {/* Left – Info Panel */}
            <div className="text-white p-10 md:p-12 flex justify-center place-items-center">
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

              <form ref={formRef} className="space-y-5" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name *"
                  required
                  className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-[#1f73b7] focus:outline-none"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address *"
                  required
                  className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-[#1f73b7] focus:outline-none"
                />

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject *"
                  required
                  className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-[#1f73b7] focus:outline-none"
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Questions / Comments *"
                  required
                  className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-[#1f73b7] focus:outline-none"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className={`inline-flex items-center justify-center rounded-md bg-[#17254e] px-6 py-3 text-sm font-semibold text-white hover:bg-[#f2b84b] transition ${
                    loading ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? "Sending..." : "Send Message"}
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
