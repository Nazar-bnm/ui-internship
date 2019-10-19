import React from 'react';
import { shallow } from 'enzyme';
import DefaultLayout from './DefaultLayout';

describe('<DefaultLayout />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <DefaultLayout />
    );
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
