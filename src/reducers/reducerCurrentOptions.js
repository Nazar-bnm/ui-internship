import {
  GET_THE_CURRENCY,
  GET_THE_CURRENCY_KEY
  // GET_USD,
  // GET_EURO,
  // GET_UAH
} from '../constants/actionTypes';
import config from '../../config';

const { currency } = config.options;

const initialState = {
  currency: currency[0].label,
  currencyKey: 1
};

export default function reducerCurrency(state = initialState, { type, payload }) {
  switch (type) {
    case GET_THE_CURRENCY: {
      console.log(payload);
      return {
        ...state,
        currency: payload.currency,
        currencyKey: payload.currencyKey
      };
    }

    default:
      return state;
  }
}
