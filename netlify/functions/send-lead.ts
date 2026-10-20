import type { Handler } from "@netlify/functions";
import nodemailer from "nodemailer";
import { BUSINESS } from "../../lib/business";

const FIELD_LABELS: Record<string, string> = {
  name: "Name",
  email: "Email",
  phone: "Phone",
  address: "Property address",
  message: "Message",
};

// Bot signature seen 2026-10-20: a random mixed-case name with no spaces and
// runs of capitals ("qmHQnohesSDPrupSvLfr"), and a gmail address dotted between most letters
// ("d.o.se.m.a.t.u.49@gmail.com", gmail ignores the dots). Either one alone is
// enough. Real names like "McDonald" have one case flip, real addresses like
// "j.r.smith" have two dots, so neither trips this.
function looksLikeSpam(fields: Record<string, string>): boolean {
  const name = fields.name?.trim() ?? "";
  const caseFlips = (name.match(/[a-z][A-Z]/g) ?? []).length;
  const gibberishName =
    !/\s/.test(name) && name.length >= 10 && caseFlips >= 3 && /[A-Z]{2}/.test(name);

  const localPart = (fields.email ?? "").split("@")[0];
  const dottedEmail = (localPart.match(/\./g) ?? []).length >= 4;

  return gibberishName || dottedEmail;
}

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  let payload: { formName?: string; fields?: Record<string, string> };
  try {
    payload = JSON.parse(event.body ?? "{}");
  } catch {
    return { statusCode: 400, body: "Invalid JSON" };
  }

  const { formName, fields } = payload;
  if (!formName || !fields) {
    return { statusCode: 400, body: "Missing formName or fields" };
  }

  // Honeypot: silently accept but do nothing if the bot field was filled
  if (fields["bot-field"]) {
    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  }

  // Silently accept but do nothing if every real field is blank (bots that skip the honeypot)
  const hasContent = Object.entries(fields).some(
    ([key, value]) => key !== "bot-field" && value?.trim()
  );
  if (!hasContent) {
    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  }

  const bodyText = Object.entries(fields)
    .filter(([key]) => key !== "bot-field")
    .map(([key, value]) => `${FIELD_LABELS[key] ?? key}: ${value}`)
    .join("\n");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ciznerguy@gmail.com",
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  // Spam still reaches Guy, tagged, so a real lead caught by mistake is not
  // lost, but it never reaches Levi and the client skips the GA4 lead event.
  const spam = looksLikeSpam(fields);

  try {
    await transporter.sendMail({
      from: '"Houston Structure Website" <ciznerguy@gmail.com>',
      to: spam ? "ciznerguy@gmail.com" : BUSINESS.leadEmails.join(", "),
      replyTo: fields.email || undefined,
      subject: `${spam ? "[SPAM] " : ""}${BUSINESS.leadEmailSubject} (${formName})`,
      text: bodyText,
    });
    return { statusCode: 200, body: JSON.stringify({ ok: true, spam }) };
  } catch (err) {
    console.error("send-lead error:", err);
    return { statusCode: 502, body: JSON.stringify({ ok: false, error: "send_failed" }) };
  }
};
