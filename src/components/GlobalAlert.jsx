import { X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { getAlert } from "../services/api";

const GlobalAlert = () => {
  const [alert, setAlert] = useState(null);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetchAlert();
  }, []);

  const fetchAlert = async () => {
    try {
      const res = await getAlert();

      const data = Array.isArray(res) ? res[0] : res;

      if (!data) return;

      const imageUrl = data.image ? `${BASE_URL}${data.image}` : "";

      const formatted = {
        title: data.title,
        link: data.link,
        image: imageUrl,
      };

      setAlert(formatted);

      // ✅ EXPIRY-BASED VISIBILITY LOGIC
      const dismissedUntil = localStorage.getItem("alertClosedUntil");

      if (!dismissedUntil || Date.now() > Number(dismissedUntil)) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    } catch (err) {
      console.error("Failed to load alert", err);
      setVisible(false);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    const expiryTime = Date.now() + 60 * 60 * 1000; // 1 hour

    localStorage.setItem("alertClosedUntil", expiryTime.toString());
    setVisible(false);
  };

  if (!visible || !alert || loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/20 backdrop-blur-[1px] px-4">
      <div className="w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl animate-[fadeIn_.25s_ease] bg-black">
        {/* IMAGE CONTAINER (4:3 RATIO FRIENDLY) */}
        <div className="relative w-full aspect-[4/3]">
          <img
            src={alert.image}
            alt={alert.title}
            className="w-full h-full object-cover"
          />

          {/* DARK OVERLAY FOR TEXT READABILITY */}
          {/* <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/20" /> */}

          {/* CLOSE BUTTON */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition"
          >
            <X size={18} />
          </button>

          {/* CENTERED TITLE */}
          {/* <div className="absolute inset-0 flex  justify-center px-6 text-center">
            <h2 className="text-white text-2xl sm:text-3xl font-semibold leading-snug drop-shadow-lg">
              {alert.title}
            </h2>
          </div> */}
        </div>

        {/* 
        LINK SECTION (COMMENTED OUT FOR NOW)
  
        {alert.link && (
          <div className="px-6 py-4 flex items-center justify-between bg-gray-50">
            <a
              href={alert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[#17254e] hover:underline truncate"
            >
              <LinkIcon size={14} />
              <span className="truncate max-w-xs">{alert.link}</span>
              <ExternalLink size={12} className="opacity-60" />
            </a>
  
            <button
              onClick={handleClose}
              className="text-xs font-medium text-gray-500 hover:text-gray-700"
            >
              Dismiss
            </button>
          </div>
        )}
        */}
      </div>
    </div>
  );
};

export default GlobalAlert;
