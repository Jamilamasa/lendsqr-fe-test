"use client";
import { usePasswordToggle } from "@/hooks/utilityHooks";
import { FORGOTPASSWORD } from "@/constants/routes";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";
import { useState } from "react";

interface ILoginFormProps {
  styles: {
    [key: string]: string;
  };
}
const LoginForm: React.FC<ILoginFormProps> = ({ styles }) => {
  // Form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordInputType, toggleIcon] = usePasswordToggle();
  const router = useRouter();

 const submitHandler = (e: React.FormEvent) => {
  e.preventDefault();

  if (!email || !password) {
    alert("Please enter both email and password.");
    return;
  }

  // Random bearer token
  const fakeToken = Math.random().toString(36).substring(2);
  setCookie("lsq9fac67pp", fakeToken, {
    maxAge: 60 * 60 * 24,
    path: "/",
  });

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
        <form onSubmit={submitHandler}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className={styles["login-form-input"]}
          />

          <div className={styles["login-form-passwordInput"]}>
            <input
              type={passwordInputType}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
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
