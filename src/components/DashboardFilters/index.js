import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { PACKAGING_TYPE_LIST } from "../../utils/constants";
import { useState } from "react";
import "./index.css";

const DashboardFilters = ({ orderFormData, onApply, onCancel }) => {
  const [filters, setFilters] = useState({ ...orderFormData });

  const handleChange = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.value,
    });
  };

  const handleApply = () => {
    onApply(filters);
  };

  return (
    <>
      <div className="table-filters-container">
        <span>Filters</span>
        <div className="form-container">
          <FormControl size="small">
            <InputLabel>Order Type</InputLabel>
            <Select
              value={filters.typeId}
              name="typeId"
              label="Order Type"
              onChange={handleChange}
            >
              {PACKAGING_TYPE_LIST.map((packagingType) => {
                return (
                  <MenuItem
                    key={packagingType.type}
                    value={packagingType.value}
                  >
                    <div className="package-type-container">
                      <div
                        className="package-type"
                        id={packagingType.type}
                        style={{
                          backgroundColor: packagingType.color,
                        }}
                      ></div>
                      <span> {packagingType.label}</span>
                    </div>
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

          <TextField
            size="small"
            label="Quantity"
            name="quantity"
            id="quantity"
            value={filters.quantity}
            onChange={(event) => {
              const onlyNums = event.target.value.replace(/[^0-9]/g, "");
              event.target.value = onlyNums;
              handleChange(event);
            }}
            inputProps={{ inputMode: "numeric" }}
          />
        </div>
        <div className="actions-container">
          <Button onClick={onCancel} variant="outlined">
            Cancel
          </Button>
          <Button onClick={handleApply} variant="contained">
            Apply
          </Button>
        </div>
      </div>
    </>
  );
};

export default DashboardFilters;
