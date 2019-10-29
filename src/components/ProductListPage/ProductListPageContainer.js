import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { resetState } from '../../actions/actionsFilter';
import ProductListPage from './ProductListPage';

const mapDispatchToProps = (dispatch) => ({
  resetState: bindActionCreators(resetState, dispatch)
});

export default connect(null, mapDispatchToProps)(ProductListPage);
