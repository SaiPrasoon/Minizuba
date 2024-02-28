import React from 'react';
import { shallow } from 'enzyme';
import NoData from '../components/NoData';
import "jest-canvas-mock";

describe('NoData', () => {
  it('should render without errors', () => {
    const component = shallow(<NoData />);
    expect(component).toBeTruthy();
  });
});