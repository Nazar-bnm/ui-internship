import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import RegisterForm from './RegisterForm';
import showMessage from '../../actions/actionsNotifications';

const mapDispatchToProps = (dispatch) => ({
  showMessage: bindActionCreators(showMessage, dispatch)
});

export default connect(null, mapDispatchToProps)(RegisterForm);
