import { useState } from "react";
import { TABLE_COLUMN_CONFIG } from "../../utils/constants";
import DataTable from "../DataTable";
import "./index.css";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import IndeterminateCheckBoxRoundedIcon from "@mui/icons-material/IndeterminateCheckBoxRounded";
import { Grid } from "@mui/material";

const GroupedDataItem = ({ groupByField, dataKey, data, key }) => {
  const [showTable, setShowTable] = useState(false);

  const toggleShowTable = () => {
    setShowTable((showTable) => !showTable);
  };
  return (
    <Grid
      item
      xs={12}
      md={showTable ? 12 : 6}
      lg={showTable ? 12 : 4}
      key={key}
    >
      <div className="grouped-card-container">
        <div className="card-title-container">
          {showTable ? (
            <IndeterminateCheckBoxRoundedIcon
              onClick={toggleShowTable}
              className="card-icon"
            />
          ) : (
            <AddBoxRoundedIcon
              onClick={toggleShowTable}
              className="card-icon"
            />
          )}
          <span className="card-title">
            {groupByField} Id : {dataKey}
          </span>
        </div>
        {showTable ? (
          <div className="card-table-container">
            <DataTable
              rowData={data}
              columnConfig={TABLE_COLUMN_CONFIG}
            ></DataTable>
          </div>
        ) : null}
      </div>
    </Grid>
  );
};

export default GroupedDataItem;
