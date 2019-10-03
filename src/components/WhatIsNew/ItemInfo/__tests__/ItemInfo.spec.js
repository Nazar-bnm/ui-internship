import React from 'react';
import { shallow } from 'enzyme';
import ItemInfo from '../ItemInfo';

describe('<ItemInfo />', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      item: {
        photo: 'https://www.next.ua/nxtcms/resource/image.jpg',
        title: 'Color Summer',
        collection: 'spring collection 2016',
        category: 'kids',
      },
    };

    wrapper = shallow(
      <ItemInfo {...props} />
    );
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
