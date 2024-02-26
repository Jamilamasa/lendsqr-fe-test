
import LoginForm from "../../components/authComponents/LoginForm";
import LoginIllustration from "../../components/authComponents/LoginIllustration";
import styles from './Login.module.scss'

const Login: React.FC = () => {
  return (
    <div className={styles['login-container']}>
      {/* Illustration */}
      <LoginIllustration styles={styles}/>
      {/* Login form */}
      <LoginForm styles={styles}/>
    </div>
  );
};

export default Login;