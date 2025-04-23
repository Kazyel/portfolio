"use server";

import { EmailFormSchema } from "@/lib/validations/form";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitForm(formData: EmailFormSchema) {
  await resend.emails.send({
    from: `${formData.name} <onboarding@resend.dev>`,
    to: ["m.mascarelo@gmail.com"],
    subject: formData.subject,
    text: formData.message,
    // react: await EmailTemplate({ firstName: formData.name }),
  });
}
