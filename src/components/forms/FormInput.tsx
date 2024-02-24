import React from "react";

// Union type for all HTML input types
type HTMLInputTypes =
  | "button"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";

type ButtonTypes = "button" | "reset" | "submit";

// Props interface
interface IFormInputProps {
  type: HTMLInputTypes; // Use the union type here
  placeholder?: string;
  id?: string;
  value?: string | number | readonly string[];
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface IFormButtonProps {
  type: ButtonTypes;
  children: React.ReactNode;
  className?: string;
}
// Input component
export const Input: React.FC<IFormInputProps> = (props) => {
  const { type, placeholder, value, onChange } = props;

  return (
    <input
    className="form-input"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export const Button: React.FC<IFormButtonProps> = (props) => {
  const { type, children, className } = props;

  return <button type={type} className={className}>{children}</button>;
};
