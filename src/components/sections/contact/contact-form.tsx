"use client";

import { motion } from "framer-motion";

import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { cn } from "@/lib/utils";
import { EmailFormSchema, emailSchema } from "@/lib/validations/form";

import { submitForm } from "@/app/actions/form";

import {
  ContactFormField,
  FormEntries,
} from "@/components/sections/contact/contact-form-field";
import { ShineBorder } from "@/components/ui/shine-border";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EmailFormSchema>({
    resolver: yupResolver(emailSchema),
    defaultValues: { name: "", subject: "", message: "", email: "" },
  });

  const onSubmitForm: SubmitHandler<EmailFormSchema> = async (data) => {
    await submitForm(data);
    reset();
  };

  const formEntries = Object.keys(emailSchema.fields) as FormEntries[];

  return (
    <motion.form
      id="email-form"
      className="border-off-w/30 text-off-w relative flex w-[450px] flex-col gap-y-6 overflow-hidden rounded-lg border p-6"
      onSubmit={handleSubmit(onSubmitForm)}
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 1 }}
    >
      <ShineBorder shineColor={["#F3E5D7BB", "#F3E5D744", "#F3E5D722"]} />

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
        type="submit"
        disabled={isSubmitting}
        className={cn(
          "border-off-w/50 bg-off-w hover:bg-off-w/40 hover:text-off-w 00 w-full cursor-pointer rounded-sm border p-2 font-extrabold text-black transition-all duration-300",
          isSubmitting && "pointer-events-none opacity-50",
        )}
      >
        {isSubmitting ? "..." : "Submit"}
      </button>
    </motion.form>
  );
};
