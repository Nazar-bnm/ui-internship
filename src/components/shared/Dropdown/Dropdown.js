import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import './Dropdown.scss';

export const CN = 'dropdown';

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
      selectedID: props.mainLabel ? null : 0,
      options: props.options
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.selectOption = this.selectOption.bind(this);
  }

  getLabel() {
    const { mainLabel } = this.props;
    const { selectedID, options } = this.state;

    return (options[selectedID] && options[selectedID].label) || mainLabel;
  }

  selectOption(e) {
    // console.log(e.target);

    const { mainLabel } = this.props;
    const { options } = this.state;
    const { changeItemsOnPageNum, changeOrderType } = this.props;
    const selectedID = e.target.getAttribute('selectednum');
    const selectedLabel = options[selectedID].label;
    const chosenOption = e.target.getAttribute('selectednum');
    
    this.setState({
      selectedID: chosenOption
    });
    // console.log('qty', selectedLabel);

    // The following 'if' statement checks if the 'selectedLabel' value is a number when converted into number. This is usefull in cases when the 'selectedLabel' value is a string (it converts into NaN).
    if (!Number.isNaN(Number(selectedLabel))) {
      console.log('qty:', selectedLabel);
      return changeItemsOnPageNum(selectedLabel);
    }
    changeOrderType(selectedLabel);
    if (options[0].label === 'size:') {
      console.log('size:', selectedLabel);
    }
    if (options[0].label === 'color:') {
      console.log('color:', selectedLabel);
    }
  }

  toggleDropdown() {
    this.setState((prevState) => ({ expanded: !prevState.expanded }));
  }

  renderMenuItems() {
    const { options } = this.state;

    return options.map(({ value, label }, i) => (
      <li
        key={value}
        value={value}
      >
        <button
          className={`${CN}__items__element`}
          type="button"
          selectednum={i}
          onClick={(e) => this.selectOption(e)}
        >
          {label}
        </button>
      </li>
    ));
  }


  render() {
    const { expanded } = this.state;
    const iconName = `caret ${expanded ? 'up' : 'down'} icon`;
    const { options, selectedID } = this.state;
    // console.log(options[selectedID]);

    return (
      <div
        className={cx(CN)}
        onClick={this.toggleDropdown}
        aria-expanded={expanded}
      >
        <span className={`${CN}__selected`}>
          {this.getLabel()}
        </span>
        <ul className={`${CN}__items`}>
          {this.renderMenuItems()}
        </ul>
        <i className={iconName} />
      </div>
    );
  }
}

Dropdown.propTypes = {
  options: PropTypes.array.isRequired,
  changeItemsOnPageNum: PropTypes.func,
  changeOrderType: PropTypes.func
};

Dropdown.defaultProps = {
  changeItemsOnPageNum: () => {},
  changeOrderType: () => {}
};

export default Dropdown;
