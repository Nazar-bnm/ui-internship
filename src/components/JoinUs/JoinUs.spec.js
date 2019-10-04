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

  test('Rendering without crushing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
