import React from 'react';
import { shallow } from 'enzyme';
import BurgerMenu from './BurgerMenu';

describe('<BurgerMenu />', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      menuItemsList: [
        { itemName: 'woman' },
        { itemName: 'man' },
        { itemName: 'kids' },
        { itemName: 'accessories' },
        { itemName: 'what\'s new' },
        { itemName: 'brands' },
        { itemName: 'sale' },
        { itemName: 'blog' },
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
