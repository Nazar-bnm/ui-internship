import React from 'react';
import { shallow } from 'enzyme';

import CartPage from './CartPage';

describe('<CartPage />', () => {
  const wrapper = shallow(<CartPage className={''} changeQuantity={10} removeItemFromCart={() => {}} userCart={[]} products={[]} setTotalCount={() => {}} />);
  
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});