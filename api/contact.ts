import nodemailer from "nodemailer";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const {
    name,
    email,
    phone,
    date,
    guestRange,
    budget,
    weddingType,
    services,
    message,
  } = req.body as {
    name: string;
    email: string;
    phone: string;
    date?: string;
    guestRange?: string;
    budget?: string;
    weddingType?: string;
    services?: string[];
    message?: string;
  };

  if (!name || !email || !phone) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const servicesList =
    Array.isArray(services) && services.length > 0
      ? services.join(", ")
      : "Not specified";

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const row = (label: string, value: string) => `
      <tr>
        <td style="padding:8px 10px;font-weight:600;width:180px;background:#f3f4f6;vertical-align:top;">${label}</td>
        <td style="padding:8px 10px;background:#f9fafb;">${value}</td>
      </tr>`;

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: "bishtvijay332@gmail.com",
      subject: `New Wedding Enquiry – ${name} | ${budget || "Budget N/A"} | ${guestRange || "Guests N/A"}`,
      text: `
New Wedding Enquiry from VJ Events Website

Name:          ${name}
Phone:         ${phone}
Email:         ${email}
Wedding Date:  ${date || "Not specified"}
Guest Count:   ${guestRange || "Not specified"}
Budget:        ${budget || "Not specified"}
Event Type:    ${weddingType || "Not specified"}
Services:      ${servicesList}

Message:
${message || "No message provided."}
      `.trim(),
      html: `
        <div style="font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;line-height:1.7;color:#111827;max-width:640px;">
          <div style="background:#1a3a2a;padding:24px 28px;border-radius:8px 8px 0 0;">
            <h2 style="margin:0;font-size:22px;color:#ffffff;">New Wedding Enquiry</h2>
            <p style="margin:6px 0 0;font-size:14px;color:#d4af37;">VJ Events — Jim Corbett</p>
          </div>

          <div style="background:#ffffff;padding:24px 28px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;">
            <table style="border-collapse:collapse;width:100%;margin-bottom:24px;font-size:14px;">
              <tbody>
                ${row("Name", name)}
                ${row("Phone / WhatsApp", phone)}
                ${row("Email", email)}
                ${row("Wedding Date", date || "Not specified")}
                ${row("Guest Count", guestRange || "Not specified")}
                ${row("Budget", budget || "Not specified")}
                ${row("Event Type", weddingType || "Not specified")}
                ${row("Services Needed", servicesList)}
              </tbody>
            </table>

            <div style="margin-top:16px;">
              <div style="font-weight:600;margin-bottom:6px;font-size:14px;">Additional Message</div>
              <div style="padding:12px 14px;background:#f9fafb;border-radius:6px;white-space:pre-wrap;font-size:14px;color:#374151;">
                ${message || "No additional message provided."}
              </div>
            </div>

            <p style="margin-top:24px;font-size:12px;color:#9ca3af;">
              Submitted via the VJ Events website contact form.
            </p>
          </div>
        </div>
      `.trim(),
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending email", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
