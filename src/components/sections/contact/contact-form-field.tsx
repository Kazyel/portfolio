import { EmailFormSchema } from "@/lib/validations/form";
import { FieldErrors, UseFormRegister } from "react-hook-form";

export type FormEntries = "name" | "subject" | "message" | "email";

interface ContactFormFieldProps {
  register: UseFormRegister<EmailFormSchema>;
  errors: FieldErrors<EmailFormSchema>;
  label: string;
  name: FormEntries;
  required?: boolean;
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
  required = true,
}: ContactFormFieldProps) => {
  const errorType = errors[name];

  return (
    <>
      {as === "textarea" && (
        <div className="flex flex-col gap-y-2">
          <label htmlFor={name} className="font-semibold">
            {label}
          </label>

          <textarea
            {...register(name)}
            name={name}
            id={name}
            required={required}
            className="border-off-w/30 resize-none rounded-sm border px-2 py-3 text-sm font-light"
            rows={6}
          />
        </div>
      )}

      {as === "input" && (
        <div className="flex flex-col gap-y-2">
          <label htmlFor={name} className="font-semibold">
            {label}
          </label>

          <input
            {...register(name)}
            type={type}
            name={name}
            id={name}
            required={required}
            className="border-off-w/30 rounded-sm border px-2 py-3 text-sm font-light"
          />

          <p className="text-sm text-red-200 italic">
            {errorType && errorType.message + "."}
          </p>
        </div>
      )}
    </>
  );
};
