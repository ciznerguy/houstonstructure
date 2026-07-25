"use client";

import { useState } from "react";
import { BUSINESS } from "@/lib/business";

export default function FloatingContactButton() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const mailtoHref = `mailto:${BUSINESS.leadEmails.join(",")}?subject=${encodeURIComponent(
    BUSINESS.leadEmailSubject
  )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}`)}`;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    window.location.href = mailtoHref;
    setOpen(false);
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

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-sm rounded-sm bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-bold text-[#0B1F3A]">Contact Us</h2>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="text-slate-400 hover:text-slate-700"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="grid gap-4">
              <div>
                <label className="text-sm font-medium text-slate-700">Name</label>
                <input
                  required
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
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-1 w-full rounded-sm border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#0B1F3A]"
                />
              </div>
              <button
                type="submit"
                className="rounded-sm bg-[#EA580C] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#c94b0a]"
              >
                Send
              </button>
            </form>

            <a
              href={BUSINESS.phoneHref}
              className="mt-4 block text-center text-sm text-slate-500 hover:text-[#0B1F3A]"
            >
              Or call {BUSINESS.phone}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
