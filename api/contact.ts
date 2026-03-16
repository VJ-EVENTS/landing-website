import nodemailer from "nodemailer";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, date, guests, message } = req.body as {
    name: string;
    email: string;
    phone: string;
    date: string;
    guests: string;
    message: string;
  };

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }
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

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: "user892342@gmail.com",
      subject: `New Wedding Enquiry – ${name}`,
      text: `
New wedding enquiry from your website:

Name: ${name}
Email: ${email}
Phone: ${phone}
Wedding Date: ${date || "Not specified"}
Guests: ${guests || "Not specified"}

Message:
${message}
      `.trim(),
      html: `
        <div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #111827;">
          <h2 style="margin-bottom: 16px; font-size: 20px; color: #111827;">
            New Wedding Enquiry from Your Website
          </h2>
          <table style="border-collapse: collapse; width: 100%; max-width: 600px; margin-bottom: 24px;">
            <tbody>
              <tr>
                <td style="padding: 6px 8px; font-weight: 600; width: 160px; background: #f3f4f6;">Name</td>
                <td style="padding: 6px 8px; background: #f9fafb;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 6px 8px; font-weight: 600; background: #f3f4f6;">Email</td>
                <td style="padding: 6px 8px; background: #f9fafb;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 6px 8px; font-weight: 600; background: #f3f4f6;">Phone</td>
                <td style="padding: 6px 8px; background: #f9fafb;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 6px 8px; font-weight: 600; background: #f3f4f6;">Wedding Date</td>
                <td style="padding: 6px 8px; background: #f9fafb;">${date || "Not specified"}</td>
              </tr>
              <tr>
                <td style="padding: 6px 8px; font-weight: 600; background: #f3f4f6;">Guests</td>
                <td style="padding: 6px 8px; background: #f9fafb;">${guests || "Not specified"}</td>
              </tr>
            </tbody>
          </table>
          <div>
            <div style="font-weight: 600; margin-bottom: 4px;">Wedding Vision / Message</div>
            <div style="padding: 12px 14px; background: #f9fafb; border-radius: 6px; white-space: pre-wrap;">
              ${message || "No additional message provided."}
            </div>
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: #6b7280;">
            This enquiry was submitted via the VJ Events website contact form.
          </p>
        </div>
      `.trim(),
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending email", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}

