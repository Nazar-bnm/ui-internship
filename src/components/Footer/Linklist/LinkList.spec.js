import React from 'react';
import { shallow } from 'enzyme';
import LinkList from './LinkList';
import config from '../../../../config';

describe('<LinkList />', () => {
  const { linkListItems } = config;
  const { guide } = linkListItems;

  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      links: guide,
    };

    wrapper = shallow(
      <LinkList {...props} />
    );
  });
  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
