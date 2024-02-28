import React from "react";
import { shallow } from "enzyme";
import DataTable from "../components/DataTable";
import { TEST_ORDERLINES } from "../utils/testData";
import { TABLE_COLUMN_CONFIG } from "../utils/constants";
import { act } from "react-dom/test-utils";

const props = {
  rowData: TEST_ORDERLINES,
  columnConfig: TABLE_COLUMN_CONFIG,
};

describe("DataTable", () => {
  let component;
  beforeEach(() => {
    component = shallow(<DataTable {...props} />);
  });

  it("should render without errors", () => {
    expect(component).toBeTruthy();
  });

  it("should handle page change", () => {
    const pagination = component.find("#pagination").at(0);
    act(() => {
      pagination.props().onPageChange({}, 2);
    });
  });

  it("should handle rows per page change", () => {
    const pagination = component.find("#pagination").at(0);
    act(() => {
      pagination.props().onRowsPerPageChange({
        target: {
          value: 50,
        },
      });
    });
  });

  it("should render NoData component if the data is empty", () => {
    component = shallow(
      <DataTable />
    );
    const noData = component.find("#noData").at(0);
    expect(noData).toBeTruthy();
  });
});
