import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: any) {
  try {
    const {
      floating_name,
      floating_email,
      floating_phone,
      floating_date,
      floating_qty,
      floating_message,
    } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "hotmail",
      host: "smtpro.zoho.in",
      port: 587,
      secure: true,
      auth: {
        user: process.env.HOTMAIL_EMAIL,
        pass: process.env.HOTMAIL_PASS,
      },
    });

    const mailOption = {
      from: "felix.lai@hotmail.com",
      to: "",
      subject: "Macaron Inquiry",
      html: `
 
    <li> title: ${floating_name} has an inquiry!</li>
    <li> message: ${floating_message}</li> 
    `,
    };
    await transporter.sendMail(mailOption);

    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to Send Email" },
      { status: 500 }
    );
  }
}
