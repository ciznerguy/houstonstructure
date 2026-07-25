"use client";

import { useState } from "react";
import { BUSINESS } from "@/lib/business";
import { submitNetlifyForm } from "@/lib/netlify-forms";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      await submitNetlifyForm("contact-page", { name, phone, address, message });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="py-6 text-center">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#E4ECD8]">
          <svg viewBox="0 0 24 24" fill="none" stroke="#4A6B3A" strokeWidth="2.5" width={22} height={22}>
            <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="font-semibold text-[#0B1F3A]">Message sent!</div>
        <p className="mt-1 text-sm text-slate-600">
          We&rsquo;ll get back to you the same business day.
        </p>
      </div>
    );
  }

  return (
    <form name="contact-page" data-netlify="true" netlify-honeypot="bot-field" className="grid gap-4" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="contact-page" />
      <p hidden>
        <label>
          Don&rsquo;t fill this out: <input name="bot-field" />
        </label>
      </p>
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
        <label className="text-sm font-medium text-slate-700">Phone</label>
        <input
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="tel"
          className="mt-1 w-full rounded-sm border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#0B1F3A]"
        />
      </div>
      <div>
        <label className="text-sm font-medium text-slate-700">Property address</label>
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="mt-1 w-full rounded-sm border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#0B1F3A]"
        />
      </div>
      <div>
        <label className="text-sm font-medium text-slate-700">
          What&rsquo;s going on?
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
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
        className="rounded-sm bg-[#EA580C] px-6 py-3 text-sm font-semibold text-white hover:bg-[#c94b0a] disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send Request"}
      </button>
    </form>
  );
}
