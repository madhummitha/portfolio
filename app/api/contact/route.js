import connectDB from "../../../utils/db";
import Contact from "../../../models/Contact";
import { NextResponse } from "next/server";


export async function POST(req) {
  await connectDB();

  const body = await req.json();

    const { name, email, phone } = body;
    console.log("req body logging", body);

    try {
      console.log("model", Contact);
      const newContact = await Contact.create({
        name,
        email,
        phone,
      });

      return NextResponse.json({ message: "Contact added Successfully!" }, { status: 201 });
    } catch (err) {
      console.log("catch error", err);
      return NextResponse.json({ message: "Error in adding Successfully!", err }, { status: 500 });
    }
}
