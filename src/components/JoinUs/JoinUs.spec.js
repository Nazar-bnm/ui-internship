import React from 'react';
import { shallow } from 'enzyme';

import JoinUs from './JoinUs';

describe('Rendering without crushing', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <JoinUs />
    );
  });

  test('shold render', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
