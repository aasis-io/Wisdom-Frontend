import { Mail } from "lucide-react";

export function NewsletterCTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-8 bg-white">
      <div className="rounded-3xl bg-[#18284f] px-8 py-14 text-center text-white shadow-lg">
        <h3 className="mx-auto max-w-2xl text-lg font-medium leading-relaxed">
          Subscribe to get information, latest news and other
          <br />
          interesting offers from WAARC
        </h3>

        <div className="mx-auto mt-8 flex max-w-xl flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              placeholder="Your email"
              className="w-full rounded-xl border border-transparent bg-white py-3 pl-12 pr-4 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button className="rounded-xl bg-white px-8 py-3 text-sm font-semibold text-[#18284f] transition hover:bg-gray-100">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
