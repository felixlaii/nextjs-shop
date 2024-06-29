import { NextResponse } from "next/server";
import nodemailer from "nodemailer";


export async function POST(req: any) {
try {
    const {
        floating_name, floating_email, floating_phone, floating_date, floating_qty, floating_message
    } = await req.json()

    const transporter = nodemailer.createTransport({
        service: 'hotmail',
        host: 'smtpro.zoho.in',
        port: 587,
        secure: true,
        auth: {
            user: process.env.HOTMAIL_EMAIL,
            pass: process.env.HOTMAIL_PASS
        }
    })
}

