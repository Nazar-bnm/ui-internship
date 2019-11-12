import React from 'react';
import { shallow } from 'enzyme';

import Preloader from './Preloader';

describe('<Preloader />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Preloader />
    );
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
