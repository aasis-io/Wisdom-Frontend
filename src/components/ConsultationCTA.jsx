import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { toast } from "react-hot-toast";
import { PhoneInput, defaultCountries } from "react-international-phone";
import "react-international-phone/style.css";

/* ── helpers ── */
const pad = (n) => String(n).padStart(2, "0");
const formatLocalDate = (d) =>
  `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const formatLabel = (ds) => {
  if (!ds) return null;
  const [y, m, d] = ds.split("-").map(Number);
  return `${
    [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ][m - 1]
  } ${d}, ${y}`;
};

const inp =
  "w-full rounded-2xl bg-white/[0.07] border border-white/[0.12] px-4 py-3 text-white text-[15px] placeholder:text-white/30 outline-none transition focus:border-amber-400/50 focus:bg-amber-400/[0.04]";

function Field({ label, full, col, children }) {
  return (
    <div className={[full ? "col-span-2" : "", col ?? ""].join(" ").trim()}>
      <p className="text-[10px] font-black uppercase tracking-[.12em] text-white/35 mb-2">
        {label}
      </p>
      {children}
    </div>
  );
}

/* ── time string <-> Date helpers ── */
function timeStrToDate(str) {
  const m = (str || "").match(/^(\d{2}):(\d{2}) (AM|PM)$/);
  if (!m) return null;
  let h = parseInt(m[1]);
  const min = parseInt(m[2]);
  const p = m[3];
  if (p === "AM" && h === 12) h = 0;
  if (p === "PM" && h !== 12) h += 12;
  const d = new Date();
  d.setHours(h, min, 0, 0);
  return d;
}
function dateToTimeStr(d) {
  if (!d) return "";
  let h = d.getHours();
  const min = d.getMinutes();
  const p = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12;
  return `${String(h).padStart(2, "0")}:${String(min).padStart(2, "0")} ${p}`;
}

/* ══════════════ MAIN FORM ══════════════ */
export default function ConsultationCTA({ formRef, loading, setLoading }) {
  const [purposeType, setPurposeType] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("09:00 AM");
  const [showCal, setShowCal] = useState(false);
  const calRef = useRef(null);

  useEffect(() => {
    const h = (e) => {
      if (calRef.current && !calRef.current.contains(e.target))
        setShowCal(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formRef.current.honeypot.value) return;
    if (!selectedDate || !selectedTime) {
      toast.error("Please select a date and time.");
      return;
    }
    setLoading(true);
    try {
      const purposeMap = {
        study: "Study abroad counselling",
        research: "Academic research consultation",
        office: "Office visit appointment",
      };
      const fullPurpose =
        purposeMap[purposeType] ||
        formRef.current.custom_purpose?.value ||
        "Others";

      let hp = formRef.current.querySelector('input[name="purpose"]');
      if (!hp) {
        hp = Object.assign(document.createElement("input"), {
          type: "hidden",
          name: "purpose",
        });
        formRef.current.appendChild(hp);
      }
      hp.value = fullPurpose;
      formRef.current.date.value = selectedDate;
      formRef.current.time.value = selectedTime;

      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_BOOKING_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      toast.success("Consultation booked successfully!");
      formRef.current.reset();
      setPurposeType("");
      setPhone("");
      setSelectedDate("");
      setSelectedTime("09:00 AM");
      setShowCal(false);
    } catch (err) {
      console.error(err);
      toast.error("Failed to book. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* scoped overrides for DayPicker + phone input */}
      <style>{`
        /* ── calendar ── */
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

        /* ── phone input ── */
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
        /* flag + dial code text white */
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

        /* ── react-datepicker time picker ── */
        .react-datepicker__time-box{ width:100px !important; }
        .react-datepicker { background: #1a2a5e !important; border: 1px solid rgba(255,255,255,.12) !important; border-radius: 1rem !important; font-family: inherit !important; box-shadow: 0 20px 60px rgba(0,0,0,.3) !important; }
        .react-datepicker__time-container { width: 140px !important; }
        .react-datepicker__time-container .react-datepicker__time { background: #1a2a5e !important; border-radius: 0 1rem 1rem 0 !important; }
        .react-datepicker__time-list { scrollbar-width: thin; scrollbar-color: rgba(255,255,255,.2) transparent; }
        .react-datepicker__time-list-item { color: rgba(255,255,255,.65) !important; font-size: 14px !important; font-weight: 500 !important; border-radius: 8px !important; margin: 2px 6px !important; padding: 8px 10px !important; transition: background .12s, color .12s !important; }
        .react-datepicker__time-list-item:hover { background: rgba(255,255,255,.1) !important; color: #fff !important; }
        .react-datepicker__time-list-item--selected { background: #fbbf24 !important; color: #000 !important; font-weight: 700 !important; }
        .react-datepicker__header--time { background: #17254e !important; border-bottom: 1px solid rgba(255,255,255,.08) !important; border-radius: 1rem 1rem 0 0 !important; padding: 10px 0 !important; }
        .react-datepicker-popper { z-index: 9999 !important; }
        .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle { fill: #1a2a5e !important; color: #1a2a5e !important; stroke: rgba(255,255,255,.12) !important; }
      `}</style>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
        <input type="text" name="honeypot" className="hidden" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
          <Field label="Full Name" col="max-sm:col-span-2">
            <input
              name="full_name"
              required
              placeholder="e.g. Aarav Sharma"
              className={inp}
            />
          </Field>

          <Field label="Purpose" col="max-sm:col-span-2">
            <select
              value={purposeType}
              onChange={(e) => setPurposeType(e.target.value)}
              name="purpose_type"
              required
              className={`${inp} cursor-pointer appearance-none`}
            >
              <option value="" className="bg-[#17254e]">
                Select purpose…
              </option>
              <option value="study" className="bg-[#17254e]">
                Study Counselling
              </option>
              <option value="research" className="bg-[#17254e]">
                Research Consultation
              </option>
              <option value="office" className="bg-[#17254e]">
                Office Visit
              </option>
              <option value="others" className="bg-[#17254e]">
                Others
              </option>
            </select>
          </Field>

          {purposeType === "others" && (
            <Field label="Please specify" full>
              <input
                name="custom_purpose"
                placeholder="Describe your purpose…"
                className={inp}
              />
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

          {/* Date — calendar opens below, full width on mobile */}
          <Field label="Preferred Date" col="max-sm:col-span-2">
            <div ref={calRef} className="relative">
              <button
                type="button"
                onClick={() => setShowCal((v) => !v)}
                className={`${inp} flex items-center gap-2 cursor-pointer ${
                  selectedDate
                    ? "border-amber-400/40 bg-amber-400/[0.04] !text-white"
                    : "text-white/30"
                }`}
              >
                <svg
                  className="w-4 h-4 shrink-0 opacity-50"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span className="flex-1 text-left">
                  {selectedDate ? formatLabel(selectedDate) : "Pick a date"}
                </span>
              </button>

              {showCal && (
                <div className="absolute top-full left-0 mt-2 z-50 bg-white rounded-2xl shadow-2xl shadow-black/20 p-4 border border-black/5">
                  <DayPicker
                    mode="single"
                    selected={
                      selectedDate
                        ? new Date(selectedDate + "T00:00:00")
                        : undefined
                    }
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

          {/* Time */}
          <Field label="Preferred Time" col="max-sm:col-span-2">
            <ReactDatePicker
              selected={timeStrToDate(selectedTime)}
              onChange={(d) => d && setSelectedTime(dateToTimeStr(d))}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption=""
              dateFormat="hh:mm aa"
              placeholderText="Select time"
              className={inp}
              wrapperClassName="w-full"
            />
            <input type="hidden" name="time" value={selectedTime} />
          </Field>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-full py-4 font-bold text-black bg-amber-400 hover:scale-[1.015]y active:scale-[.98] disabled:opacity-60 disabled:cursor-not-allowed transition flex items-center justify-center gap-2"
        >
          {loading && (
            <span className="w-4 h-4 rounded-full border-2 border-black/15 border-t-black animate-spin" />
          )}
          {loading ? "Booking your slot…" : "Book Consultation →"}
        </button>
      </form>
    </>
  );
}
