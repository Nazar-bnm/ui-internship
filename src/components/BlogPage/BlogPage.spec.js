import React from 'react';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { shallow } from 'enzyme';

import BlogPage from './BlogPage';
import mockedData from '../../mockedDataForTests';

describe('<BlogPage />', () => {
  const { mockedBlogsPage } = mockedData;
  const mockedLabel = jest.fn();
  let wrapper;

  beforeEach(() => {
    const mock = new MockAdapter(axios);

    wrapper = shallow(<BlogPage blogItems={mockedBlogsPage} getLabel={mockedLabel} />);
    mock.onGet(`${process.env.BASE_URL}/blogsPage`).reply(200, mockedBlogsPage);
  });

  test('should check `componentDidMount()`', () => {
    const instance = wrapper.instance();
    
    jest.spyOn(instance, 'getBlogItems');
    instance.componentDidMount();
    expect(instance.getBlogItems).toHaveBeenCalledTimes(1);
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
