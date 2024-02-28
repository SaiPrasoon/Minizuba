import React from 'react';
import { shallow } from 'enzyme';
import GroupedDataItem from '../components/GroupedDataItem';
import { TEST_ORDERLINES } from '../utils/testData';
import { act } from 'react-dom/test-utils';

const props = {
  data: TEST_ORDERLINES,
  groupByField: 'StockItemID',
  dataKey: '2',
  key: 'groupedData_StockItemID_2'
}

describe('GroupedDataItem', () => {
  let component;

  beforeEach(()=>{
    component = shallow(<GroupedDataItem {...props} />);
  });

  it('should render without errors', () => {
    expect(component).toBeTruthy();
  });

  it('should show table on toggle', ()=> {
    const showTableButton = component.find('#showTableButton').at(0);
    act(()=>{
      showTableButton.props().onClick();
    });

    const table = component.find('#table').at(0);

    expect(table).toBeTruthy();
 
  })

});