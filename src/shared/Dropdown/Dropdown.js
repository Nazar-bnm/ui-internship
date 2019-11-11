import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import './Dropdown.scss';

const CN = 'dropdown';

class Dropdown extends Component {
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

  static getDerivedStateFromProps(props) {
    if (props.dropdownSelectedID) {
      return { selectedItem: props.dropdownSelectedID };
    }

    return null;
  }

  toggleDropdown() {
    this.setState((prevState) => ({ expanded: !prevState.expanded }));
  }

  selectOption(selectedItem) {
    const { onDropdownChange } = this.props;

    this.setState({ selectedItem });
    onDropdownChange && onDropdownChange(selectedItem);
  }

  renderLabel() {
    const {
      menuOptions,
      value,
      placeholder
    } = this.props;

    const { selectedItem } = this.state;
    const labelTest = menuOptions && menuOptions.find((item) => item.value === selectedItem);
    const label = (labelTest && labelTest.label) || value || placeholder;

    return label;
  }

  renderMenuItems() {
    const { menuOptions } = this.props;
    if (!menuOptions) {
      return null;
    }

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
  className: PropTypes.string,
  menuOptions: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node
    ]).isRequired,
    value: PropTypes.string.isRequired,
    selected: PropTypes.bool,
    disabled: PropTypes.bool
  })).isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onDropdownChange: PropTypes.func
};
Dropdown.defaultProps = {
  className: '',
  placeholder: '',
  value: '',
  onDropdownChange: () => {}
};

export default Dropdown;
