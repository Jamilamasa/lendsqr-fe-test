"use client";
import { usePasswordToggle } from "@/hooks/utilityHooks";
import { FORGOTPASSWORD } from "@/constants/routes";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";

interface ILoginFormProps {
  styles: {
    [key: string]: string;
  };
}
const LoginForm: React.FC<ILoginFormProps> = ({ styles }) => {
  const [passwordInputType, toggleIcon] = usePasswordToggle();
  const router = useRouter();

  const submitHandler = (e) => {
    // Generate a random token
    const fakeToken = Math.random().toString(36).substring(2);

    // Set cookie
    setCookie("lsq9fac67pp", fakeToken, {
      maxAge: 60 * 60 * 24,
      path: "/",
    });
    // Redirect to dashboard
    router.push("/");
  };
  return (
    <div className={styles["login-form"]}>
      {/* Mobile Logo */}
      <div className={styles["login-form-logo"]}>
        <Image
          src="/images/lsqLogo.svg"
          alt="logo"
          width={173.76473999023438}
          height={36}
        />
      </div>
      <div className={styles["login-form-container"]}>
        {/* Form header */}
        <h1 className={styles["login-form-header"]}>Welcome!</h1>
        <p className={styles["login-form-text"]}>Enter details to login.</p>
        {/* Form */}
        <form
          onSubmit={submitHandler}
        >
          <input
            type="email"
            placeholder="Email"
            id="email"
            className={styles["login-form-input"]}
          />

          <div className={styles["login-form-passwordInput"]}>
            <input
              type={passwordInputType}
              placeholder="Password"
              id="password"
              className={styles["login-form-input"]}
            />
            {toggleIcon}
          </div>
          <Link
            href={FORGOTPASSWORD}
            className={styles["login-form-forgotPassword"]}
          >
            FORGOT PASSWORD?
          </Link>

          <button type="submit" className={styles["login-form-submit"]}>
            LOG IN{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
