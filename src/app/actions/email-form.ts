"use server";

import { Resend } from "resend";
import { EmailFormSchema } from "@/lib/validations/form";
import { EmailTemplate } from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

const VERIFY_ENDPOINT = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

const SECRET_KEY =
  process.env.NEXT_PUBLIC_NODE_ENV === "dev"
    ? "1x0000000000000000000000000000000AA"
    : process.env.CLOUDFLARE_TURNSTILE_SECRET;

export async function submitForm(formData: EmailFormSchema, token: string) {
  try {
    const verifyRes = await fetch(VERIFY_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${SECRET_KEY}&response=${token}`,
    });

    const verification = await verifyRes.json();

    if (!verification.success) {
      console.error("Turnstile verification failed:", verification["error-codes"]);
      return false;
    }

    const { data, error } = await resend.emails.send({
      from: `${formData.name} <onboarding@resend.dev>`,
      to: ["m.mascarelo@gmail.com"],
      subject: "Contact - Kazyel.dev",
      text: formData.message,
      react: await EmailTemplate({
        firstName: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });

    if (error) {
      console.error("Email send error:", error);
      throw new Error("Failed to send email");
    }

    return data;
  } catch (err) {
    console.error("Form submission error:", err);
    throw new Error("Failed to submit form");
  }
}
