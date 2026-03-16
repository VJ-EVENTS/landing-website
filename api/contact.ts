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
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: "vjevents@gmail.com",
      subject: `Wedding Enquiry from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Wedding Date: ${date}
Guests: ${guests}

Message:
${message}
      `.trim(),
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending email", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}

