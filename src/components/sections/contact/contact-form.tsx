"use client";

import type { CustomMotion, Socials } from "@/lib/types";
import { type EmailFormSchema, emailSchema } from "@/lib/validations/form";

import { SubmitHandler, useForm } from "react-hook-form";
import { submitForm } from "@/app/actions/email-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { cn } from "@/lib/utils";

import { SiLinkedin } from "@/components/svgs/SiLinkedIn";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { Loader2, Send } from "lucide-react";

import Link from "next/link";
import { toast } from "sonner";
import { ShineBorder } from "@/components/ui/shine-border";
import { ContactFormField } from "@/components/sections/contact/contact-form-field";
import { MotionWrapper, m } from "@/components/motion-wrapper";
import { useTranslations } from "next-intl";

export type FormEntries = keyof EmailFormSchema;

const CONTACT_MOTION: CustomMotion<"div"> = {
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay: 0.75 },
  viewport: { once: true, amount: 0.65 },
};

const socialLinks: Socials<"linkedIn" | "github"> = {
  github: {
    href: "https://www.github.com/Kazyel",
    icon: SiGithub,
    text: "GitHub",
  },
  linkedIn: {
    href: "https://www.linkedin.com/in/mateus-mascarelo/",
    icon: SiLinkedin,
    text: "LinkedIn",
  },
};

export const ContactForm = () => {
  const t = useTranslations("ContactForm");

  const form = useForm<EmailFormSchema>({
    resolver: yupResolver(emailSchema),
    defaultValues: { name: "", message: "", email: "" },
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = form;

  const onSubmitForm: SubmitHandler<EmailFormSchema> = async (data) => {
    const emailResponse = await submitForm(data);

    if (emailResponse) {
      toast.success("Message sent!");
      reset();
      return;
    }

    toast.error("Something went wrong! Please try sending again.");
  };

  const labels = [t("name"), t("email"), t("message")];
  const formEntries = Object.keys(emailSchema.fields) as FormEntries[];

  return (
    <MotionWrapper>
      <m.div
        {...CONTACT_MOTION}
        className={cn(
          "border-off-w/30 relative z-10 flex w-[450px] flex-col gap-y-3 overflow-hidden rounded-lg border bg-black p-4",
          "max-sm:w-full",
        )}
      >
        <ShineBorder shineColor={["#F3E5D7ee", "#F3E5D744", "#F3E5D722"]} />

        {/* Form */}
        <form
          id="email-form"
          className="text-off-w flex flex-col gap-y-6"
          onSubmit={handleSubmit(onSubmitForm)}
        >
          <div className="flex flex-col gap-y-4">
            {formEntries.map((entry, index) => (
              <ContactFormField
                key={entry}
                register={register}
                errors={errors}
                label={labels[index]}
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
                <p>{t("submit")}</p>
                <Send className="size-5" />
              </>
            )}
          </button>
        </form>

        {/* Social Links */}
        <div className="flex gap-4">
          {Object.entries(socialLinks).map(([key, social]) => (
            <Link
              key={key}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className={cn(
                "border-off-w/30 group hover:border-off-w hover:bg-off-w flex grow cursor-pointer items-center justify-center gap-x-2 rounded-sm border p-2 transition-all duration-200",
              )}
            >
              <social.icon
                className={cn(
                  "text-off-w/65 size-5 shrink-0 transition-all duration-200",
                  "group-hover:text-black",
                )}
              />
              <p
                className={cn(
                  "text-off-w/65 text-sm font-semibold transition-all duration-200",
                  "group-hover:text-black",
                )}
              >
                {social.text}
              </p>
            </Link>
          ))}
        </div>
      </m.div>
    </MotionWrapper>
  );
};
