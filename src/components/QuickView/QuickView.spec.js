import React from "react";
import { shallow } from "enzyme";

import QuickView from "./QuickView";
import Modal from "../Modal";

describe("<QuickView />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<QuickView product={{ id: 10 }} />);
  });

  it("should match shapshot <QuickView />", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render Modal component when click on the icon", () => {
    expect(wrapper.find(Modal)).toHaveLength(0);
    wrapper.find("i").simulate("click");
    expect(wrapper.find(Modal)).toHaveLength(1);
  });

  it("should set state prop show to false when removeModal prop is executed", () => {
    wrapper.setState({show: true});
    wrapper.find(Modal).prop('removeModal')();
    expect(wrapper.state().show).toBeFalsy();
  })
});
