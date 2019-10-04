import React from 'react';
import { shallow } from 'enzyme';
import Header from './headerMockups';

describe('<Header />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Header />
    );
  });
  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
