import React from "react";
import Enzyme, { mount } from "enzyme";
import Dashboard from "../components/Dashboard";
import { getOrderLines } from "../utils/api";
import { MOCK_API_RESPONSE } from "../utils/testData";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import { act } from "react-dom/test-utils";

Enzyme.configure({ adapter: new Adapter() });

jest.mock("../utils/api");

describe("Dashboard", () => {
  let component;

  afterEach(() => {
    jest.clearAllMocks(); // Clear mock status after each test
  });

  beforeEach(async () => {
    getOrderLines.mockResolvedValueOnce(MOCK_API_RESPONSE.successState);
    await act(async () => {
      component = mount(<Dashboard />);
      await Promise.resolve();

      component.update();
    });
  });

  it("should render without errors", () => {
    expect(component).toBeTruthy();
  });

  it("should open popover and apply filters onApply", () => {
    component.update();
    const filtersButton = component.find("#filtersButton").at(0);

    act(() => {
      filtersButton.props().onClick({
        currentTarget: {},
      });
    });

    component.update();
    const dashboardFilters = component.find("DashboardFilters").at(0);

    act(() => {
      dashboardFilters
        .props()
        .onApply({ typeId: 1, quantity: "", groupBy: null });
    });
  });

  it("should open popover and close popover from filters component", () => {
    component.update();
    const filtersButton = component.find("#filtersButton").at(0);

    act(() => {
      filtersButton.props().onClick({
        currentTarget: {},
      });
    });

    component.update();
    const dashboardFilters = component.find("DashboardFilters").at(0);

    act(() => {
      dashboardFilters.props().onCancel();
    });
  });

  it("should open popover and close popover", () => {
    component.update();
    const filtersButton = component.find("#filtersButton").at(0);

    act(() => {
      filtersButton.props().onClick({
        currentTarget: {},
      });
    });

    component.update();
    const popover = component.find("#popover").at(0);

    act(() => {
      popover.props().onClose();
    });
  });

  // it("should open menu and apply groupBy filter", () => {
  //   component.update();
  //   const menuButton = component.find("#menuButton").at(0);

  //   act(() => {
  //     menuButton.props().onClick({
  //       currentTarget: {},
  //     });
  //   });

  //   component.update();
  //   const menuItem = component.find("MenuItem").at(0);

  //   act(() => {
  //     menuItem.props().onClick();
  //   });
  // });

  // it("should open menu and close menu", () => {
  //   component.update();
  //   const menuButton = component.find("#menuButton").at(0);

  //   act(() => {
  //     menuButton.props().onClick({
  //       currentTarget: {},
  //     });
  //   });

  //   component.update();
  //   const menu = component.find("#menu").at(0);

  //   act(() => {
  //     menu.props().onClose();
  //   });
  // });
});

// describe("Dashboard Error state", () => {
//   let component;

//   afterEach(() => {
//     jest.clearAllMocks(); // Clear mock status after each test
//   });


//   beforeEach(async () => {
//     getOrderLines.mockResolvedValueOnce(null);
//     await act(async () => {
//       component = mount(<Dashboard />);
//       await Promise.resolve();

//       component.update();
//     });
//   });

//   it("should render without errors", () => {
//     expect(component).toBeTruthy();
//   });
// });
