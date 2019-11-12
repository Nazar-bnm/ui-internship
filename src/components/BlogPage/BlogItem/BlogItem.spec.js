import React from 'react';
import { shallow } from 'enzyme';

import BlogItem from './BlogItem';

describe('<BlogItem />', () => {
  test('should match snapshot', () => {
    const wrapper = shallow(<BlogItem 
      key='1'
      title='Title'
      date='11 August 2019'
      photo='https://res.cloudinary.com/dr8z1kafr/image/upload/v1573482788/Interns/blog/1.jpg'
      text='Text'
      labels={['summer', 'fun']}
      className='bottom-border'
    />);
    expect(wrapper).toMatchSnapshot();
  });
});