import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { resetFilterState } from '../../actions/actionsFilter';
import ProductListPage from './ProductListPage';

const mapDispatchToProps = (dispatch) => ({
  resetFilterState: bindActionCreators(resetFilterState, dispatch)
});

export default connect(null, mapDispatchToProps)(ProductListPage);
