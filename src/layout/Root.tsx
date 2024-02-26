
import styles from "./Root.module.scss";
import Header from "../components/rootComponents/Header/Header";
import SideBar from "../components/rootComponents/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className={styles["root"]}>
      <div className={styles["root-header"]}>
        {/* Header */}
        <Header />
      </div>

      {/* Sidebar and Page */}
      <div className={styles["root-body"]}>
        <SideBar />
        <div className={styles['root-body-outlet']}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Root;
