"use client";

import { FaArrowUp, FaStar, FaCodeBranch } from "react-icons/fa6";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-20 bg-[#2f2f2f] text-white border-t border-white/10">

      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Left Text */}
        <div className="text-sm text-white/80 text-center sm:text-left">
          © {new Date().getFullYear()} Developer Portfolio by{" "}
          <span className="text-emerald-400 font-semibold">
            Kiran Subramani
          </span>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-6 text-white/90 font-medium">

          <a
            href="https://github.com/KIRAN-SUBRAMANI"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-emerald-400 transition"
          >
            <FaStar className="text-sm" />
            STAR
          </a>

          <a
            href="https://github.com/KIRAN-SUBRAMANI"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-emerald-400 transition"
          >
            <FaCodeBranch className="text-sm" />
            FORK
          </a>

        </div>
      </div>

      {/* Scroll To Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-[0_18px_45px_rgba(16,185,129,0.35)] flex items-center justify-center transition"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>

    </footer>
  );
}