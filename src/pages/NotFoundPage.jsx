import NotFoundVector from "../assets/images/404.svg"; // Replace with your 404 vector image

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center py-16 bg-white px-4">
      <h1 className="text-5xl font-bold text-[#17254E] mb-12 text-center">
        Oops! Page not found
      </h1>
      {/* 404 Vector Image */}
      <div className="w-full max-w-md mb-8 animate-float">
        <img src={NotFoundVector} alt="404 Not Found" className="w-full" />
      </div>

      {/* Heading */}

      <p className="text-gray-500 mb-6 text-center max-w-sm">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="/"
          className="px-6 py-3 bg-[#17254E] hover:bg-[#0f1a35] text-white rounded-lg font-semibold transition-all duration-300"
        >
          Go Home
        </a>
        <button
          onClick={() => window.history.back()}
          className="px-6 py-3 border border-[#17254E] hover:bg-[#f0f0f0] text-[#17254E] rounded-lg font-semibold transition-all duration-300"
        >
          Go Back
        </button>
      </div>

      {/* Floating Animation Style */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default NotFoundPage;
