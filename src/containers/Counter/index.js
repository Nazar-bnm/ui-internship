import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { increment, decrement } from '../../actions/actionsCounter';
import Counter from '../../components/Counter/Counter';

function mapStateToProps(state) {
  return {
    count: state.reducerCounter.count
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: bindActionCreators(increment, dispatch),
    decrement: bindActionCreators(decrement, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
