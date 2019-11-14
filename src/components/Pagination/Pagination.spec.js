import React from "react";
import { mount } from "enzyme";

import Pagination from "./Pagination";

describe("<Pagination />", () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      currentPage: "10",
      numberOfPages: 10,
      visibleNumbers: 3,
      setCurrentPage: () => {}
    };

    wrapper = mount(<Pagination {...props} />);
  });

  it("should match snapshot <Pagination />", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should set inputValue to currentPage prop or 1", () => {
    const inputInstance = wrapper.find({ type: "number" }).instance();

    expect(inputInstance.value).toBe(wrapper.props().currentPage);
    wrapper.setProps({ currentPage: "12" });
    expect(inputInstance.value).toBe(wrapper.props().currentPage);
    wrapper.setProps({ numberOfPages: 1 });
    expect(inputInstance.value).toBe('1');
  });

  it("should set state isAnimation to false when animation ends", () => {
    wrapper.find({ type: "number" }).simulate("animationEnd");
    expect(wrapper.state().isAnimation).toBeFalsy();
  });

  it("should call setCurrent page on some dom events", () => {
    const mockEvent = {
      target: {
        value: 5
      }
    };
    const mockFunc = jest.fn();

    wrapper.setProps({setCurrentPage: mockFunc});

    wrapper.find({ type: "number" }).simulate("input", mockEvent);
    expect(mockFunc).toBeCalledTimes(1);
    
    wrapper
      .find(".pagination-nav-arrow")
      .first()
      .simulate("click");
    expect(mockFunc).toBeCalledTimes(2);

    wrapper
      .find(".pagination-nav-arrow")
      .last()
      .simulate("click");
    expect(mockFunc).toBeCalledTimes(3);

    wrapper
      .find(".pagination-nav-number")
      .first()
      .simulate("click");
    expect(mockFunc).toBeCalledTimes(4);
  });

  it("should set isValid input true or false depending on input value", () => {
    let mockEvent = {
      target: {
        value: ""
      }
    };

    expect(wrapper.state().isValidInput).toBeTruthy();

    wrapper.find({ type: "number" }).simulate("input", mockEvent);
    expect(wrapper.state().isValidInput).toBeTruthy();

    mockEvent.target.value = '15';
    wrapper.find({ type: "number" }).simulate("input", mockEvent);
    expect(wrapper.state().isValidInput).toBeFalsy();
  });

  it("should not be any navigation numbers when the number of pages is equal to 1", () => {
    wrapper.setProps({numberOfPages: 1})

    expect(wrapper.exists(".pagination-nav-numbers")).toBeFalsy();
  });
});
