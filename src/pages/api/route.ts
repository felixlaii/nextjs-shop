import { NextResponse } from "next/server";
import nodemailer from "nodemailer";


export async function POST(req: any) {
try {
    const {
        floating_name, floating_email, floating_phone, floating_date, floating_qty, floating_message
    } = await req.json()
}

