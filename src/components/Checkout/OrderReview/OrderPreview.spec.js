import React from 'react';
import { shallow } from 'enzyme';

import OrderReview from './OrderReview';

describe('<OrderPreview />', () => {
  let wrapper = shallow(<OrderReview />);
  
  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
