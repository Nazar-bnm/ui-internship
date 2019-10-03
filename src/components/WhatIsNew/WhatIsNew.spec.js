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

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
