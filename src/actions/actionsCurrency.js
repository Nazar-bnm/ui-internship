import ls from 'local-storage';
import { GET_THE_CURRENCY } from '../constants/actionTypes';

const fallbackCoef = {
  USD: {
    USD: 1,
    EUR: 0.95,
    UAH: 24.5
  }
};

export const changeCurrency = (payload) => ({ type: GET_THE_CURRENCY, payload });

export const fetchCurrency = (payload) => (
  (dispatch) => {
    const { value: currency, symbol } = payload;
    const currKey = `USD_${currency}`;

    fetch(`https://free.currencyconverterapi.com/api/v6/convert?q=${currKey}&compact=ultra&apiKey=d1b5218e0be93e157106`)
    // fetch(`https://free.currencyconverterapi.com/api/v6/convert?q=${currKey}&compact=ultra&apiKey=73eef78556be1fe4528f`)
    // fetch(`https://free.currencyconverterapi.com/api/v6/convert?q=${currKey}&compact=ultra&apiKey=ac9175b5fe3707f596db`)
      .then((response) => response.json())
      .then((currencyObj) => {
        const convertedVal = currencyObj[currKey] || fallbackCoef.USD[currency];
        dispatch(changeCurrency({ currency, symbol, currencyKey: convertedVal }));
      });
    ls.set('currency', currency);
  }
);
