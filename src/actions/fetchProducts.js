import HttpService from '../service/HttpService/httpService';
import { fetchProductsPending, fetchProductsSuccess, fetchProductsError } from './actionsAPIcall';

const fetchProducts = (category) => (
  async (dispatch) => {
    const userAPI = new HttpService();
    try {
      fetchProductsPending();
      const response = await userAPI.get(`${process.env.BASE_URL1}/${category}`);
      if (response.status === 404) {
        throw Error(response.statusText);
      }
      dispatch(fetchProductsSuccess(response.data));
    } catch (error) {
      dispatch(fetchProductsError(error));
    }
  });

export default fetchProducts;
