import { connect } from 'react-redux';

import MostPopular from './MostPopular';

const mapStateToProps = ({ productsReducer }) => ({
  products: productsReducer.products
});

export default connect(mapStateToProps)(MostPopular);
