// components/Contact.jsx
import Container from "./Container";
import { FaEnvelope, FaLocationDot, FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiStackoverflow, SiX } from "react-icons/si";

export default function Contact() {
  return (
    // 🔥 Reduced top spacing
    <section id="contact" className="relative pt-8 pb-16 sm:pt-10 sm:pb-20">
      <Container>

        {/* Title - Slightly Bigger */}
        <div className="mb-8">
          <div className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            CONTACT ME
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          
          {/* LEFT SIDE — FORM */}
          <div className="rounded-[22px] bg-slate-900 border border-white/10 shadow-[0_28px_80px_rgba(15,23,42,0.20)]">
            <div className="p-7 sm:p-8">
              <p className="text-white/75 text-base leading-relaxed">
                Feel free to reach out for collaborations, opportunities, or any inquiries.
              </p>

              <form className="mt-6 space-y-5">
                <div>
                  <label className="block text-white/90 text-base font-semibold mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-lg bg-white text-slate-900 px-4 py-3 text-base outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-white/90 text-base font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full rounded-lg bg-white text-slate-900 px-4 py-3 text-base outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-white/90 text-base font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    required
                    className="w-full rounded-lg bg-white text-slate-900 px-4 py-3 text-base outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full sm:w-auto px-8 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-base shadow-md transition"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>

          {/* RIGHT SIDE — INFO */}
          <div className="relative">
            <div className="space-y-10">

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-slate-800 grid place-items-center text-white">
                  <FaEnvelope className="text-lg" />
                </div>
                <a
                  href="mailto:kiransubramani0708@gmail.com"
                  className="text-emerald-700 font-bold text-xl sm:text-2xl hover:underline"
                >
                  kiransubramani0708@gmail.com
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-red-600 grid place-items-center text-white">
                  <FaLocationDot className="text-lg" />
                </div>
                <div className="text-emerald-800 font-semibold text-xl sm:text-2xl">
                  Jersey City, NJ, USA(Open to relocation)
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-6 pt-4">
                <a
                  href="https://github.com/KIRAN-SUBRAMANI"
                  target="_blank"
                  rel="noreferrer"
                  className="h-14 w-14 rounded-full bg-black grid place-items-center hover:scale-105 transition"
                >
                  <FaGithub className="text-white text-xl" />
                </a>

                <a
                  href="https://www.linkedin.com/in/kiran-subramani6199/"
                  target="_blank"
                  rel="noreferrer"
                  className="h-14 w-14 rounded-full bg-[#0A66C2] grid place-items-center hover:scale-105 transition"
                >
                  <FaLinkedin className="text-white text-xl" />
                </a>

                <a
                  href="https://stackoverflow.com/users/yourid"
                  target="_blank"
                  rel="noreferrer"
                  className="h-14 w-14 rounded-full bg-[#F48024] grid place-items-center hover:scale-105 transition"
                >
                  <SiStackoverflow className="text-white text-lg" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}