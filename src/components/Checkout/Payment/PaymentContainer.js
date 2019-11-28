import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import showMessage from '../../../actions/actionsNotifications';
import Payment from './Payment';

const mapStateToProps = ({ reducerCart, productsReducer }) => ({
  userCart: reducerCart.userCart,
  products: productsReducer.products,
  totalCount: reducerCart.totalCount
});

const mapDispatchToProps = (dispatch) => ({
  showMessage: bindActionCreators(showMessage, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(Payment);
