import { GET_THE_CURRENCY } from '../constants/actionTypes';

export const changeCurrency = (payload) => ({ type: GET_THE_CURRENCY, payload });

export const fetchCurrency = (currency) => (
  (dispatch) => {
    const currKey = `USD_${currency}`;

    fetch(`https://free.currencyconverterapi.com/api/v6/convert?q=${currKey}&compact=ultra&apiKey=d1b5218e0be93e157106`)
      .then((response) => response.json())
      .then((currencyObj) => {
        console.log(currencyObj);
        dispatch(changeCurrency({ currency, currencyKey: currencyObj[currKey] }));
      });
  }
);
