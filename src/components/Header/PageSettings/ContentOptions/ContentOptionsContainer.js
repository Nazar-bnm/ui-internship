import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeCurrency } from '../../../../actions/actionsCurrency';
import ContentOptions from './ContentOptions';

const mapStateToProps = (state) => ({
  currency: state.currency
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ changeCurrency }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ContentOptions);
