import { EmailFormSchema } from "@/lib/validations/form";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { ContactFormError } from "./contact-form-error";
import { AnimatePresence } from "framer-motion";

export type FormEntries = "name" | "subject" | "message" | "email";

interface ContactFormFieldProps {
  register: UseFormRegister<EmailFormSchema>;
  errors: FieldErrors<EmailFormSchema>;
  label: string;
  name: FormEntries;
  type?: "text" | "email";
  as?: "textarea" | "input";
}

const PLACEHOLDERS = {
  name: "Your name",
  subject: "Subject",
  message: "Message",
  email: "Your email",
};

export const ContactFormField = ({
  register,
  errors,
  label,
  name,
  type = "text",
  as = "input",
}: ContactFormFieldProps) => {
  const errorType = errors[name];
  const placeholder = PLACEHOLDERS[name];

  return (
    <>
      {as === "textarea" && (
        <div className="flex flex-col gap-y-2">
          <label
            htmlFor={name}
            className="flex items-center gap-1.5 text-sm font-semibold"
          >
            <span>{label}</span>
            <AnimatePresence>
              {errorType && errorType.message && (
                <ContactFormError message={errorType.message} />
              )}
            </AnimatePresence>
          </label>

          <textarea
            {...register(name)}
            name={name}
            id={name}
            placeholder={placeholder}
            className="border-off-w/30 resize-none rounded-sm border p-3 text-sm font-light"
            rows={6}
          />
        </div>
      )}

      {as === "input" && (
        <div className="flex flex-col gap-y-2">
          <label
            htmlFor={name}
            className="flex items-center gap-1.5 text-sm font-semibold"
          >
            {label}

            <AnimatePresence>
              {errorType && errorType.message && (
                <ContactFormError message={errorType.message} />
              )}
            </AnimatePresence>
          </label>

          <input
            {...register(name)}
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
            className="border-off-w/30 rounded-sm border p-3 text-sm font-light"
          />
        </div>
      )}
    </>
  );
};
