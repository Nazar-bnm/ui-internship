import React from 'react';
import { shallow } from 'enzyme';

import Payment from './Payment';

describe('<OrderPreview />', () => {
  let wrapper = shallow(<Payment />);
  
  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
