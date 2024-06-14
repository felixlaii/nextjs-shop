import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

require("dotenv").config();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    floating_name,
    floating_email,
    floating_message,
    floating_date,
    dropzone_file,
    floating_phone,
  } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.HOTMAIL_USER,
      pass: process.env.HOTMAIL_PASS,
    },
    tls: {
      ciphers: "SSLv3",
      rejectUnauthorized: false,
    },
  });

  try {
    const mailOptions = {
      from: process.env.HOTMAIL_EMAIL,
      to: process.env.HOTMAIL_EMAIL,
      replyTo: floating_email,
      subject: `Website activity from ${floating_email}`,
      html: `
        <p>Name: ${floating_name} </p>
        <p>Email: ${floating_email} </p>
        <p>Message: ${floating_message} </p>
      `,
    };

    // Optionally handle file attachment if needed

    const mail = await transporter.sendMail(mailOptions);

    console.log("Message sent: %s", mail.messageId);
    res.status(200).json({ message: "Success: email was sent" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Error sending email" });
  }
}
