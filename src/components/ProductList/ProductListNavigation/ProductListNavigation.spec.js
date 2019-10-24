import React from 'react';
import { shallow } from 'enzyme';

import ProductListNavigation from './ProductListNavigation';

describe('<ProductListNavigation />', () => {
  let props;
  beforeEach(() => {
    props = {
        ascendingOrder: true,
        changeItemsOnPageNum: jest.fn(),
        changeOrderType: jest.fn(),
        changeSortingOrder: jest.fn(),
    };
  });
  
  test('should match snapshot', () => {
   const wrapper = shallow(<ProductListNavigation {...props} />);
   expect(wrapper).toMatchSnapshot();
  });
});
