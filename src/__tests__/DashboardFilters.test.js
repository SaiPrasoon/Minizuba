import React from "react";
import { shallow } from "enzyme";
import DashboardFilters from "../components/DashboardFilters";
import { act } from "react-dom/test-utils";

const props = {
  orderFormData: {
    quantity: "",
    typeId: "",
    groupBy: "",
  },
  onApply: jest.fn(),
  onCancel: jest.fn(),
};
describe("DashboardFilters", () => {
  let component;

  beforeEach(() => {
    component = shallow(<DashboardFilters {...props} />);
  });
  it("should render without errors", () => {
    expect(component).toBeTruthy();
  });

  it("should handle input change and handle apply button click", () => {
    const quantityInput = component.find("#quantity").at(0);
    act(() => {
      quantityInput.props().onChange({
        target: {
          name: "quantity",
          value: "123",
        },
      });
    });

    const updatedProps = {
      quantity: "123",
      typeId: "",
      groupBy: "",
    };

    const applyButton = component.find("#applyButton").at(0);
    applyButton.props().onClick();
    expect(props.onApply).toHaveBeenCalledWith(updatedProps);
  });

  it("should handle cancel click", () => {
    const cancelButton = component.find("#cancelButton").at(0);
    cancelButton.props().onClick();
    expect(props.onCancel).toHaveBeenCalled();
  });
});
