import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addToCart } from '../../actions/actionsAddToCart';
import ProductOrder from './ProductOrder';

const mapStateToProps = ({ reducerAddToCart }) => ({
  userCart: reducerAddToCart.userCart
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: bindActionCreators(addToCart, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductOrder);
