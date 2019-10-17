import React from 'react';
import { shallow } from 'enzyme';

import Slide from './Slide';

const slideData = {
  title: 'new collection',
  description: 'Special autumn edition',
  buttonName: 'discover the editorial',
};

const { title, description, buttonName } = slideData;

describe('<Slide />', () => {
  it('should make a snapshot of Slide component', () => {
    const wrapper = shallow(
      <Slide title={title} description={description} buttonName={buttonName} />,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
