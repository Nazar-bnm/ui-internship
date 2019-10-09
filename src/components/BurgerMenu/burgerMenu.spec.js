import React from 'react';
import { shallow } from 'enzyme';
import BurgerMenu from './BurgerMenu';

describe('<BurgerMenu />', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      menuItemsList: [
        { itemName: 'woman', url: '404' },
        { itemName: 'man', url: '404' },
        { itemName: 'kids', url: '404' },
        { itemName: 'accessories', url: '404' },
        { itemName: 'what\'s new', url: '404' },
        { itemName: 'brands', url: '404' },
        { itemName: 'sale', url: '404' },
        { itemName: 'blog', url: '404' },
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
