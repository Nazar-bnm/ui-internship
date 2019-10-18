import React from 'react';
import { shallow, mount } from 'enzyme';
import mockAxios from 'jest-mock-axios';
import ItemList from './ItemsList';

describe('<ItemList />', () => {
  let props;
  let wrapper;
  // let response = [];
  // const wrapper = mount(<ItemList />);
  // const instance = wrapper.instance();

  // afterEach(() => {
  //   // cleaning up the mess left behind the previous test
  //   mockAxios.reset();
  // });

  beforeEach(() => {
    props = {
      ascendingOrder: true,
      orderType: 'Position',
      itemsOnPage: 6,
      itemList: [{a: 1, b: 2, c: 3}, {a: 1, b: 2, c: 3}],
      error: null
    };

    // wrapper = shallow(
    //   <ItemList {...props} />
    // );
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  // test('should get data from the server', () => {
  //   console.log(wrapper);
  //   console.log(wrapper.instance)
  //   instance.getListItems(response)
  //       .then(thenFn)
  //       .catch(catchFn);

  //   expect(mockAxios.post).toHaveBeenCalledWith('/product-list/', {data: response });

  //   let responseObj = { data: [] };
  //   mockAxios.mockResponse(responseObj);

  //   expect(thenFn).toHaveBeenCalledWith([]);
 
  //   // catch should not have been called
  //   expect(catchFn).not.toHaveBeenCalled();
  //   });
});
