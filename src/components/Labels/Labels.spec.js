import React from 'react';
import { shallow } from 'enzyme';

import Labels from './Labels';

describe('<Labels />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Labels />
    );
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
