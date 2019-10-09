import React from 'react';
import { shallow } from 'enzyme';
import PageNavigation from './PageNavigation';

describe('<PageNavigation />', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      options: [
        { value: 'women', label: 'women', link: '/404' },
        { value: 'men', label: 'men', link: '/404' },
        { value: 'kids', label: 'kids', link: '/404' },
        { value: 'accs', label: 'accessories', link: '/404' },
        { value: 'new', label: 'what\'s new', link: '/404' },
        { value: 'brands', label: 'brands', link: '/404' },
        { value: 'sale', label: 'sale', link: '/404' },
        { value: 'blog', label: 'blog', link: '/404' },
      ],
    };

    wrapper = shallow(
      <PageNavigation {...props} />
    );
  });
  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
