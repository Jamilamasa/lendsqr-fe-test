
import styles from "./DashboardTable.module.scss";
import filterIcon from '../../../assets/icons/table/filter-results-button.svg'


const DashboardTable = () => {
  return (
    <div className={styles["table-container"]}>
      <table>
        <thead>
          <tr>
            {[
              "Organization",
              "Username",
              "Email",
              "Phone number",
              "Date joined",
              "Status",
            ].map((heads) => {
              return (
                <th
                  scope="col"
                  className={styles.table__header_cell}
                  id={`${heads}_table_header`}
                  key={heads}
                >
                  <div>
                    <span>{heads}</span>
                    <img
                      src={filterIcon}
                      alt=""
                      onClick={() => {
                        // setSelectedFilter(heads);
                        // setShowFilter(!showFilter);
                      }}
                    />
                  </div>

                  
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default DashboardTable;
