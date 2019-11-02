import { connect } from 'react-redux';

import ProductListNavigation from './ProductListNavigation';
import {
  changeSortingOrder,
  changeOrderType,
  changeitemsNumberOnPage
} from '@/actions/actionsProductList';

const mapStateToProps = (state) => ({
  ascendingOrder: state.reducerProductList.ascendingOrder
});

const mapDispatchToProps = (dispatch) => ({
  changeSortingOrder: () => dispatch(changeSortingOrder()),
  changeOrderType: (orderType) => dispatch(changeOrderType({ orderType })),
  changeItemsOnPageNum: (chosenItemsOnPage) => dispatch(changeitemsNumberOnPage({ chosenItemsOnPage }))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductListNavigation);
