import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const {floating_name, floating_email, floating_phone, floating_date, floating_message, dropzone-file } = req.body;

        const transporter = nodemailer.createTransport({
            service: 'hotmail',
            auth: {
                user: process.env.HOTMAIL_USER,
                pass: process.env.HOTMAIL_PASS,
            }
        });
    }
}