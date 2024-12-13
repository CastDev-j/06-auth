import React from "react";

interface FieldProps {
  errorStateActive?: boolean;
  id: string;
  label: string;
  type: "text" | "textarea";
  placeholder?: string;
  regexValidation?: RegExp;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export const Field: React.FC<FieldProps> = ({
  id,
  label,
  type,
  placeholder,
  value,
  regexValidation,
  onChange,
}) => {
  const isValid = regexValidation ? regexValidation.test(value) : true;

  return (
    <section className="flex gap-6 justify-center items-center">
      <label htmlFor={id} className="text-blue-400 text-lg font-semibold w-1/4">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          className={`h-28 w-3/4 border-2 ${
            isValid ? "border-blue-300" : "border-red-400"
          } text-lg rounded-md p-2 ${
            isValid
              ? "text-blue-400 placeholder-blue-300"
              : "text-red-400 placeholder-red-300"
          } outline-none focus:ring-4 ${
            isValid
              ? "focus:border-blue-300 focus:ring-blue-100"
              : "focus:border-red-400 focus:ring-red-100"
          } transition-all duration-300 resize-none overflow-y-auto`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          id={id}
          type={type}
          className={`w-3/4 border-2 ${
            isValid ? "border-blue-300" : "border-red-400"
          } text-lg rounded-md p-2 ${
            isValid
              ? "text-blue-400 placeholder-blue-300"
              : "text-red-400 placeholder-red-300"
          } outline-none focus:ring-4 ${
            isValid
              ? "focus:border-blue-300 focus:ring-blue-100"
              : "focus:border-red-400 focus:ring-red-100"
          } transition-all duration-300`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
    </section>
  );
};
