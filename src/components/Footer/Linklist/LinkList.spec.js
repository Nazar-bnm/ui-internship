import React from 'react';
import { shallow } from 'enzyme';
import LinkList from './LinkList';
import { linkListItems } from '../../../config/footer';

describe('<LinkList />', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      links: linkListItems.guide,
    };

    wrapper = shallow(
      <LinkList {...props} />
    );
  });
  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
