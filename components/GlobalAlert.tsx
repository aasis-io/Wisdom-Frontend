"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const GlobalAlert = () => {
  const [alert, setAlert] = useState<{ title: string; link: string; image: string } | null>(null);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const fetchAlert = useCallback(async () => {
    try {
      const res = await fetch(`${BASE_URL}/getNotices`);
      const json = await res.json();
      const data = Array.isArray(json) ? json[0] : json;

      if (!data) return;

      const imageUrl = data.image ? `${BASE_URL}${data.image}` : "";

      setAlert({ title: data.title, link: data.link, image: imageUrl });

      const dismissedUntil = localStorage.getItem("alertClosedUntil");
      if (!dismissedUntil || Date.now() > Number(dismissedUntil)) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    } catch {
      setVisible(false);
    } finally {
      setLoading(false);
    }
  }, [BASE_URL]);

  useEffect(() => {
    fetchAlert();
  }, [fetchAlert]);

  const handleClose = () => {
    const expiryTime = Date.now() + 60 * 60 * 1000; // 1 hour
    localStorage.setItem("alertClosedUntil", expiryTime.toString());
    setVisible(false);
  };

  if (!visible || !alert || loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/20 backdrop-blur-[1px] px-4">
      <div className="w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl animate-[fadeIn_.25s_ease] bg-black">
        <div className="relative w-full aspect-[4/3]">
          <Image src={alert.image} alt={alert.title} fill className="object-cover" sizes="(max-width:768px) 100vw, 672px" />

          <button
            onClick={handleClose}
            className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition z-10"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GlobalAlert;
