import { connect } from 'react-redux';

import ProductListNavigation from './ProductListNavigation';
import {
  changeSortingOrder,
  changeOrderType,
  changeitemsNumberOnPage,
  changeDropdownSortingSelectedID,
  changeDropdownItemsNumberSelectedID
} from '../../../actions/actionsProductList';

const mapStateToProps = (state) => ({
  ascendingOrder: state.reducerProductList.ascendingOrder,
  dropdownSortingSelectedID: state.reducerProductList.dropdownSortingSelectedID,
  dropdownItemsNumberSelectedID: state.reducerProductList.dropdownItemsNumberSelectedID
});

const mapDispatchToProps = (dispatch) => ({
  changeSortingOrder: () => dispatch(changeSortingOrder()),
  changeOrderType: (orderType) => dispatch(changeOrderType({ orderType })),
  changeItemsOnPageNum: (chosenItemsOnPage) => dispatch(changeitemsNumberOnPage({ chosenItemsOnPage })),
  changeDropdownSortingSelectedID: (dropdownSortingSelectedID) => dispatch(changeDropdownSortingSelectedID(dropdownSortingSelectedID)),
  changeDropdownItemsNumberSelectedID: (dropdownItemsNumberSelectedID) => dispatch(changeDropdownItemsNumberSelectedID(dropdownItemsNumberSelectedID))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductListNavigation);
