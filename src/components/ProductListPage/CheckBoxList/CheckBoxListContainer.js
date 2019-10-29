import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { checkCheckbox } from '../../../actions/actionsFilter';
import CheckBoxList from './CheckBoxList';

const mapStateToProps = ({ reducerFilter }) => ({
  bottoms: reducerFilter.bottoms,
  tops: reducerFilter.tops,
  sizes: reducerFilter.sizes,
  price: reducerFilter.price,
  colors: reducerFilter.colors,
  brands: reducerFilter.brands,
  isReseted: reducerFilter.isReseted
});

const mapDispatchToProps = (dispatch) => ({
  checkCheckbox: bindActionCreators(checkCheckbox, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckBoxList);
