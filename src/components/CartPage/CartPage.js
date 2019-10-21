import { connect } from 'react-redux';
import React from 'react';
import { bindActionCreators } from 'redux';

import { addToCart, removeFromCart } from '../../actions/actionsCart';

// const mapStateToProps = ({ reducerCart }) => ({
//   cart: reducerCart.cart
// });

// const mapDispatchToProps = (dispatch) => ({
//   addToWishlist: bindActionCreators(addToCart, dispatch),
//   removeFromWishlist: bindActionCreators(removeFromCart, dispatch)
// });

// export default connect(mapStateToProps, mapDispatchToProps)(CartPage);

const CartPage = (props) => {
 console.log(props);
  return <div>Hello</div>;
};

export default CartPage;
