import React from 'react';
import { shallow } from 'enzyme';
import Loader from '../components/Loader';
import "jest-canvas-mock";


describe('Loader', () => {
  it('should render without errors', () => {
    const component = shallow(<Loader />);
    expect(component).toBeTruthy();
  });
});