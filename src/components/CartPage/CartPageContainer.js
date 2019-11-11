import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeQuantity, removeItemFromCart } from '../../actions/actionsCart';
import CartPage from './CartPage';

const mapStateToProps = ({ reducerCart, productsReducer }) => {
  console.log({reducerCart, productsReducer});
  
  return ({
    userCart: reducerCart.userCart,
    products: productsReducer.products
  });
};

const mapDispatchToProps = (dispatch) => ({
  changeQuantity: bindActionCreators(changeQuantity, dispatch),
  removeItemFromCart: bindActionCreators(removeItemFromCart, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
