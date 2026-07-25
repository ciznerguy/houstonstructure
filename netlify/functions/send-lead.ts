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

  try {
    await transporter.sendMail({
      from: '"Houston Structure Website" <ciznerguy@gmail.com>',
      to: BUSINESS.leadEmails.join(", "),
      replyTo: fields.email || undefined,
      subject: `${BUSINESS.leadEmailSubject} (${formName})`,
      text: bodyText,
    });
    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch (err) {
    console.error("send-lead error:", err);
    return { statusCode: 502, body: JSON.stringify({ ok: false, error: "send_failed" }) };
  }
};
