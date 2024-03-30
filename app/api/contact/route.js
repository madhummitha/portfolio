import nodemailer from "nodemailer";
import connectDB from "../../../utils/db";
import Contact from "../../../models/Contact";
import { NextResponse } from "next/server";

export async function POST(req) {
  await connectDB();

  const body = await req.json();

  const { name, email, message } = body;
  console.log("req body logging", body);

  try {
    sendEmail(body);
    const newContact = await Contact.create({
      name,
      email,
      message,
    });

    return NextResponse.json(
      { message: "Contact added Successfully!" },
      { status: 201 }
    );
  } catch (err) {
    console.log("catch error", err);
    return NextResponse.json(
      { message: "Error in adding Successfully!", err },
      { status: 500 }
    );
  }
}

const sendEmail = async ({ name, email, message }) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    transporter.verify((error) => {
      if (error) {
        console.log("transporter error", error);
      } else {
        console.log("transporter successful");
      }
    });

    await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.TO_EMAIL,
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });
  } catch (error) {
    console.log("catch error", error);
  }
};
