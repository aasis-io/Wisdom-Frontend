import { useRef, useState } from "react";
import ConsultationCTA from "../components/ConsultationCTA";

export default function ScheduleConsultationPage({}) {
  const primaryColor = "#17254e";
  const secondaryColor = "#fbbf24";
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  return (
    <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-24">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900">
          Schedule Your Consultation
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Fill out the form below and our team will reach out shortly to confirm
          your consultation.
        </p>
      </div>

      <div
        className="mt-12 rounded-3xl border border-gray-200 shadow-sm p-6 sm:p-8 lg:p-10"
        style={{
          background: `linear-gradient(135deg, ${primaryColor}, ${primaryColor}dd)`,
        }}
      >
        <ConsultationCTA
          formRef={formRef}
          loading={loading}
          setLoading={setLoading}
        />
      </div>
    </section>
  );
}
