import xor from 'lodash/array/xor';
import { CHECK_CHECKBOX, RESET_FILTERS } from '@/constants/actionTypes';

const initialState = {
  bottoms: [],
  tops: [],
  sizes: [],
  price: [],
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
    default:
      return state;
  }
}
