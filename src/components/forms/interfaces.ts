// Props interface
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
export interface IFormInputProps {
  type: HTMLInputTypes; // Use the union type here
  placeholder?: string;
  id?: string;
  value?: string | number | readonly string[];
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IFormButtonProps {
  type: ButtonTypes;
  children: React.ReactNode;
  className?: string;
}
