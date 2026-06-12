"use client";

import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center py-16 bg-white px-4">
      <h1 className="text-5xl font-bold text-[#17254E] mb-12 text-center">Oops! Page not found</h1>
      <div className="w-full max-w-md mb-8 animate-float">
        <Image src="/images/404.svg" alt="404 Not Found" width={400} height={300} className="w-full" />
      </div>
      <p className="text-gray-500 mb-6 text-center max-w-sm">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="px-6 py-3 bg-[#17254E] hover:bg-[#0f1a35] text-white rounded-lg font-semibold transition-all duration-300"
        >
          Go Home
        </Link>
        <button
          onClick={() => window.history.back()}
          className="px-6 py-3 border border-[#17254E] hover:bg-[#f0f0f0] text-[#17254E] rounded-lg font-semibold transition-all duration-300"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
