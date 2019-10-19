// import React from 'react';
// import { shallow } from 'enzyme';
// import WhatIsNew from './WhatIsNew';
//
// describe('<WhatIsNew />', () => {
//   let wrapper;
//
//   beforeEach(() => {
//     wrapper = shallow(
//       <WhatIsNew />
//     );
//   });
//
//   test('renders', () => {
//     wrapper = shallow(<WhatIsNew />);
//     expect(wrapper.exists()).toBe(true);
//   });
//
//   test('should match snapshot', () => {
//     expect(wrapper).toMatchSnapshot();
//   });
// });

import React from 'react';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

import { mount } from 'enzyme';
import WhatIsNew from './WhatIsNew';
import mockedData from '../../mockedDataForTests';

describe('<WhatIsNew />', () => {
  let wrapper;
  const { mockedWhatIsNewSection } = mockedData;

  beforeEach(() => {
    wrapper = mount(<WhatIsNew />);
    const mock = new MockAdapter(axios);

    mock.onGet(`${process.env.BASE_URL}/what-is-new`).reply(200, mockedWhatIsNewSection);
  });

  test('should check `componentDidMount()`', () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, 'getImages');
    instance.componentDidMount();
    expect(instance.getImages).toHaveBeenCalledTimes(1);
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

