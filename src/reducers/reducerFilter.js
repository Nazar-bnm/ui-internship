import xor from 'lodash/array/xor';
import { CHECK_CHECKBOX, RESET_FILTERS, SET_PRICE_RANGE } from '../constants/actionTypes';

const initialState = {
  bottoms: [],
  tops: [],
  sizes: [],
  price: {from: 500, to: 1500},
  colors: [],
  brands: []
};

export default function reducerFilter(state = initialState, { type, payload }) {
  switch (type) {
    case CHECK_CHECKBOX: {
      return {
        ...state,
        [payload.category]: xor(state[payload.category], [payload.id])
      };
    }
    case RESET_FILTERS: {
      return {
        ...initialState
      };
    }
    case SET_PRICE_RANGE: {
      return {
        ...state,
        price: {from: payload.from, to: payload.to}
      }
    }
    default:
      return state;
  }
}
