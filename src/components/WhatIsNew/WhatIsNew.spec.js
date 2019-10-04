import React from 'react';
import { shallow } from 'enzyme';
import WhatIsNew from './WhatIsNew';

describe('<WhatIsNew />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <WhatIsNew />
    );
  });

  test('renders', () => {
    wrapper = shallow(<WhatIsNew />);
    expect(wrapper.exists()).toBe(true);
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
