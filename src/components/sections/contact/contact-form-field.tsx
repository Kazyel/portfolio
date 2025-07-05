import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { EmailFormSchema } from "@/lib/validations/form";
import type { FormEntries } from "@/components/sections/contact/contact-form";

import { AnimatePresence } from "framer-motion";
import { ContactFormError } from "@/components/sections/contact/contact-form-error";
import { Mail, User, MessageSquareText } from "lucide-react";
import { cn } from "@/lib/utils";

const PLACEHOLDERS = {
  name: "Enter your name...",
  email: "Enter your email...",
  message: "Please, leave me a message!",
};

const ICONS = {
  name: () => <User className="size-5" />,
  email: () => <Mail className="size-5" />,
  message: () => <MessageSquareText className="size-5" />,
};

const containerClasses = "flex flex-col gap-y-2.5";
const labelContainerClasses = "flex items-center gap-2.5";
const labelClasses = "flex items-center gap-2.5 font-semibold";
const inputBaseClasses = cn(
  "border-off-w/30 focus-within:outline-off-w/75 rounded-sm border p-3 text-sm font-light",
  "placeholder:font-light placeholder:tracking-wide focus-within:outline-2",
);
const textareaClasses = cn(inputBaseClasses, "resize-none");

interface ContactFormFieldProps {
  register: UseFormRegister<EmailFormSchema>;
  errors: FieldErrors<EmailFormSchema>;
  label: string;
  name: FormEntries;
  type?: "text" | "email";
  as?: "textarea" | "input";
}

export const ContactFormField = ({
  register,
  errors,
  label,
  name,
  type = "text",
  as = "input",
}: ContactFormFieldProps) => {
  const Icon = ICONS[name];
  const placeholder = PLACEHOLDERS[name];
  const errorType = errors[name];

  return (
    <div className={containerClasses}>
      <div className={labelContainerClasses}>
        <label htmlFor={name} className={labelClasses}>
          <Icon />
          {label}
        </label>
        <AnimatePresence>
          {errorType && errorType.message && (
            <ContactFormError message={errorType.message} />
          )}
        </AnimatePresence>
      </div>

      {as === "textarea" ? (
        <textarea
          {...register(name)}
          name={name}
          id={name}
          placeholder={placeholder}
          className={textareaClasses}
          rows={7}
        />
      ) : (
        <input
          {...register(name)}
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          className={inputBaseClasses}
        />
      )}
    </div>
  );
};
