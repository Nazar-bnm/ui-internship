import React from 'react';
import { shallow } from 'enzyme';
import LinkList from './LinkList';

describe('<LinkList />', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      links: { heading: 'Shopping guide',
        data: [
          { title: 'About G-Star Raw', link: '#' },
          { title: 'Corporate Responsibility', link: '#' },
          { title: 'Press Room', link: '#' },
          { title: 'Careers', link: '#' },
          { title: 'G-Star Retailers', link: '#' },
          { title: 'Open a G-Star Store', link: '#' },
        ],
      },
    };

    wrapper = shallow(
      <LinkList {...props} />
    );
  });
  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
