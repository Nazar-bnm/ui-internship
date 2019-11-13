import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

Object.defineProperty(window.document, 'cookie', {
  writable: true,
  value: function(_value) {
    return {
      get: function _get() {
        return _value;
      },
      set: function _set(v) {
        _value = v;
      },
    }
  }
});

Object.defineProperty(window, 'google', {
  writable: true,
  value: {
    maps: new Object()
  }
});

window.google.maps.Map = function() {};
window.google.maps.InfoWindow = function() {};
window.google.maps.Marker = function() {};
window.google.maps.LatLng = function() {};
window.google.maps.event = {
  addListener: function() {}
}