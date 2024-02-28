import App from './App';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import "jest-canvas-mock";
import Adapter from '@cfaester/enzyme-adapter-react-18';


Enzyme.configure({adapter: new Adapter()})
describe('App', () => {
  it('should render without errors', () => {
    const component = shallow(<App />);
    expect(component).toBeTruthy();
  });
});
