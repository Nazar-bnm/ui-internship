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

    wrapper = shallow(
      <BlogPage blogItems={mockedBlogsPage} getLabel={mockedLabel} />
    );
    mock.onGet(`${process.env.BASE_URL}/blogsPage`).reply(200, mockedBlogsPage);
  });

  test('should check `componentDidMount()`', () => {
    const instance = wrapper.instance();

    jest.spyOn(instance, 'getBlogItems');
    instance.componentDidMount();
    expect(instance.getBlogItems).toHaveBeenCalledTimes(1);
  });

  test('should call getBlogItems function when prev category is not equal to current category', () => {
    const instance = wrapper.instance();
    wrapper.setState({ category: 'name of a category' });
    jest.spyOn(instance, 'getBlogItems');
    instance.componentDidUpdate(wrapper.props(), {
      category: 'name of old category'
    });
    expect(instance.getBlogItems).toHaveBeenCalledTimes(1);
  });

  test('should change category state when click on category', () => {
    const prevStateCategory = wrapper.state().category;
    const mockedEvent = { target: { innerHTML: 'name of a category' } };

    wrapper
      .find('.categories__item')
      .first()
      .simulate('click', mockedEvent);
    expect(wrapper.state().category).not.toBe(prevStateCategory);
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
