import React from "react";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import usePasswordToggle from "../../hooks/utilityHooks";
import { FORGOTPASSWORD } from "../../router/Router";
import { Button, Input } from "../forms/FormInput";

interface ILoginFormProps {
  styles: {
    [key: string]: string;
  };
}
const LoginForm: React.FC<ILoginFormProps> = ({ styles }) => {
  const [passwordInputType, toggleIcon] = usePasswordToggle();
  return (
    <div className={styles["login-form"]}>
      {/* Mobile Logo */}
      <div className={styles["login-form-logo"]}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles["login-form-container"]}>
        {/* Form header */}
        <h1 className={styles["login-form-header"]}>Welcome!</h1>
        <p className={styles["login-form-text"]}>Enter details to login.</p>
        {/* Form */}
        <form>
          <div className={styles["login-form-input"]}>
            <Input type="email" placeholder="Email" id="email" />
          </div>
          <div className={styles["login-form-input"]}>
            <Input
              type={passwordInputType}
              placeholder="Password"
              id="password"
            />
            {toggleIcon}
          </div>
          <Link to={FORGOTPASSWORD}>
            <p className={styles["login-form-forgotPassword"]}>
              FORGOT PASSWORD?
            </p>
          </Link>

          <Button type="submit" className={styles["login-form-submit"]}>
            LOG IN
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
