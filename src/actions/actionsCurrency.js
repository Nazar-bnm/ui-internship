import ls from 'local-storage';
import { GET_THE_CURRENCY } from '../constants/actionTypes';

export const changeCurrency = (payload) => ({ type: GET_THE_CURRENCY, payload });

export const fetchCurrency = (payload) => (
  (dispatch) => {
    const { value: currency, symbol } = payload;
    const currKey = `USD_${currency}`;

    // fetch(`https://free.currencyconverterapi.com/api/v6/convert?q=${currKey}&compact=ultra&apiKey=d1b5218e0be93e157106`)
    fetch(`https://free.currencyconverterapi.com/api/v6/convert?q=${currKey}&compact=ultra&apiKey=73eef78556be1fe4528f`)
      .then((response) => response.json())
      .then((currencyObj) => {
        dispatch(changeCurrency({ currency, symbol, currencyKey: currencyObj[currKey] }));
      });
    ls.set('currency', currency);
  }
);
