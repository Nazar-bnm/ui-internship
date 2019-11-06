import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { resetFilterState, setPriceRange } from '../../actions/actionsFilter';
import ProductListPage from './ProductListPage';

const mapStateToProps = (state) => ({
  price: state.reducerFilter.price,
  fetchedItemsNumber: state.reducerProductList.itemList.length
});

const mapDispatchToProps = (dispatch) => ({
  resetFilterState: bindActionCreators(resetFilterState, dispatch),
  setPriceRange: bindActionCreators(setPriceRange, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
