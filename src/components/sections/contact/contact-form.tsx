"use client";

import { cn } from "@/lib/utils";

import { SubmitHandler, useForm } from "react-hook-form";
import { EmailFormSchema, emailSchema } from "@/lib/validations/form";
import { zodResolver } from "@hookform/resolvers/zod";

import { motion } from "framer-motion";

import { submitForm } from "@/app/actions/form";

import {
  ContactFormField,
  FormEntries,
} from "@/components/sections/contact/contact-form-field";

export const ContactForm = () => {
  const form = useForm<EmailFormSchema>({
    resolver: zodResolver(emailSchema),
    defaultValues: { name: "", subject: "", message: "", email: "" },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = form;

  const onSubmitForm: SubmitHandler<EmailFormSchema> = async (data) => {
    await submitForm(data);
  };

  const formEntries = Object.keys(emailSchema.shape) as FormEntries[];

  return (
    <motion.form
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 1 }}
      onSubmit={handleSubmit(onSubmitForm)}
      id="email-form"
      className="border-off-w/30 text-off-w flex w-[450px] flex-col gap-y-6 rounded-lg border p-6"
    >
      <div className="flex flex-col gap-y-4">
        {formEntries.map((entry) => (
          <ContactFormField
            key={entry}
            register={register}
            errors={errors}
            label={entry.charAt(0).toUpperCase() + entry.slice(1)}
            name={entry}
            type={entry === "email" ? "email" : "text"}
            as={entry === "message" ? "textarea" : "input"}
          />
        ))}
      </div>

      <button
        className={cn(
          "bg-off-w w-full rounded-lg p-2 text-xl text-black transition-all duration-150",
          !isValid || isSubmitting ? "bg-off-w/20" : "bg-off-w",
        )}
        disabled={!isValid || isSubmitting}
      >
        {isSubmitting ? "" : "Submit"}
      </button>
    </motion.form>
  );
};
