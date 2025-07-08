
import Image from "next/image";

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
          <Image src="/images/lsqLogo.svg" alt="logo"  width={173.76473999023438}
          height={36} />
        </div>
        {/* ILLUSTRATION */}
        <Image src="/images/loginIllustration.png" alt="illustration" width={600} height={337.56939697265625}/>
      </div>
    </div>
  );
};

export default LoginIllustration;
