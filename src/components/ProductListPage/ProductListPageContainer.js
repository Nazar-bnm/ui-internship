import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { resetState } from '../../actions/actionsFilter';
import ProductListPage from './ProductListPage';

const mapStateToProps = ({ reducerFilter }) => ({
  bottom: reducerFilter.bottom,
  tops: reducerFilter.tops,
  size: reducerFilter.size,
  price: reducerFilter.price,
  colors: reducerFilter.colors,
  brands: reducerFilter.brands
});

const mapDispatchToProps = (dispatch) => ({
  resetState: bindActionCreators(resetState, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
