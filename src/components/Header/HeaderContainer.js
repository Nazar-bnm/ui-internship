import { connect } from 'react-redux';
import Header from './Header';

const mapStateToProps = ({ reducerCart }) => ({
  userCart: reducerCart.userCart
});

export default connect(mapStateToProps)(Header);
