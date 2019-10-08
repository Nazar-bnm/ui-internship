import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './Dropdown.scss';
export const CN = 'dropdown';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      selectedID: 0,
      options: props.options,
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.selectOption = this.selectOption.bind(this);
  }

  selectOption(e) {
    const option = e.target;
    this.setState({
      selectedID: option.getAttribute('selectednum'),
    });
  }

  toggleDropdown() {
    this.setState( {
      expanded: !this.state.expanded,
    });
  }

  renderMenuItems() {
    const { options } = this.state;
    return options.map(({ value, label }, i) => (
      <li
        className={`${CN}__items__element`}
        key={value}
        selectednum={i}
        value={value}
        onClick={this.selectOption}
      >
        {label}
      </li>
    ));
  }

  render() {
    const { expanded, selectedID, options } = this.state;
    const iconName = `caret ${this.state.expanded ? 'up' : 'down'} icon`;

    return (
      <div className={cx(CN)}
        onClick={this.toggleDropdown}
        aria-expanded={expanded}
      >
        <span className={`${CN}__selected`}>
          {options[selectedID].label}
        </span>
        <ul className={`${CN}__items`}>
          {this.renderMenuItems()}
        </ul>
        <i className={iconName}></i>
      </div>
    );
  };
};

Dropdown.propTypes = {
  options: PropTypes.array,
  selected: PropTypes.number,
  className: PropTypes.string,
};

Dropdown.defaultProps = {
  currency: [
    { value: 'USD', label: 'USD' },
    { value: 'EURO', label: 'EURO' },
    { value: 'UAH', label: 'UAH' },
  ],
};

export default Dropdown;
