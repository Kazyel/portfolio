"use server";

import { EmailFormSchema } from "@/lib/validations/form";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitForm(formData: EmailFormSchema) {
  const { data, error } = await resend.emails.send({
    from: `${formData.name} <onboarding@resend.dev>`,
    to: ["m.mascarelo@gmail.com"],
    subject: "Contact - Kazyel.dev",
    text: formData.message,
    // react: await EmailTemplate({ firstName: formData.name }),
  });

  if (data) {
    return data;
  }

  if (error) {
    throw error;
  }
}
