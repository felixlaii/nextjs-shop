import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
require("dotenv").config();
interface FormData {
  floating_name: string;
  floating_email: string;
  floating_phone: string;
  floating_date: string;
  floating_qty: number;
  floating_message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const formData: FormData = req.body;

      // Log the received form data
      console.log("Received form data:", formData);

      // Example: Send email using Nodemailer
      const transporter = nodemailer.createTransport({
        host: "smtp.example.com", // Update with your SMTP host
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.HOTMAIL_EMAIL, // Update with your email credentials
          pass: process.env.HOTMAIL_PASS, // Update with your email password
        },
      });

      // Email content
      const mailOptions = {
        from: "felix.lai@hotmail.com",
        to: "felix.lai@hotmail.com", // Update with recipient's email
        subject: "New Form Submission",
        html: `
          <p>You have received a new form submission:</p>
          <ul>
            <li>Name: ${formData.floating_name}</li>
            <li>Email: ${formData.floating_email}</li>
            <li>Phone: ${formData.floating_phone}</li>
            <li>Date: ${formData.floating_date}</li>
            <li>Quantity: ${formData.floating_qty}</li>
            <li>Message: ${formData.floating_message}</li>
          </ul>
        `,
      };

      // Send mail with defined transport object
      await transporter.sendMail(mailOptions);

      // Respond with success
      res.status(200).json({ message: "Form data received successfully" });
    } catch (error) {
      console.error("Error processing form data:", error);
      res.status(500).json({ error: "Failed to process form data" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
