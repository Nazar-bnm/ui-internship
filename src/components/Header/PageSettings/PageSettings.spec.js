import React from 'react';
import { shallow } from 'enzyme';

import PageSettings from './PageSettings';

describe('<PageSettings />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <PageSettings />
    );
  });
  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
