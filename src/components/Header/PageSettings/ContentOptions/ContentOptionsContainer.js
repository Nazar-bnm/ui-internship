import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import { fetchCurrency } from '../../../../actions/actionsCurrency';
import ContentOptions from './ContentOptions';

const mapStateToProps = ({ reducerCurr }) => ({
  currency: reducerCurr.currency,
  currencyKey: reducerCurr.currencyKey,
  symbol: reducerCurr.symbol
});

const mapDispatchToProps = (dispatch) => ({
  // changeCurrency: bindActionCreators({ changeCurrency }, dispatch)
  changeCurrency: (val) => dispatch(fetchCurrency(val))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContentOptions);
