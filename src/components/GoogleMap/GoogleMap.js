import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import './GoogleMap.scss';

export const CN = 'google-map';

const locations = [
  ['Forum Lviv', 49.8499054, 24.0201103, 3],
  ['Viktoria Gardens', 49.807371, 23.975852, 2],
  ['King Cross', 49.7738766, 24.0086945, 1]
];

class GoogleMap extends Component {
  constructor(props) {
    super(props);

    this.onPageLoad = this.onPageLoad.bind(this);
  }

  componentDidMount() {
    if (!window.google) {
      const script = document.createElement('script');
      script.src = 'https://maps.google.com/maps/api/js?key=AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo';
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
      // const event = new window.google.maps.event.addListener(marker, 'click', (function renderMap() {
        //   infowindow.setContent(locations[i][0]);
        //   infowindow.open(map, marker);
        // }(marker, i)));
        // // event.addListener(marker, 'click', (function renderMap() {
      // //     infowindow.setContent(locations[i][0]);
      // //     infowindow.open(map, marker);
      // // }(marker, i)));
      // eslint-disable-next-line
      const test = () => new window.google.maps.event.addListener(marker, 'click', (function renderMarker() {
        return function renderMap() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        };
      }(marker, i)));
      test();
    }
  }


  render() {
    const { id } = this.props;
    return <div id={id} className={cx(CN)} />;
  }
}

GoogleMap.propTypes = {
  id: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired
};

export default GoogleMap;
