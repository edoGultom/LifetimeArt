"use client";
import React, {
  useState,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

type TextInputProps = {
  id: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  as?: "input" | "textarea";
} & (
  | InputHTMLAttributes<HTMLInputElement>
  | TextareaHTMLAttributes<HTMLTextAreaElement>
);

export default function TextInput({
  id,
  label,
  placeholder,
  required = false,
  as = "input",
  ...props
}: TextInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const commonClasses = `w-full px-3 py-[13px] border border-gray-300 rounded placeholder-title/20
    ${
      isFocused
        ? "focus:bg-none focus:outline-none focus:ring-2 focus:ring-border2"
        : "bg-background-section"
    }`;

  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block mb-[7px] text-Label-FORM-M text-title"
      >
        {label} {required && <span className="text-danger">*</span>}
      </label>

      {as === "textarea" ? (
        <textarea
          id={id}
          placeholder={placeholder}
          required={required}
          className={commonClasses}
          rows={6}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          id={id}
          placeholder={placeholder}
          required={required}
          className={commonClasses}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...(props as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
    </div>
  );
}
