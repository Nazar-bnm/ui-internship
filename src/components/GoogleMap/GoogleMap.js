import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Modal from '../Modal';

import './GoogleMap.scss';
import { googleAPIKey } from '../../config/googleMapAPIkey';

export const CN = 'google-map';

const locations = [
  ['Forum Lviv', 49.8499054, 24.0201103, 3],
  ['Viktoria Gardens', 49.807371, 23.975852, 2],
  ['King Cross', 49.7738766, 24.0086945, 1]
];

class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };

    this.onPageLoad = this.onPageLoad.bind(this);
  }

  componentDidMount() {
    if (!window.google) {
      const script = document.createElement('script');

      script.src = `https://maps.google.com/maps/api/js?key=${googleAPIKey}`;
      script.id = 'googleMaps';
      document.body.appendChild(script);
      script.addEventListener('load', () => this.onPageLoad());
    } else {
      this.onPageLoad();
    }
  }

  onPageLoad() {
    const { id, options } = this.props;
    const map = new window.google.maps.Map(document.getElementById(id), options);
    const infowindow = new window.google.maps.InfoWindow();

    for (let i = 0; i < locations.length; i++) {
      const marker = new window.google.maps.Marker({
        position: new window.google.maps.LatLng(locations[i][1], locations[i][2]),
        map
      });

      window.google.maps.event.addListener(marker, 'click', (function renderMarker() {
        return function renderMap() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        };
      }(marker, i)));
    }
  }

  showModal = () => {
    this.setState({
      show: true
    }, () => {
      this.onPageLoad();
    });
  };

  removeModal = () => {
    this.setState({
      show: false
    }, () => {
      this.onPageLoad();
    });
  };

  render() {
    const { id } = this.props;
    const { show } = this.state;

    return (
      <div>
        { show && (
          <Modal removeModal={this.removeModal}>
            <div>
              <div id={id} className={`${CN}__modal`} />
            </div>
          </Modal>
        )}
        {!show && <div id={id} className={cx(CN)} onClick={this.showModal} />}
      </div>
    );
  }
}

GoogleMap.propTypes = {
  id: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired
};

export default GoogleMap;
