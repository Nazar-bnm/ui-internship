import { connect } from 'react-redux';

import ProductDetailsPage from './ProductDetailsPage';

const mapStateToProps = ({ productsReducer }) => ({
  products: productsReducer.products
});

export default connect(mapStateToProps)(ProductDetailsPage);
