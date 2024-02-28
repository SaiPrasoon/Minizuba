import { useEffect, useState } from "react";
import { getOrderLines } from "../../utils/api";
import Loader from "../Loader";
import { TABLE_COLUMN_CONFIG } from "../../utils/constants";
import "./index.css";
import {
  IconButton,
  Menu,
  MenuItem,
  Popover,
  Tooltip,
  Zoom,
} from "@mui/material";
import DashboardFilters from "../DashboardFilters";
import TuneIcon from "@mui/icons-material/Tune";
import DataTable from "../DataTable";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import GroupedDataTable from "../GroupedDataTable";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [orderList, setOrderList] = useState([]);
  const [orderFormData, setOrderFormData] = useState({
    typeId: 1,
    quantity: "",
    groupBy: null,
  });
  const [anchorEl, setAnchorEl] = useState(null);
  const [groupByMenuEl, setGroupByMenuElement] = useState(null);

  const fetchOrderLines = async () => {
    setIsLoading(() => true);
    try {
      const response = await getOrderLines(
        orderFormData.typeId,
        orderFormData.quantity
      );
      if (response.res.status === 200) {
        setIsLoading(() => false);
        setOrderList(response.res.data);
      }
    } catch (error) {
      setIsLoading(() => false);
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    fetchOrderLines();
  }, [orderFormData]);

  const togglePopoverOpen = (event = null) => {
    setAnchorEl(event?.currentTarget);
  };

  const handleApplyFilters = (data) => {
    setIsLoading(() => true);
    setOrderFormData({
      ...data,
    });
    togglePopoverOpen();
  };

  const toggleMenuOpen = (event = null) => {
    setGroupByMenuElement(event?.currentTarget);
  };

  const handleGroupBySelect = (field) => {
    setIsLoading(true);
    setOrderFormData({
      ...orderFormData,
      groupBy: field,
    });
    toggleMenuOpen();
  };

  const open = Boolean(anchorEl);
  const isMenuOpen = Boolean(groupByMenuEl);

  return (
    <>
      <Popover
      id="popover"
        open={open}
        anchorEl={anchorEl}
        onClose={() => togglePopoverOpen()}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <DashboardFilters
          id='dashboardFilters'
          orderFormData={orderFormData}
          onApply={handleApplyFilters}
          onCancel={() => togglePopoverOpen()}
        />
      </Popover>

      <Menu
        id="menu"
        anchorEl={groupByMenuEl}
        open={isMenuOpen}
        onClose={() => toggleMenuOpen()}
      >
        <MenuItem onClick={() => handleGroupBySelect("OrderID")}>
          Group By Order Id
        </MenuItem>
        <MenuItem onClick={() => handleGroupBySelect("StockItemID")}>
          Group By Stock Item Id
        </MenuItem>
      </Menu>

      <div className="container">
        {isLoading ? (
          <Loader />
        ) : (
          <div>
            <div className="table-header">
              <div className="table-heading">
                Orderlines for packaging type: {orderFormData.typeId}
              </div>

              <div className="table-filters">
                <Tooltip title="Group By" TransitionComponent={Zoom} arrow>
                  <IconButton onClick={toggleMenuOpen} id="menuButton">
                    <AutoAwesomeMotionIcon />
                  </IconButton>
                </Tooltip>

                <Tooltip title="Filters" TransitionComponent={Zoom} arrow>
                  <IconButton onClick={togglePopoverOpen} id="filtersButton">
                    <TuneIcon />
                  </IconButton>
                </Tooltip>
              </div>
            </div>

            {orderFormData.groupBy ? (
              <GroupedDataTable
                data={orderList}
                groupByField={orderFormData.groupBy}
              />
            ) : (
              <DataTable
                rowData={orderList}
                columnConfig={TABLE_COLUMN_CONFIG}
              />
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
