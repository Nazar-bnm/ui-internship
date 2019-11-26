import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeCurrency, fetchCurrency } from '../../../../actions/actionsCurrency';
import ContentOptions from './ContentOptions';

const mapStateToProps = ({ reducerCurr }) => ({
  currency: reducerCurr.currency,
  currencyKey: reducerCurr.currencyKey
});

const mapDispatchToProps = (dispatch) => ({
  // changeCurrency: bindActionCreators({ changeCurrency }, dispatch)
  changeCurrency: (val) => dispatch(fetchCurrency(val))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContentOptions);
