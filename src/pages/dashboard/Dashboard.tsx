import React from "react";
import DashboardCard from "../../components/dashboard/DashboardCard";
import styles from "./Dashboard.module.scss";
import { cardInfo } from "./dashboardCardInfo";



const Dashboard = () => {
  return (
    <>
      {/* Header */}
      <h1 className={styles["dashboard-header"]}>Users</h1>
      {/* Cards */}
      <div className={styles["dashboard-cards"]}>
        {cardInfo.map((cards)=><DashboardCard icon={cards.icon} title={cards.title} value={cards.value}/>)}
      </div>
      {/* Table */}
    </>
  );
};

export default Dashboard;
