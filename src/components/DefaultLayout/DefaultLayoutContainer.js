import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getProductsError, getProducts, getProductsPending } from '../../reducers/reducerAPIcall';
import fetchProductsAction from '../../actions/fetchProducts';
import DefaultLayout from './DefaultLayout';

const mapStateToProps = (state) => ({
  error: getProductsError(state),
  products: getProducts(state),
  pending: getProductsPending(state),
  productsList: state.productsReducer.products
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchProducts: fetchProductsAction
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefaultLayout);
