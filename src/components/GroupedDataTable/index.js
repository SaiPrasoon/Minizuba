import { Grid } from "@mui/material";
import { TABLE_COLUMN_CONFIG } from "../../utils/constants";
import DataTable from "../DataTable";
import GroupedDataItem from "../GroupedDataItem";

const GroupedDataTable = ({ data, groupByField }) => {
  const groupedData = data.reduce((acc, obj) => {
    const key = obj[groupByField];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});

  return (
    <div>
      <Grid container spacing={2}>
        {Object.keys(groupedData).map((dataKey) => {
          return (
            <GroupedDataItem
              groupByField={groupByField}
              dataKey={dataKey}
              data={groupedData[dataKey]}
              key={`groupedData_${groupByField}_${dataKey}`}
            />
          );
        })}
      </Grid>
    </div>
  );
};

export default GroupedDataTable;
