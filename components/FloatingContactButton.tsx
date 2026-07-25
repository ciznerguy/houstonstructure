"use client";

import { useState } from "react";
import { BUSINESS } from "@/lib/business";
import { submitNetlifyForm } from "@/lib/netlify-forms";

export default function FloatingContactButton() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      await submitNetlifyForm("quick-contact", { name, email, phone });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  function closeAndReset() {
    setOpen(false);
    setStatus("idle");
    setName("");
    setEmail("");
    setPhone("");
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Contact us"
        className="fixed left-4 top-[84px] z-40 inline-flex items-center gap-2 rounded-full bg-[#EA580C] px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-[#c94b0a]"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width={16} height={16}>
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Contact Us
      </button>

      {/* Always rendered in the DOM (so Netlify's static form scanner can detect it) — only visibility is toggled */}
      <div
        className={`fixed inset-0 z-50 items-center justify-center bg-black/50 px-4 ${open ? "flex" : "hidden"}`}
        onClick={closeAndReset}
      >
        <div
          className="w-full max-w-sm rounded-sm bg-white p-6 shadow-xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-bold text-[#0B1F3A]">Contact Us</h2>
            <button
              onClick={closeAndReset}
              aria-label="Close"
              className="text-slate-400 hover:text-slate-700"
            >
              ✕
            </button>
          </div>

          {status === "sent" ? (
            <div className="py-4 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#E4ECD8]">
                <svg viewBox="0 0 24 24" fill="none" stroke="#4A6B3A" strokeWidth="2.5" width={22} height={22}>
                  <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="font-semibold text-[#0B1F3A]">Message sent!</div>
              <p className="mt-1 text-sm text-slate-600">
                We&rsquo;ll get back to you the same business day.
              </p>
              <button
                onClick={closeAndReset}
                className="mt-4 rounded-sm border border-slate-300 px-5 py-2 text-sm text-slate-600 hover:border-[#0B1F3A]"
              >
                Close
              </button>
            </div>
          ) : (
            <form
              name="quick-contact"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="grid gap-4"
            >
              <input type="hidden" name="form-name" value="quick-contact" />
              <p hidden>
                <label>
                  Don&rsquo;t fill this out: <input name="bot-field" />
                </label>
              </p>
              <div>
                <label className="text-sm font-medium text-slate-700">Name</label>
                <input
                  required
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 w-full rounded-sm border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#0B1F3A]"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full rounded-sm border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#0B1F3A]"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Phone</label>
                <input
                  required
                  type="tel"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-1 w-full rounded-sm border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#0B1F3A]"
                />
              </div>

              {status === "error" && (
                <div className="rounded-sm bg-[#F6E2D3] px-3 py-2 text-sm text-[#B8420F]">
                  Something went wrong sending that. Please call us instead.
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="rounded-sm bg-[#EA580C] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#c94b0a] disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Send"}
              </button>
            </form>
          )}

          <a
            href={BUSINESS.phoneHref}
            className="mt-4 block text-center text-sm text-slate-500 hover:text-[#0B1F3A]"
          >
            Or call {BUSINESS.phone}
          </a>
        </div>
      </div>
    </>
  );
}
