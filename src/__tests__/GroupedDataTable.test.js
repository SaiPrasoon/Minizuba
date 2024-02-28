import React from 'react';
import { shallow } from 'enzyme';
import GroupedDataTable from '../components/GroupedDataTable';
import { TEST_ORDERLINES } from '../utils/testData';

const props = {
  data: TEST_ORDERLINES,
  groupByField: 'StockItemID'
}

describe('GroupedDataTable', () => {
  let component;

  beforeEach(()=>{
    component = shallow(<GroupedDataTable {...props} />);
  })

  it('should render without errors', () => {
    expect(component).toBeTruthy();
  });
});