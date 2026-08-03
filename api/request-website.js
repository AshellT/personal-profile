/* eslint-env node */

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const RECEIVER_EMAIL = process.env.CONTACT_RECEIVER_EMAIL;
const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL || "Website Requests <onboarding@resend.dev>";
const EMAIL_LOGO_URL =
  process.env.RESEND_EMAIL_LOGO_URL ||
  "https://ashelltinotenda.co.zw/brand/atg-logo-a-master-512.png";

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
  <div style="margin:0;padding:0;background:#F7F5F1;font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#0E1116;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;background:#ffffff;border:1px solid #E4E0D8;overflow:hidden;">
            <tr>
              <td style="height:4px;background:#1B4F72;font-size:0;line-height:0;">&nbsp;</td>
            </tr>
            <tr>
              <td style="padding:28px 28px 12px 28px;">
                <img src="${EMAIL_LOGO_URL}" alt="ATG" width="64" height="64" style="display:block;border:0;outline:none;text-decoration:none;object-fit:contain;" />
                <p style="margin:18px 0 8px 0;font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#1B4F72;font-weight:700;">Website request</p>
                <h1 style="margin:0;font-size:26px;line-height:1.25;color:#0E1116;font-weight:600;">New client inquiry</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 28px 8px 28px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:separate;border-spacing:0 12px;">
                  <tr>
                    <td style="width:120px;color:#5C6570;font-size:13px;font-weight:600;vertical-align:top;">Name</td>
                    <td style="font-size:15px;color:#0E1116;">${escapeHtml(name)}</td>
                  </tr>
                  <tr>
                    <td style="width:120px;color:#5C6570;font-size:13px;font-weight:600;vertical-align:top;">Email</td>
                    <td style="font-size:15px;color:#0E1116;">${escapeHtml(email)}</td>
                  </tr>
                  <tr>
                    <td style="width:120px;color:#5C6570;font-size:13px;font-weight:600;vertical-align:top;">WhatsApp</td>
                    <td style="font-size:15px;color:#0E1116;">${escapeHtml(whatsapp || "Not provided")}</td>
                  </tr>
                  <tr>
                    <td style="width:120px;color:#5C6570;font-size:13px;font-weight:600;vertical-align:top;">Type</td>
                    <td style="font-size:15px;color:#0E1116;">${selected.label}</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 28px 28px 28px;">
                <div style="background:#F7F5F1;border:1px solid #E4E0D8;padding:18px 20px;">
                  <p style="margin:0 0 8px 0;font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#1B4F72;font-weight:700;">Project brief</p>
                  <p style="margin:0;font-size:15px;line-height:1.7;color:#0E1116;">${nl2br(message)}</p>
                </div>
                <p style="margin:16px 0 0 0;font-size:12px;line-height:1.6;color:#5C6570;">ashelltinotenda.co.zw</p>
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
  <div style="margin:0;padding:0;background:#F7F5F1;font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#0E1116;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;background:#ffffff;border:1px solid #E4E0D8;overflow:hidden;">
            <tr>
              <td style="height:4px;background:#1B4F72;font-size:0;line-height:0;">&nbsp;</td>
            </tr>
            <tr>
              <td style="padding:28px 28px 8px 28px;">
                <img src="${EMAIL_LOGO_URL}" alt="ATG" width="64" height="64" style="display:block;border:0;outline:none;text-decoration:none;object-fit:contain;" />
                <p style="margin:18px 0 8px 0;font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#1B4F72;font-weight:700;">Ashell Gonese</p>
                <h1 style="margin:0;font-size:26px;line-height:1.3;color:#0E1116;font-weight:600;">Request received</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:12px 28px 28px 28px;">
                <p style="margin:0 0 14px 0;font-size:16px;line-height:1.65;color:#0E1116;">Hi ${escapeHtml(name)},</p>
                <p style="margin:0 0 14px 0;font-size:15px;line-height:1.75;color:#5C6570;">Thank you for reaching out about your ${selected.label.toLowerCase()}. I have received your request and will review the brief shortly.</p>
                <p style="margin:0 0 22px 0;font-size:15px;line-height:1.75;color:#5C6570;">${selected.nextSteps}</p>

                <div style="margin:0 0 22px 0;">
                  <a href="mailto:ashell.gonese@outlook.com?subject=Website%20Request%20Follow-up" style="display:inline-block;background:#1B4F72;color:#ffffff;font-weight:600;font-size:14px;line-height:1;text-decoration:none;padding:14px 18px;">Reply with more details</a>
                </div>

                <div style="background:#F7F5F1;border:1px solid #E4E0D8;padding:16px 18px;margin:0 0 22px 0;">
                  <p style="margin:0 0 8px 0;font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#1B4F72;font-weight:700;">Your submitted brief</p>
                  <p style="margin:0;font-size:14px;line-height:1.7;color:#0E1116;">${nl2br(message)}</p>
                </div>

                <p style="margin:0;font-size:14px;line-height:1.7;color:#5C6570;">Best regards,<br /><strong style="color:#0E1116;">Ashell Gonese</strong><br />Full-Stack Systems Engineer<br />ATG Digital Agency</p>
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
