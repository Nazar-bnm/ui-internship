import xor from 'lodash';
import { CHECK_CHECKBOX, RESET_FILTERS, SET_PRICE_RANGE } from '../constants/actionTypes';

const initialState = {
  bottoms: [],
  tops: [],
  sizes: [],
  price: { fromPrice: 50, toPrice: 2000 },
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
        price: { ...state.price, [payload.label]: payload.value }
      };
    }
    default:
      return state;
  }
}
