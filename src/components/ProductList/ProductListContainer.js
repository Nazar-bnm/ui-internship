import { connect } from 'react-redux';

import ProductList from './ProductList';

const mapStateToProps = (state) => ({
  length: state.reducerProductList.length,
  chosenItemsOnPage: Number(state.reducerProductList.chosenItemsOnPage),
  price: state.reducerFilter.price,
  filterProps: [
    state.reducerFilter.bottoms.length,
    state.reducerFilter.tops.length,
    state.reducerFilter.sizes.length,
    state.reducerFilter.colors.length,
    state.reducerFilter.brands.length
  ]
});

export default connect(mapStateToProps)(ProductList);
