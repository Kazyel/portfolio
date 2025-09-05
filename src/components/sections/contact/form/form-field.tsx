import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { EmailFormSchema } from "@/lib/validations/form";

import { cn } from "@/lib/utils";
import { JSX } from "react/jsx-runtime";
import { useTranslations } from "next-intl";

import { Mail, User, MessageSquareText } from "lucide-react";
import { MotionWrapper, AnimatePresence } from "@/components/motion-wrapper";
import { FormErrors } from "./form-errors";
import { FormEntries } from "./form";

const FIELD_META: Record<
  FormEntries,
  {
    icon: JSX.Element;
    placeholderKey: string;
    type: "text" | "email";
    as: "input" | "textarea";
  }
> = {
  name: {
    icon: <User className="size-5" />,
    placeholderKey: "name-placeholder",
    type: "text",
    as: "input",
  },
  email: {
    icon: <Mail className="size-5" />,
    placeholderKey: "email-placeholder",
    type: "email",
    as: "input",
  },
  message: {
    icon: <MessageSquareText className="size-5" />,
    placeholderKey: "message-placeholder",
    type: "text",
    as: "textarea",
  },
};

const inputBaseClasses = cn(
  "border-off-w/30 focus-within:outline-off-w/75 rounded-sm border p-3 text-sm font-light",
  "placeholder:font-light placeholder:tracking-wide focus-within:outline-2",
);

interface FormFieldProps {
  register: UseFormRegister<EmailFormSchema>;
  errors: FieldErrors<EmailFormSchema>;
  label: string;
  name: FormEntries;
}

export const FormField = ({
  register,
  errors,
  label,
  name,
}: FormFieldProps) => {
  const t = useTranslations("ContactForm");

  const { icon, placeholderKey, type, as } = FIELD_META[name];
  const errorMessage = errors[name]?.message;
  const FieldTag = as;

  return (
    <MotionWrapper>
      <div className="flex flex-col gap-y-2.5">
        <div className="flex items-center gap-2.5">
          <label
            htmlFor={name}
            className="flex items-center gap-2.5 font-semibold"
          >
            {icon}
            {label}
          </label>

          <AnimatePresence>
            {errorMessage && <FormErrors message={errorMessage} />}
          </AnimatePresence>
        </div>

        <FieldTag
          {...register(name)}
          id={name}
          type={as === "input" ? type : undefined}
          placeholder={t(placeholderKey)}
          rows={as === "textarea" ? 8 : undefined}
          className={cn(inputBaseClasses, as === "textarea" && "resize-none")}
        />
      </div>
    </MotionWrapper>
  );
};
