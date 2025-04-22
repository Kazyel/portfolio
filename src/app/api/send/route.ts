import { EmailTemplate } from "@/components/email-template";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  subject: string;
  message: string;
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
  }

  if (!req.body) {
    return NextResponse.json({ error: "Body not found" }, { status: 400 });
  }

  console.log(req.body, res);
  const body = req.body as ContactFormData;

  try {
    const { data, error } = await resend.emails.send({
      from: `${body.name} <onboarding@resend.dev>`,
      to: ["m.mascarelo@gmail.com"],
      subject: body.subject,
      text: body.message,
      react: await EmailTemplate({ firstName: "John" }),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
