"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { BUSINESS } from "@/lib/business";
import { submitNetlifyForm } from "@/lib/netlify-forms";
import { saveLeadContact } from "@/lib/lead-handoff";

// Step one of a two-step flow. It asks for the least it can and sends the lead
// the moment it has it, so a visitor who goes no further is still a lead we can
// call. The project questions come afterwards on /estimate.
export default function ContactForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      await submitNetlifyForm("contact-page", { name, email, phone });
      // Only after the email is confirmed sent: the lead is safe either way now.
      saveLeadContact({ name, email, phone });
      router.push("/estimate");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      name="contact-page"
      data-netlify="true"
      netlify-honeypot="bot-field"
      className="grid gap-4"
      onSubmit={handleSubmit}
    >
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
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 w-full rounded-sm border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#0B1F3A]"
        />
      </div>
      <div>
        <label className="text-sm font-medium text-slate-700">Phone</label>
        <input
          required
          name="phone"
          inputMode="numeric"
          maxLength={10}
          pattern="[0-9]{10}"
          title="Enter a 10-digit US phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, "").slice(0, 10))}
          type="tel"
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

      {status === "error" && (
        <div className="rounded-sm bg-[#F6E2D3] px-3 py-2 text-sm text-[#B8420F]">
          Something went wrong sending that. Please call us instead at {BUSINESS.phone}.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-sm bg-[#EA580C] px-6 py-3 text-sm font-semibold text-white hover:bg-[#c94b0a] disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send Request"}
      </button>
      <p className="text-xs text-slate-500">
        Next we&rsquo;ll ask a few optional questions about the project so you can see a cost
        range. You can skip that and we&rsquo;ll still call you.
      </p>
    </form>
  );
}
