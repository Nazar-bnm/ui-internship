import { connect } from 'react-redux';
import ItemsList from '../../components/ProductList/ItemsList';

const mapStateToProps = (state) => {
  return {
    ascendingOrder: state.reducerProductList.ascendingOrder,
    orderType: state.reducerProductList.orderType,
    itemsOnPage: Number(state.reducerProductList.chosenItemsOnPage),
  };
};

export default connect(mapStateToProps)(ItemsList);
