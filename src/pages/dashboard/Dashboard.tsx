import React, { useEffect } from "react";
import DashboardCard from "../../components/dashboard/card/DashboardCard";
import DashboardTable from "../../components/dashboard/table/DashboardTable";
import { useGetUsers } from "../../hooks/users.hooks";
import styles from "./Dashboard.module.scss";
import { cardInfo } from "./dashboardCardInfo";

const Dashboard = () => {
  const { getUserData, loading, users, error } = useGetUsers();

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      {/* Header */}
      <h1 className={styles["dashboard-header"]}>Users</h1>
      {/* Cards */}
      <div className={styles["dashboard-cards"]}>
        {cardInfo.map((cards) => (
          <DashboardCard
          key={cards.id}
            icon={cards.icon}
            title={cards.title}
            value={cards.value}
          />
        ))}
      </div>
      {/* Table */}
      <DashboardTable/>
    </>
  );
};

export default Dashboard;
