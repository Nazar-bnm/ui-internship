import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from './NotFoundPage';

describe('<NotFoundPage />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <NotFoundPage />
    );
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
