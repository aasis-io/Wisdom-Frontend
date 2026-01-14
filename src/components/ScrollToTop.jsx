import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  // Show / hide button on scroll
  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed z-[60]
        flex h-11 w-11 items-center justify-center
        rounded-full bg-[#17254e] text-white
        shadow-lg transition-all duration-300
        hover:scale-110 hover:shadow-xl

        /* Positioning */
        right-8 bottom-6
        sm:right-5 sm:bottom-8
        lg:right-6 lg:bottom-6

        /* iOS safe area */
        pb-[env(safe-area-inset-bottom)]

        ${visible ? "opacity-100" : "pointer-events-none opacity-0"}
      `}
    >
      <ArrowUp size={18} strokeWidth={2.2} />
    </button>
  );
}
