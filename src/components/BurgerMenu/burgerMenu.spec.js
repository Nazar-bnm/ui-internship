import React from 'react';
import { shallow } from 'enzyme';

import BurgerMenu from './BurgerMenu';

describe('<BurgerMenu />', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      menuItemsList: [
        { itemName: 'woman', url: 'not_found' },
        { itemName: 'man', url: 'not_found' },
        { itemName: 'kids', url: 'not_found' },
        { itemName: 'accessories', url: 'not_found' },
        { itemName: 'what\'s new', url: 'not_found' },
        { itemName: 'brands', url: 'not_found' },
        { itemName: 'sale', url: 'not_found' },
        { itemName: 'blog', url: 'not_found' },
      ],
    };

    wrapper = shallow(
      <BurgerMenu {...props} />
    );
  });
  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
