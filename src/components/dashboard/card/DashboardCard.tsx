
import styles from "./DashboardCard.module.scss";
import { IDashboardCardProps } from "./interfaces";

const DashboardCard: React.FC<IDashboardCardProps> = ({ icon, title, value }) => {
  return (
    <div className={styles.card} id="info-card">
      <span>
        <img src={icon} alt="icon" />
      </span>
      <span>{title}</span>
      <span>{value}</span>
    </div>
  );
};

export default DashboardCard;
