// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message }: { name: string; email: string; message: string } = await req.json();

    // Nodemailer transporter for Hotmail / Live
    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false, // TLS ke liye false
      auth: {
        user: "ibrahimamin@live.com",
        pass: "YOUR_APP_PASSWORD_HERE", // Microsoft App Password use karo
      },
      tls: {
        ciphers: "SSLv3",
      },
    });

    const mailOptions = {
      from: `"Contact Form" <ibrahimamin@live.com>`,
      to: "ibrahimamin@live.com",
      subject: "New Contact Request",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { success: false, message: (error as Error).message },
      { status: 500 }
    );
  }
}
