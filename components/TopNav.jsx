"use client";

import { useEffect, useMemo, useState } from "react";
import Container from "./Container";

export default function TopNav() {
  const links = useMemo(
    () => [
      { id: "about", label: "About" },
      { id: "experience", label: "Experience" },
      { id: "skills", label: "Skills" },
      { id: "projects", label: "Projects" },
      { id: "education", label: "Education" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section tracking
  useEffect(() => {
    const ids = links.map((l) => l.id);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      {
        root: null,
        threshold: [0.15, 0.25, 0.4, 0.6],
        rootMargin: "-20% 0px -70% 0px",
      }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [links]);

  function goTo(id) {
    setOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <header className="sticky top-0 z-50">
      {/* Top glass bar */}
      <div
        className={[
          "border-b",
          scrolled ? "border-slate-200/60 bg-white/70" : "border-transparent bg-white/30",
          "backdrop-blur-xl",
        ].join(" ")}
      >
        <Container>
          <div className="flex h-16 items-center justify-between">
            {/* Brand */}
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="group flex items-center gap-2 font-extrabold tracking-tight text-slate-900"
              aria-label="Go to top"
            >
              <span className="relative">
                <span className="text-lg">KIRAN SUBRAMANI</span>
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-indigo-500 to-emerald-500 transition-all group-hover:w-full" />
              </span>
              <span className="hidden text-xs font-semibold text-slate-500 md:inline">
                • SWE
              </span>
            </button>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-1 md:flex">
              {links.map((l) => {
                const isActive = active === l.id;
                return (
                  <button
                    key={l.id}
                    onClick={() => goTo(l.id)}
                    className={[
                      "relative rounded-full px-4 py-2 text-sm font-semibold transition",
                      isActive
                        ? "text-slate-900"
                        : "text-slate-600 hover:text-slate-900",
                    ].join(" ")}
                  >
                    {/* active pill */}
                    {isActive && (
                      <span className="absolute inset-0 -z-10 rounded-full bg-slate-900/5 ring-1 ring-slate-200/60" />
                    )}
                    {l.label}
                  </button>
                );
              })}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              {/* Resume */}
              <a
                href="/Kiran Subramani.pdf"
                className="hidden rounded-full bg-slate-900 px-5 py-2 text-sm font-extrabold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800 md:inline-flex"
              >
                Resume
              </a>

              {/* Mobile menu button */}
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/60 bg-white/70 shadow-sm backdrop-blur transition hover:bg-white md:hidden"
                onClick={() => setOpen((v) => !v)}
                aria-label="Toggle menu"
                aria-expanded={open}
              >
                <span className="relative block h-4 w-5">
                  <span
                    className={[
                      "absolute left-0 top-0 h-0.5 w-5 bg-slate-900 transition",
                      open ? "translate-y-[7px] rotate-45" : "",
                    ].join(" ")}
                  />
                  <span
                    className={[
                      "absolute left-0 top-[7px] h-0.5 w-5 bg-slate-900 transition",
                      open ? "opacity-0" : "opacity-100",
                    ].join(" ")}
                  />
                  <span
                    className={[
                      "absolute left-0 top-[14px] h-0.5 w-5 bg-slate-900 transition",
                      open ? "-translate-y-[7px] -rotate-45" : "",
                    ].join(" ")}
                  />
                </span>
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="border-b border-slate-200/60 bg-white/80 backdrop-blur-xl md:hidden">
          <Container>
            <div className="py-4">
              <div className="grid gap-2">
                {links.map((l) => {
                  const isActive = active === l.id;
                  return (
                    <button
                      key={l.id}
                      onClick={() => goTo(l.id)}
                      className={[
                        "flex items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition",
                        isActive
                          ? "border-slate-200 bg-slate-900/5 text-slate-900"
                          : "border-slate-200/60 bg-white/70 text-slate-700 hover:bg-white",
                      ].join(" ")}
                    >
                      {l.label}
                      <span className="text-slate-400">→</span>
                    </button>
                  );
                })}

                <a
                  href="/Kiran Subramani.pdf"
                  className="mt-2 inline-flex items-center justify-center rounded-2xl bg-slate-900 px-4 py-3 text-sm font-extrabold text-white transition hover:bg-slate-800"
                  onClick={() => setOpen(false)}
                >
                  Download Resume
                </a>
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}