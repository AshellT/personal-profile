/* eslint-env node */

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const RECEIVER_EMAIL = process.env.CONTACT_RECEIVER_EMAIL;
const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL || "Website Requests <onboarding@resend.dev>";
const EMAIL_LOGO_URL =
  process.env.RESEND_EMAIL_LOGO_URL ||
  "https://raw.githubusercontent.com/AshellT/personal-profile/main/src/assets/android-chrome-512x512.png";

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function nl2br(value) {
  return escapeHtml(value).replace(/\n/g, "<br />");
}

function inferRequestType(requestType, message) {
  const normalizedType = String(requestType || "").toLowerCase().trim();
  if (normalizedType) return normalizedType;

  const text = String(message || "").toLowerCase();
  if (/shop|store|checkout|cart|e-?commerce/.test(text)) return "ecommerce";
  if (/portfolio|personal brand|cv|resume/.test(text)) return "portfolio";
  if (/landing page|campaign|lead generation/.test(text)) return "landing-page";
  if (/redesign|revamp|upgrade/.test(text)) return "redesign";
  return "business-website";
}

function templateForType(type) {
  const templates = {
    ecommerce: {
      label: "Ecommerce Store",
      subject: "We received your ecommerce website request",
      nextSteps:
        "I will propose a store structure, payment setup options, and a launch roadmap tailored to your products.",
    },
    portfolio: {
      label: "Portfolio Website",
      subject: "We received your portfolio website request",
      nextSteps:
        "I will prepare recommendations for personal branding, project storytelling, and conversion-focused layout.",
    },
    "landing-page": {
      label: "Landing Page",
      subject: "We received your landing page request",
      nextSteps:
        "I will share a focused landing page strategy with clear CTA structure and performance considerations.",
    },
    redesign: {
      label: "Website Redesign",
      subject: "We received your redesign request",
      nextSteps:
        "I will review your current website direction and send a redesign plan for visual and performance improvements.",
    },
    "business-website": {
      label: "Business Website",
      subject: "We received your website request",
      nextSteps:
        "I will review your brief and send next steps, timeline options, and implementation recommendations.",
    },
  };

  return templates[type] || templates["business-website"];
}

function buildOwnerEmailHtml({ name, email, whatsapp, message, requestType }) {
  const selected = templateForType(requestType);
  return `
  <div style="margin:0;padding:0;background:#050b18;font-family:Inter,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#e2e8f0;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:28px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;background:linear-gradient(140deg,#0b1f3f 0%,#0e2a4f 45%,#113b68 100%);border:1px solid rgba(56,189,248,.35);border-radius:18px;overflow:hidden;box-shadow:0 20px 50px -25px rgba(2,6,23,.95),0 0 24px -8px rgba(34,211,238,.55);">
            <tr>
              <td style="padding:24px 24px 8px 24px;">
                <div style="margin:0 0 12px 0;">
                  <img src="${EMAIL_LOGO_URL}" alt="ATG Logo" width="84" height="84" style="display:block;border:0;outline:none;text-decoration:none;object-fit:contain;" />
                </div>
                <p style="margin:0 0 10px 0;font-size:12px;letter-spacing:.15em;text-transform:uppercase;color:#7dd3fc;font-weight:700;">Website Request</p>
                <h1 style="margin:0;font-size:26px;line-height:1.25;color:#f8fafc;font-weight:800;">New client inquiry received</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 24px 6px 24px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:separate;border-spacing:0 10px;">
                  <tr>
                    <td style="width:130px;color:#93c5fd;font-size:13px;font-weight:700;vertical-align:top;">Name</td>
                    <td style="font-size:15px;color:#f8fafc;">${escapeHtml(name)}</td>
                  </tr>
                  <tr>
                    <td style="width:130px;color:#93c5fd;font-size:13px;font-weight:700;vertical-align:top;">Email</td>
                    <td style="font-size:15px;color:#f8fafc;">${escapeHtml(email)}</td>
                  </tr>
                  <tr>
                    <td style="width:130px;color:#93c5fd;font-size:13px;font-weight:700;vertical-align:top;">WhatsApp</td>
                    <td style="font-size:15px;color:#f8fafc;">${escapeHtml(whatsapp || "Not provided")}</td>
                  </tr>
                  <tr>
                    <td style="width:130px;color:#93c5fd;font-size:13px;font-weight:700;vertical-align:top;">Request type</td>
                    <td style="font-size:15px;color:#f8fafc;">${selected.label}</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 24px 24px 24px;">
                <div style="background:rgba(15,23,42,.55);border:1px solid rgba(56,189,248,.28);border-radius:14px;padding:16px 18px;">
                  <p style="margin:0 0 8px 0;font-size:13px;color:#93c5fd;font-weight:700;">Project Brief</p>
                  <p style="margin:0;font-size:15px;line-height:1.7;color:#e2e8f0;">${nl2br(message)}</p>
                </div>
                <p style="margin:14px 0 0 0;font-size:12px;line-height:1.6;color:#94a3b8;">From Ashell Gonese</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>`;
}

function buildAutoReplyHtml({ name, message, requestType }) {
  const selected = templateForType(requestType);
  return `
  <div style="margin:0;padding:0;background:#f3f8ff;font-family:Inter,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#0f172a;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:28px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;background:#ffffff;border:1px solid #dbeafe;border-radius:16px;overflow:hidden;box-shadow:0 14px 34px -20px rgba(15,23,42,.35);">
            <tr>
              <td style="padding:24px;background:linear-gradient(135deg,#0b1f3f 0%,#0f3a6a 100%);">
                <div style="margin:0 0 12px 0;">
                  <img src="${EMAIL_LOGO_URL}" alt="ATG Logo" width="84" height="84" style="display:block;border:0;outline:none;text-decoration:none;object-fit:contain;" />
                </div>
                <p style="margin:0;font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#7dd3fc;font-weight:700;">Ashell Gonese</p>
                <h1 style="margin:8px 0 0 0;font-size:24px;line-height:1.3;color:#f8fafc;font-weight:800;">Your website request has been received</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:24px;">
                <p style="margin:0 0 14px 0;font-size:16px;line-height:1.65;">Hi ${escapeHtml(name)},</p>
                <p style="margin:0 0 14px 0;font-size:15px;line-height:1.75;color:#334155;">Thank you for reaching out about your ${selected.label.toLowerCase()}. I have received your request and I will review your project brief shortly.</p>
                <p style="margin:0 0 18px 0;font-size:15px;line-height:1.75;color:#334155;">${selected.nextSteps}</p>

                <div style="margin:0 0 18px 0;">
                  <a href="mailto:ashell.gonese@outlook.com?subject=Website%20Request%20Follow-up" style="display:inline-block;background:linear-gradient(135deg,#0ea5e9,#2563eb);color:#ffffff;font-weight:700;font-size:14px;line-height:1;text-decoration:none;padding:12px 16px;border-radius:10px;box-shadow:0 10px 24px -14px rgba(37,99,235,.9);">Reply with More Details</a>
                </div>

                <div style="background:#f8fbff;border:1px solid #dbeafe;border-radius:12px;padding:14px 16px;margin:0 0 18px 0;">
                  <p style="margin:0 0 8px 0;font-size:13px;color:#1d4ed8;font-weight:700;">Your submitted brief</p>
                  <p style="margin:0;font-size:14px;line-height:1.7;color:#334155;">${nl2br(message)}</p>
                </div>

                <p style="margin:0;font-size:14px;line-height:1.7;color:#475569;">Best regards,<br /><strong style="color:#0f172a;">Ashell Gonese</strong><br />Full-Stack Systems Engineer<br />From Ashell Gonese</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>`;
}

function buildOwnerEmailText({ name, email, whatsapp, message, requestType }) {
  const selected = templateForType(requestType);
  return [
    "New client inquiry received",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `WhatsApp: ${whatsapp || "Not provided"}`,
    `Request type: ${selected.label}`,
    "",
    "Project Brief:",
    message,
    "",
    "From Ashell Gonese",
  ].join("\n");
}

function buildAutoReplyText({ name, message, requestType }) {
  const selected = templateForType(requestType);
  return [
    `Hi ${name},`,
    "",
    `Thank you for reaching out about your ${selected.label.toLowerCase()}.`,
    selected.nextSteps,
    "",
    "Your submitted brief:",
    message,
    "",
    "Best regards,",
    "Ashell Gonese",
    "Full-Stack Systems Engineer",
    "From Ashell Gonese",
  ].join("\n");
}

function parseBody(req) {
  if (!req.body) return {};
  if (typeof req.body === "string") {
    try {
      return JSON.parse(req.body);
    } catch {
      return {};
    }
  }
  return req.body;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({
      error: "Server email configuration is missing (RESEND_API_KEY).",
    });
  }

  if (!RECEIVER_EMAIL) {
    return res.status(500).json({
      error: "Server email configuration is missing (CONTACT_RECEIVER_EMAIL).",
    });
  }

  const { name, email, whatsapp, message, requestType } = parseBody(req);

  const normalizedRequestType = inferRequestType(requestType, message);
  const selectedTemplate = templateForType(normalizedRequestType);

  if (!name || !email || !message) {
    return res.status(400).json({
      error: "name, email, and message are required.",
    });
  }

  try {
    await Promise.all([
      resend.emails.send({
        from: FROM_EMAIL,
        to: [RECEIVER_EMAIL],
        replyTo: email,
        subject: `New Website Request from ${name}`,
        html: buildOwnerEmailHtml({
          name,
          email,
          whatsapp,
          message,
          requestType: normalizedRequestType,
        }),
        text: buildOwnerEmailText({
          name,
          email,
          whatsapp,
          message,
          requestType: normalizedRequestType,
        }),
      }),
      resend.emails.send({
        from: FROM_EMAIL,
        to: [email],
        subject: selectedTemplate.subject,
        html: buildAutoReplyHtml({
          name,
          message,
          requestType: normalizedRequestType,
        }),
        text: buildAutoReplyText({
          name,
          message,
          requestType: normalizedRequestType,
        }),
      }),
    ]);

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Resend error:", error);
    return res.status(500).json({ error: "Failed to send email." });
  }
}
