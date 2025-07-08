import LoginForm from './_loginComponents/LoginForm'
import LoginIllustration from './_loginComponents/LoginIllustration'
import styles from './login.module.scss'

const page = () => {
  return (
     <div className={styles['login-container']}>
      {/* Illustration */}
      <LoginIllustration styles={styles}/>
      {/* Login form */}
      <LoginForm styles={styles}/>
    </div>
  )
}

export default page