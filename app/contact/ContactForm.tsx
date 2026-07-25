"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  const mailtoHref = `mailto:?subject=${encodeURIComponent(
    `Callback request from ${name || "website visitor"}`
  )}&body=${encodeURIComponent(
    `Name: ${name}\nPhone: ${phone}\nProperty address: ${address}\n\nMessage:\n${message}`
  )}`;

  return (
    <form
      className="grid gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = mailtoHref;
      }}
    >
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
      <button
        type="submit"
        className="rounded-sm bg-[#EA580C] px-6 py-3 text-sm font-semibold text-white hover:bg-[#c94b0a]"
      >
        Send Request
      </button>
    </form>
  );
}
