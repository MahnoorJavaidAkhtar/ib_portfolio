import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: "ibrahimamin@live.com",
      pass: "YOUR_EMAIL_PASSWORD",
    },
  });

  const mailOptions = {
    from: "Contact Form <ibrahimamin@live.com>",
    to: "ibrahimamin@live.com",
    subject: "New Contact Request",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
