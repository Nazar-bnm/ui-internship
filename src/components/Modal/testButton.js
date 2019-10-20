import React, { Component } from 'react';
import Modal from './Modal';

class TestModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  showModal = () => {
    this.setState({
      show: true
    });
  };

  hideModal = () => {
    this.setState({
      show: false
    });
  };

  render() {
    const { show } = this.state;
    return (
      <>
        <button type="button" onClick={this.showModal}>
          show modal
        </button>
        <Modal show={show} hideModal={this.hideModal}>
          <p>Hello</p>
        </Modal>
      </>
    );
  }
}

export default TestModal;
