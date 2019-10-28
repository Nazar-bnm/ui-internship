import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import './Dropdown.scss';

export const CN = 'dropdown';

export default class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
      selectedItem: null
    };

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.renderLabel = this.renderLabel.bind(this);
    this.renderMenuItems = this.renderMenuItems.bind(this);
  }

  toggleDropdown() {
    this.setState((prevState) => ({ expanded: !prevState.expanded }));
  }

  selectOption(selectedItem) {
    this.setState({ selectedItem }, () => {
      const { onDropdownChange } = this.props;

      onDropdownChange && onDropdownChange(selectedItem);
    });
  }

  renderLabel() {
    const { menuOptions, value, placeholder } = this.props;
    const { selectedItem } = this.state;
    const labelTest = menuOptions.find((item) => item.value === selectedItem);
    const label = (labelTest && labelTest.label) || value || placeholder;

    return label;
  }

  renderMenuItems() {
    const { menuOptions } = this.props;

    return menuOptions.map(({ value, label }, i) => (
      <li
        key={value}
      >
        <button
          className={`${CN}__items__element`}
          type="button"
          selectednum={i}
          onClick={() => this.selectOption(value)}
        >
          {label}
        </button>
      </li>
    ));
  }

  render() {
    const { className } = this.props;
    const { expanded } = this.state;
    const iconName = `caret ${expanded ? 'up' : 'down'} icon`;

    return (
      <div
        className={cx(CN, className)}
        onClick={this.toggleDropdown}
        aria-expanded={expanded}
      >
        <span className={`${CN}__selected`}>
          {this.renderLabel()}
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
  /**
   * className - component's class name.
   */
  className: PropTypes.string,

  /**
   * menuOptions - the array of dropdown options.
   */
  // menuOptions: PropTypes.arrayOf(PropTypes.shape({
  //   label: PropTypes.oneOfType([
  //     PropTypes.string,
  //     PropTypes.node
  //   ]).isRequired,
  //   value: PropTypes.string.isRequired,
  //   selected: PropTypes.bool,
  //   disabled: PropTypes.bool
  // })).isRequired,

  /**
   * placeholder - the placeholder of the dropdown
   */

  placeholder: PropTypes.string,

  /**
   * The value of the dropdown.
   * A default value can be provided which corresponds to the value of an included pal-dropdown-item.
   */
  value: PropTypes.string,

  /**
   * disabled - indicator if dropdown is disabled or not
   */
  // disabled: PropTypes.bool,

  /**
   * opened - indicator whether the dropdown is opened or closed.
   * Can be used to open dropdown by default.
   */
  // opened: PropTypes.bool

  /**
  * this is a callback function that is passing key
   */
  onDropdownChange: PropTypes.func.isRequired
};

Dropdown.defaultProps = {
  className: '',
  placeholder: '',
  value: ''
  // disabled: false,
  // opened: false
};
