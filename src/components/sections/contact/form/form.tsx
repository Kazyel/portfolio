import { useRef } from "react";
import { useForm } from "react-hook-form";
import { useLocale, useTranslations } from "next-intl";
import { yupResolver } from "@hookform/resolvers/yup";
import { submitForm } from "@/app/actions/email-form";
import { Turnstile, TurnstileInstance } from "@marsidev/react-turnstile";
import { emailSchema, type EmailFormSchema } from "@/lib/validations/form";

import { toast } from "sonner";
import { FormField } from "@/components/sections/contact/form/form-field";
import { SubmitButton } from "@/components/sections/contact/form//submit-button";

export type FormEntries = keyof EmailFormSchema;

type TypeOptions = "text" | "email";
type AsOptions = "textarea" | "input";

export function Form() {
  const t = useTranslations("ContactForm");
  const locale = useLocale() as string;
  const turnstileRef = useRef<TurnstileInstance>(null);

  const siteKey = process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE!;

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<EmailFormSchema>({
    resolver: yupResolver(emailSchema),
    defaultValues: { name: "", message: "", email: "" },
  });

  const onSubmitForm = async (data: EmailFormSchema, token: string) => {
    const emailResponse = await submitForm(data, token);
    if (emailResponse) {
      toast.success(t("success"));
      reset();
      return;
    }
    toast.error(t("error"));
  };

  const labels = [t("name"), t("email"), t("message")];
  const formEntries = Object.keys(emailSchema.fields) as FormEntries[];

  const getFieldProps = (entry: string, index: number) => ({
    register,
    errors,
    label: labels[index],
    name: entry as FormEntries,
    type: entry === "email" ? "email" : ("text" as TypeOptions),
    as: entry === "message" ? "textarea" : ("input" as AsOptions),
  });

  return (
    <form
      id="email-form"
      className="text-off-w flex flex-col gap-y-5"
      onSubmit={handleSubmit(() => turnstileRef.current?.execute())}
    >
      {formEntries.map((entry, index) => (
        <FormField key={entry} {...getFieldProps(entry, index)} />
      ))}

      <Turnstile
        siteKey={siteKey}
        options={{
          theme: "dark",
          language: locale,
          size: "invisible",
          execution: "execute",
        }}
        ref={turnstileRef}
        onSuccess={(token) => {
          onSubmitForm(getValues(), token);
        }}
        onError={() => {
          toast.error(t("captcha-error"));
        }}
        onExpire={() => {
          toast.error(t("captcha-expired"));
        }}
      />

      <SubmitButton isSubmitting={isSubmitting} />
    </form>
  );
}
