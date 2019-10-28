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
      selectedID: 0,
      options: props.options
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.selectOption = this.selectOption.bind(this);
  }

  selectOption(e) {
    const { options } = this.state;
    const {
      changeItemsOnPageNum,
      changeOrderType,
      changeDropdownSortingSelectedID
    } = this.props;
    const selectedID = e.target.getAttribute('selectednum');
    const selectedLabel = options[selectedID].label;
    const chosenOption = e.target.getAttribute('selectednum');

    this.setState({
      selectedID: chosenOption
    });
    changeDropdownSortingSelectedID && changeDropdownSortingSelectedID(chosenOption);
    // The following 'if' statement checks if the 'selectedLabel' value is a number when converted into number.
    // This is usefull in cases when the 'selectedLabel' value is a string (it converts into NaN).
    if (!Number.isNaN(Number(selectedLabel))) {
      return changeItemsOnPageNum(selectedLabel);
    }
    changeOrderType(selectedLabel);
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
          onClick={this.selectOption}
        >
          {label}
        </button>
      </li>
    ));
  }

  render() {
    const { expanded, selectedID, options } = this.state;
    const { dropdownSortingSelectedID = selectedID } = this.props;
    const iconName = `caret ${expanded ? 'up' : 'down'} icon`;

    return (
      <div
        className={cx(CN)}
        onClick={this.toggleDropdown}
        aria-expanded={expanded}
      >
        <span className={`${CN}__selected`}>
          {options[dropdownSortingSelectedID].label}
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
