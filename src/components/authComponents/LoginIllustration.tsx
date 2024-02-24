import React from "react";
import logo from "../../assets/images/logo.svg";
import illustration from "../../assets/images/illustration.png";

interface ILoginIllustrationProps {
  styles: {
    [key: string]: string;
  };
}
const LoginIllustration: React.FC<ILoginIllustrationProps> = ({ styles }) => {
  return (
    <div className={styles["login-illustration"]}>
      <div className={styles["login-illustration-container"]}>
        {/* LOGO */}
        <div className={styles["login-illustration-logo"]}>
          <img src={logo} alt="logo" />
        </div>
        {/* ILLUSTRATION */}
        <img src={illustration} alt="illustration" />
      </div>
    </div>
  );
};

export default LoginIllustration;
