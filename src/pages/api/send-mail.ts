import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const {
      floating_name,
      floating_email,
      floating_phone,
      floating_date,
      floating_message,
    } = req.body;

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_PASS, // Your Gmail password or app-specific password
      },
    });

    const mailOptions = {
      from: floating_email,
      to: "your-email@gmail.com", // Your email address
      subject: "Contact Form Submission",
      text: `Name: ${floating_name}\nEmail: ${floating_email}\nPhone: ${floating_phone}\nDate: ${floating_date}\nMessage: ${floating_message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      res.status(500).json({ message: "Error sending email", error });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
