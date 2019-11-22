import {
  GET_THE_CURRENCY
  // GET_USD,
  // GET_EURO,
  // GET_UAH
} from '../constants/actionTypes';
import config from '../../config';

const { currency } = config.options;

const initialState = {
  currency: currency[0].label
};

export default function reducerCurrency(state = initialState, { type, payload }) {
  switch (type) {
    case GET_THE_CURRENCY: {
      console.log(payload);
      return {
        ...state,
        currency: payload
      };
    }
    default:
      return state;
  }
}
