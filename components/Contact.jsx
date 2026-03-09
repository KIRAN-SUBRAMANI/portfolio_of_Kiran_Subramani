"use client";

import { useState } from "react";
import Container from "./Container";
import ReCAPTCHA from "react-google-recaptcha";
import { FaEnvelope, FaLocationDot, FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiStackoverflow } from "react-icons/si";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    captchaToken: ""
  });

  const [status, setStatus] = useState({
    state: "idle",
    msg: ""
  });

  function updateField(key) {
    return (e) => setForm((prev) => ({ ...prev, [key]: e.target.value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setStatus({ state: "loading", msg: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus({
          state: "error",
          msg: data.error || "Something went wrong."
        });
        return;
      }

      setStatus({
        state: "success",
        msg: "Message sent successfully."
      });

      setForm({
        name: "",
        email: "",
        message: "",
        captchaToken: ""
      });
    } catch {
      setStatus({
        state: "error",
        msg: "Network error. Please try again."
      });
    }
  }

  return (
    <section id="contact" className="relative pt-8 pb-16 sm:pt-10 sm:pb-20">
      <Container>
        <div className="mb-8">
          <div className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            CONTACT ME
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="rounded-[22px] bg-slate-900 border border-white/10 shadow-[0_28px_80px_rgba(15,23,42,0.20)]">
            <div className="p-7 sm:p-8">
              <p className="text-white/75 text-base leading-relaxed">
                Feel free to reach out for collaborations, opportunities, or any inquiries.
              </p>

              <form className="mt-6 space-y-5" onSubmit={onSubmit}>
                <div>
                  <label className="block text-white/90 text-base font-semibold mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={updateField("name")}
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
                    value={form.email}
                    onChange={updateField("email")}
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
                    value={form.message}
                    onChange={updateField("message")}
                    className="w-full rounded-lg bg-white text-slate-900 px-4 py-3 text-base outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                  />
                </div>

                {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ? (
                  <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                    onChange={(token) =>
                      setForm((prev) => ({ ...prev, captchaToken: token || "" }))
                    }
                  />
                ) : null}

                <button
                  type="submit"
                  disabled={status.state === "loading"}
                  className="mt-2 w-full sm:w-auto px-8 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-base shadow-md transition disabled:opacity-60"
                >
                  {status.state === "loading" ? "SENDING..." : "SEND MESSAGE"}
                </button>

                {status.state === "success" && (
                  <p className="text-emerald-300 text-sm">{status.msg}</p>
                )}

                {status.state === "error" && (
                  <p className="text-red-300 text-sm">{status.msg}</p>
                )}
              </form>
            </div>
          </div>

          <div className="relative">
            <div className="space-y-10">
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

              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-red-600 grid place-items-center text-white">
                  <FaLocationDot className="text-lg" />
                </div>
                <div className="text-emerald-800 font-semibold text-xl sm:text-2xl">
                  Jersey City, NJ, USA (Open to relocation)
                </div>
              </div>

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