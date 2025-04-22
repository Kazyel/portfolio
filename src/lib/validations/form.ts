import { z } from "zod";

export const emailSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
    })
    .min(3, "Name must be at least 3 characters long"),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid email" }),
  subject: z
    .string({
      required_error: "Subject is required",
    })
    .min(3, "Subject must be at least 3 characters long"),
  message: z.string({ required_error: "Message is required" }),
});

export type EmailFormSchema = z.infer<typeof emailSchema>;
