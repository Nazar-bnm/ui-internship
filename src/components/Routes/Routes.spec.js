import React from 'react';
import { shallow } from 'enzyme';
import Routes from './Routes';

describe('<NotFoundPage />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Routes />
    );
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
