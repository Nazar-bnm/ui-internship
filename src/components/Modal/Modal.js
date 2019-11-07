import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import './Modal.scss';

const CN = 'modal';

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isTransition: false
    };

    this.modalRef = React.createRef();
    this.setTransition = this.setTransition.bind(this);
    this.hideModalOnBackdrop = this.hideModalOnBackdrop.bind(this);
    this.hideModalOnEscape = this.hideModalOnEscape.bind(this);
    this.removeModalOnTransitionEnd = this.removeModalOnTransitionEnd.bind(this);
  }

  componentDidMount() {
    document.body.classList.add('remove-scroll');
    this.modalRef.current.focus();
  }

  componentWillUnmount() {
    const { removeModal } = this.props;

    document.body.classList.remove('remove-scroll');
    this.modalRef.current.removeEventListener('transitionEnd', removeModal);
  }

  setTransition = () => {
    this.setState({
      isTransition: true
    });
  };

  hideModalOnBackdrop = (event) => {
    event.target.classList.contains(CN) && this.setTransition();
  };

  hideModalOnEscape = (event) => {
    const escapeKeyCode = 27;

    event.keyCode === escapeKeyCode && this.setTransition();
  };

  removeModalOnTransitionEnd(e) {
    const { removeModal } = this.props;

    if (e.target.classList.contains(CN)) {
      this.setState({
        isTransition: false
      });

      removeModal();
    }
  }

  render() {
    const { children, className } = this.props;
    const { isTransition } = this.state;

    return (
      <div
        tabIndex={-1}
        ref={this.modalRef}
        className={cx(CN, { [`${CN}--transition`]: isTransition })}
        onClick={this.hideModalOnBackdrop}
        onKeyDown={this.hideModalOnEscape}
        onTransitionEnd={this.removeModalOnTransitionEnd}
      >
        <div
          className={cx(`${CN}__window`, className)}
        >
          {children}
          <span
            className={`${CN}__close-button`}
            role="button"
            tabIndex={0}
            onClick={this.setTransition}
          >
            <i className={cx('close', 'icon')} />
          </span>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  removeModal: PropTypes.func.isRequired
};

Modal.defaultProps = {
  className: '',
  children: null
};

export default Modal;
