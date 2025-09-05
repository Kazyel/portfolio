import { emailSchema, type EmailFormSchema } from "@/lib/validations/form";
import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { submitForm } from "@/app/actions/email-form";

import { useTranslations } from "next-intl";
import { FormField } from "./form-field";
import { SubmitButton } from "./submit-button";
import { toast } from "sonner";

export type FormEntries = keyof EmailFormSchema;
type TypeOptions = "text" | "email";
type AsOptions = "textarea" | "input";

export function Form() {
  const t = useTranslations("ContactForm");

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
      onSubmit={handleSubmit(onSubmitForm)}
    >
      {formEntries.map((entry, index) => (
        <FormField key={entry} {...getFieldProps(entry, index)} />
      ))}

      <SubmitButton isSubmitting={isSubmitting} />
    </form>
  );
}
