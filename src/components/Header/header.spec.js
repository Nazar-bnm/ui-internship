import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

describe('<Header />', () => {
  const cartItemsList = [1, 2, 3, 4, 5];
  let wrapper = shallow(<Header cartItems={cartItemsList}/>);

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
