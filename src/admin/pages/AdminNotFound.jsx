// src/admin/pages/OtherPage/AdminNotFound.jsx
import Admin404Vector from "./../../assets/images/404.svg";
const AdminNotFound = () => {
  return (
    <div className="flex flex-col items-center py-12 bg-white px-4">
      <h1 className="text-4xl font-bold text-[#17254E] mb-12 text-center">
        Page Not Found
      </h1>
      {/* Admin 404 Vector */}
      <div className="w-full max-w-sm mb-8 animate-float">
        <img src={Admin404Vector} alt="Admin 404" className="w-full" />
      </div>

      {/* Heading */}
      
      <p className="text-gray-500 mb-6 text-center max-w-xs">
        The admin page you are looking for does not exist.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="/admin"
          className="px-6 py-3 bg-[#17254E] hover:bg-[#0f1a35] text-white rounded-lg font-semibold transition-all duration-300"
        >
          Go to Dashboard
        </a>
      </div>

      {/* Floating Animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AdminNotFound;
