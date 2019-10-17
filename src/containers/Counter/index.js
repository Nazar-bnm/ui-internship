import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increment, decrement } from '../../actions/actionsCounter';
import Counter from '../../components/Counter/Counter';

const mapStateToProps = (state) => ({
  count: state.reducerCounter.count
});

const mapDispatchToProps = (dispatch) => ({
  increment: bindActionCreators(increment, dispatch),
  decrement: bindActionCreators(decrement, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
