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
    };
  },
});
