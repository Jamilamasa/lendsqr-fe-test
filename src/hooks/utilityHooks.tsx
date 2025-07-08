
import React, { useState, ReactElement } from "react";

type InputType = "text" | "password";

interface PasswordToggleProps {
  visible: boolean;
  toggleVisibility: () => void;
}

const PasswordToggle: React.FC<PasswordToggleProps> = ({ visible, toggleVisibility }) => {
  return (
    <span onClick={toggleVisibility}>
      {visible ? "HIDE" : "SHOW"}
    </span>
  );
};

export const usePasswordToggle = (): [InputType, ReactElement] => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible((prevVisible) => !prevVisible);
  };

  const Icon = <PasswordToggle visible={visible} toggleVisibility={toggleVisibility} />;

  const inputType: InputType = visible ? "text" : "password";

  return [inputType, Icon];
};


