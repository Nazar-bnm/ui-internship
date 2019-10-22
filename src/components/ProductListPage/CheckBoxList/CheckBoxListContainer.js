import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { checkCheckbox } from '../../../actions/actionsFilter';
import CheckBoxList from './CheckBoxList';

const mapStateToProps = ({ reducerFilter }) => ({
  bottom: reducerFilter.bottom,
  tops: reducerFilter.tops,
  size: reducerFilter.size,
  price: reducerFilter.price,
  colors: reducerFilter.colors,
  brandes: reducerFilter.brandes
});

const mapDispatchToProps = (dispatch) => ({
  checkCheckbox: bindActionCreators(checkCheckbox, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckBoxList);
