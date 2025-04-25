"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";

import { Loader2, Send } from "lucide-react";

import { type EmailFormSchema, emailSchema } from "@/lib/validations/form";
import { submitForm } from "@/lib/actions/form";
import { cn } from "@/lib/utils";

import { ContactFormField } from "@/components/sections/contact/contact-form-field";
import { ShineBorder } from "@/components/ui/shine-border";
import { toast } from "sonner";

export type FormEntries = keyof EmailFormSchema;

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EmailFormSchema>({
    resolver: yupResolver(emailSchema),
    defaultValues: { name: "", message: "", email: "" },
  });

  const onSubmitForm: SubmitHandler<EmailFormSchema> = async (data) => {
    const emailResponse = await submitForm(data);

    if (emailResponse) {
      toast.success("Message sent!");
      reset();
      return;
    }

    toast.error("Something went wrong! Please try sending again.");
  };

  const formEntries = Object.keys(emailSchema.fields) as FormEntries[];

  return (
    <motion.form
      id="email-form"
      className="border-off-w/30 text-off-w relative flex w-[450px] flex-col gap-y-6 overflow-hidden rounded-lg border bg-black p-6"
      onSubmit={handleSubmit(onSubmitForm)}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.75 }}
      viewport={{ once: true, amount: 0.65 }}
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
          "border-off-w/50 bg-off-w hover:bg-off-w/40 hover:text-off-w flex w-full cursor-pointer items-center justify-center gap-x-2 rounded-sm border p-2 font-extrabold text-black transition-all duration-300",
          isSubmitting && "pointer-events-none opacity-50",
        )}
      >
        {isSubmitting ? (
          <Loader2 className="size-6 animate-spin" />
        ) : (
          <>
            <p>Send message</p> <Send className="size-5" />
          </>
        )}
      </button>
    </motion.form>
  );
};
