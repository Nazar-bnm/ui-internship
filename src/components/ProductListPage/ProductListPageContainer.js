import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { resetFilterState } from '@/actions/actionsFilter';
import ProductListPage from './ProductListPage';

const mapStateToProps = (state) => ({
  fetchedItemsNumber: state.reducerProductList.itemList.length
});

const mapDispatchToProps = (dispatch) => ({
  resetFilterState: bindActionCreators(resetFilterState, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
