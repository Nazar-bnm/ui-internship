import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { resetFilterState, setPriceRange, checkCheckbox } from '../../actions/actionsFilter';
import ProductListPage from './ProductListPage';

const mapStateToProps = (state) => ({
  price: state.reducerFilter.price,
  filterProps: {
    bottoms: state.reducerFilter.bottoms,
    tops: state.reducerFilter.tops,
    sizes: state.reducerFilter.sizes,
    colors: state.reducerFilter.colors,
    brands: state.reducerFilter.brands
  },
  fetchedItemsNumber: state.reducerProductList.itemList.length
});

const mapDispatchToProps = (dispatch) => ({
  resetFilterState: bindActionCreators(resetFilterState, dispatch),
  checkCheckbox: bindActionCreators(checkCheckbox, dispatch),
  setPriceRange: bindActionCreators(setPriceRange, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
