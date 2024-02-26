
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { usePasswordToggle } from "../../hooks/utilityHooks";
import { FORGOTPASSWORD, ROOT } from "../../router/Router";
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
        <form onSubmit={(e)=>{
          e.preventDefault()
        }}>
          <Input
            type="email"
            placeholder="Email"
            id="email"
            className={styles["login-form-input"]}
          />

          <div className={styles["login-form-passwordInput"]}>
            <Input
              type={passwordInputType}
              placeholder="Password"
              id="password"
              className={styles["login-form-input"]}
            />
            {toggleIcon}
          </div>
          <Link to={FORGOTPASSWORD}>
            <p className={styles["login-form-forgotPassword"]}>
              FORGOT PASSWORD?
            </p>
          </Link>

          
            <Link to={ROOT}><Button type="submit" className={styles["login-form-submit"]}>LOG IN </Button></Link>
         
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
