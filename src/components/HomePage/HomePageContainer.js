import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProductsError, getProducts, getProductsPending } from '../../reducers/reducerAPIcall';
import fetchProductsAction from '../../actions/fetchProducts';

import HomePage from './HomePage';

const mapStateToProps = (state) => ({
  error: getProductsError(state),
  products: getProducts(state),
  pending: getProductsPending(state)
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchProducts: fetchProductsAction
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
