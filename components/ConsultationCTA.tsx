"use client";

import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { toast } from "react-hot-toast";
import { PhoneInput, defaultCountries } from "react-international-phone";
import "react-international-phone/style.css";

/* ── helpers ── */
const pad = (n: number) => String(n).padStart(2, "0");
const formatLocalDate = (d: Date) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const formatLabel = (ds: string) => {
  if (!ds) return null;
  const [y, m, d] = ds.split("-").map(Number);
  return `${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][m - 1]} ${d}, ${y}`;
};

const inp =
  "w-full rounded-2xl bg-white/[0.07] border border-white/[0.12] px-4 py-3 text-white text-[15px] placeholder:text-white/30 outline-none transition focus:border-amber-400/50 focus:bg-amber-400/[0.04]";

function Field({ label, full, col, children }: { label: string; full?: boolean; col?: string; children: React.ReactNode }) {
  return (
    <div className={[full ? "col-span-2" : "", col ?? ""].join(" ").trim()}>
      <p className="text-[10px] font-black uppercase tracking-[.12em] text-white/35 mb-2">{label}</p>
      {children}
    </div>
  );
}

function generateSlots(startH: number, startM: number, endH: number, endM: number, step: number) {
  const slots: string[] = [];
  let total = startH * 60 + startM;
  const end = endH * 60 + endM;
  while (total <= end) {
    const h24 = Math.floor(total / 60);
    const min = total % 60;
    const period = h24 >= 12 ? "PM" : "AM";
    const h12 = h24 % 12 || 12;
    slots.push(`${pad(h12)}:${pad(min)} ${period}`);
    total += step;
  }
  return slots;
}

function getSlotsForDate(dateStr: string) {
  if (!dateStr) return generateSlots(11, 45, 12, 45, 15);
  const day = new Date(dateStr + "T00:00:00").getDay();
  if (day === 6) return generateSlots(14, 45, 18, 45, 30); // Saturday
  return generateSlots(11, 45, 12, 45, 15); // Sun–Fri
}

interface ConsultationCTAProps {
  formRef: React.RefObject<HTMLFormElement>;
  loading: boolean;
  setLoading: (v: boolean) => void;
}

export default function ConsultationCTA({ formRef, loading, setLoading }: ConsultationCTAProps) {
  const [purposeType, setPurposeType] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState(() => getSlotsForDate("")[0]);
  const [showCal, setShowCal] = useState(false);
  const calRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (calRef.current && !calRef.current.contains(e.target as Node)) setShowCal(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  useEffect(() => {
    setSelectedTime(getSlotsForDate(selectedDate)[0]);
  }, [selectedDate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    if ((form.elements.namedItem("honeypot") as HTMLInputElement)?.value) return;
    if (!selectedDate || !selectedTime) {
      toast.error("Please select a date and time.");
      return;
    }
    setLoading(true);
    try {
      const purposeMap: Record<string, string> = {
        study: "Study abroad counselling",
        research: "Academic research consultation",
        office: "Office visit appointment",
        financialCounseling: "Financial Counseling",
        dovCounseling: "Dov/CIMEA Counseling",
      };
      const customPurpose = (form.elements.namedItem("custom_purpose") as HTMLInputElement)?.value;
      const fullPurpose = purposeMap[purposeType] || customPurpose || "Others";

      let hp = form.querySelector('input[name="purpose"]') as HTMLInputElement | null;
      if (!hp) {
        hp = Object.assign(document.createElement("input"), { type: "hidden", name: "purpose" });
        form.appendChild(hp);
      }
      hp.value = fullPurpose;

      (form.elements.namedItem("date") as HTMLInputElement).value = selectedDate;
      (form.elements.namedItem("time") as HTMLInputElement).value = selectedTime;

      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_BOOKING_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      toast.success("Consultation booked successfully!");
      form.reset();
      setPurposeType("");
      setPhone("");
      setSelectedDate("");
      setSelectedTime(getSlotsForDate("")[0]);
      setShowCal(false);
    } catch (err) {
      console.error(err);
      toast.error("Failed to book. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const timeSlots = getSlotsForDate(selectedDate);

  return (
    <>
      <style>{`
        .rdp { --rdp-accent-color: #17254e; --rdp-background-color: rgba(23,37,78,.08); margin: 0; }
        .rdp-months { justify-content: center; }
        .rdp-weekdays{color:#333333}
        .rdp-caption_label { font-size: 14px; font-weight: 800; color: #17254e; }
        .rdp-head_cell { font-size: 11px; font-weight: 700; color: rgba(23,37,78,.4); text-transform: uppercase; letter-spacing: .06em; }
        .rdp-day { border-radius: 10px; font-size: 13px; font-weight: 500; color: #17254e; width: 36px; height: 36px; }
        .rdp-day:hover:not(.rdp-day_disabled):not(.rdp-day_selected) { background: rgba(23,37,78,.08) !important; }
        .rdp-day_selected { background: #17254e !important; color: #fff !important; font-weight: 700; border-radius: 10px; }
        .rdp-day_today:not(.rdp-day_selected) { border: 1.5px solid #17254e; font-weight: 800; }
        .rdp-day_disabled { opacity: .22; cursor: default; }
        .rdp-nav_button { border-radius: 10px; color: #17254e; }
        .rdp-nav_button:hover { background: rgba(23,37,78,.08) !important; }

        .rip .react-international-phone-input-container { width: 100%; display: flex; }
        .rip .react-international-phone-country-selector-button {
          background: rgba(255,255,255,.07) !important;
          border: 1.5px solid rgba(255,255,255,.12) !important;
          border-radius: 1rem !important;
          color: #fff !important;
          font-size: 15px !important;
          height: 48px !important;
          padding: 0 12px !important;
          margin-right: 8px !important;
          flex-shrink: 0;
        }
        .rip .react-international-phone-country-selector-button:focus { border-color: rgba(251,191,36,.5) !important; outline: none !important; }
        .rip .react-international-phone-country-selector-button__button-content { color: #fff !important; }
        .rip .react-international-phone-dial-code-preview {
          color: #fff !important;
          background: rgba(255,255,255,.07) !important;
          border: 1.5px solid rgba(255,255,255,.12) !important;
          border-radius: 1rem !important;
          height: 48px !important;
          padding: 0 12px !important;
          margin-right: 8px !important;
          display: flex; align-items: center;
          font-size: 15px !important;
          flex-shrink: 0;
        }
        .rip .react-international-phone-input {
          background: rgba(255,255,255,.07) !important;
          border: 1.5px solid rgba(255,255,255,.12) !important;
          border-radius: 1rem !important;
          color: #fff !important;
          font-size: 15px !important;
          height: 48px !important;
          padding: 0 16px !important;
          flex: 1 !important;
          min-width: 0 !important;
          width: 100% !important;
        }
        .rip .react-international-phone-input:focus { border-color: rgba(251,191,36,.5) !important; outline: none !important; }
        .rip .react-international-phone-country-selector-dropdown {
          background: #1a2a5e !important; border-radius: 1rem !important;
          border: 1px solid rgba(255,255,255,.15) !important; color: #fff !important; z-index: 9999 !important;
        }
        .rip .react-international-phone-country-selector-dropdown__list-item { color: #fff !important; }
        .rip .react-international-phone-country-selector-dropdown__list-item:hover { background: rgba(251,191,36,.15) !important; }
      `}</style>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
        <input type="text" name="honeypot" className="hidden" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
          <Field label="Full Name" col="max-sm:col-span-2">
            <input name="full_name" required placeholder="e.g. Aarav Sharma" className={inp} />
          </Field>

          <Field label="Purpose" col="max-sm:col-span-2">
            <select
              value={purposeType}
              onChange={(e) => setPurposeType(e.target.value)}
              name="purpose_type"
              required
              className={`${inp} cursor-pointer appearance-none`}
            >
              <option value="" className="bg-[#17254e]">Select purpose…</option>
              <option value="study" className="bg-[#17254e]">Study Counselling</option>
              <option value="research" className="bg-[#17254e]">Research Consultation</option>
              <option value="office" className="bg-[#17254e]">Office Visit</option>
              <option value="financialCounseling" className="bg-[#17254e]">Financial Counseling</option>
              <option value="dovCounseling" className="bg-[#17254e]">Dov/CIMEA Counseling</option>
              <option value="others" className="bg-[#17254e]">Others</option>
            </select>
          </Field>

          {purposeType === "others" && (
            <Field label="Please specify" full>
              <input name="custom_purpose" placeholder="Describe your purpose…" className={inp} />
            </Field>
          )}

          <Field label="Phone Number" full>
            <div className="rip">
              <PhoneInput
                defaultCountry="np"
                value={phone}
                onChange={setPhone}
                countries={defaultCountries}
                disableDialCodeAndPrefix
                showDisabledDialCodeAndPrefix
                inputProps={{ placeholder: "Enter phone number" }}
              />
            </div>
            <input type="hidden" name="whatsapp" value={phone} />
          </Field>

          <Field label="Preferred Date" col="max-sm:col-span-2">
            <div ref={calRef} className="relative">
              <button
                type="button"
                onClick={() => setShowCal((v) => !v)}
                className={`${inp} flex items-center gap-2 cursor-pointer ${selectedDate ? "border-amber-400/40 bg-amber-400/[0.04] !text-white" : "text-white/30"}`}
              >
                <svg className="w-4 h-4 shrink-0 opacity-50" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span className="flex-1 text-left">{selectedDate ? formatLabel(selectedDate) : "Pick a date"}</span>
              </button>

              {showCal && (
                <div className="absolute top-full left-0 mt-2 z-50 bg-white rounded-2xl shadow-2xl shadow-black/20 p-4 border border-black/5">
                  <DayPicker
                    mode="single"
                    selected={selectedDate ? new Date(selectedDate + "T00:00:00") : undefined}
                    disabled={{ before: new Date() }}
                    onSelect={(date) => {
                      if (!date) return;
                      setSelectedDate(formatLocalDate(date));
                      setShowCal(false);
                    }}
                  />
                </div>
              )}
              <input type="hidden" name="date" value={selectedDate} />
            </div>
          </Field>

          <Field label="Preferred Time" col="max-sm:col-span-2">
            <select
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              name="time"
              className={`${inp} cursor-pointer appearance-none`}
            >
              {timeSlots.map((slot) => (
                <option key={slot} value={slot} className="bg-[#17254e]">{slot}</option>
              ))}
            </select>
          </Field>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-full py-4 font-bold text-black bg-amber-400 hover:scale-[1.015] active:scale-[.98] disabled:opacity-60 disabled:cursor-not-allowed transition flex items-center justify-center gap-2"
        >
          {loading && <span className="w-4 h-4 rounded-full border-2 border-black/15 border-t-black animate-spin" />}
          {loading ? "Booking your slot…" : "Book Consultation →"}
        </button>
      </form>
    </>
  );
}
