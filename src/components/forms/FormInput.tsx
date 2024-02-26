
import { IFormInputProps, IFormButtonProps } from "./interfaces";

// Input component
export const Input: React.FC<IFormInputProps> = (props) => {
  const { type, placeholder, value, onChange, className } = props;

  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export const Button: React.FC<IFormButtonProps> = (props) => {
  const { type, children, className } = props;

  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
};
