<<<<<<< HEAD:src/app/containers/CounterContainer.js
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';
import Counter from '../components/Counter';
import { bindActionCreators } from 'redux';
=======
import { connect }  from 'react-redux';
import { increment, decrement } from '../../actions';
import Counter from '../../components/Counter/Counter';
import { bindActionCreators } from 'redux'; 
>>>>>>> ad871e26a70080ead7260fd3c52f46efbfb84e9e:src/app/containers/Counter/CounterContainer.js

const mapStateToProps = (state) => {
  return {
    count: state.reducer.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: bindActionCreators(increment, dispatch),
    decrement: bindActionCreators(decrement, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
