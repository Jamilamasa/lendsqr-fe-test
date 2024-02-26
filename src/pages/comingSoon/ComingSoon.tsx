
import styles from "./ComingSoon.module.scss";

const ComingSoon: React.FC = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Coming Soon!!!</h1>
            <p className={styles.description}>This page is under construction. We'll be back soon!</p>
        </div>
    );
};

export default ComingSoon;
