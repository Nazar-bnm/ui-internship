import { CHECK_CHECKBOX, RESET_FILTERS } from '../constants/actionTypes';

const initialState = {
  bottoms: [],
  tops: [],
  size: [],
  price: [],
  colors: [],
  brands: []
};

function deleteItem(array, id) {
  return array.filter((item) => item !== id);
}

function addItem(array, id) {
  return [...array, id];
}

export default function reducerFilter(state = initialState, { type, payload }) {
  switch (type) {
    case CHECK_CHECKBOX: {
      if (payload.clicked) {
        return {
          ...state,
          [payload.category]: addItem(state[payload.category], payload.id)
        };
      }
      return {
        ...state,
        [payload.category]: deleteItem(state[payload.category], payload.id)
      };
    }
    case RESET_FILTERS: {
      state = initialState;

      return {
        ...state
      };
    }
    default:
      return state;
  }
}
