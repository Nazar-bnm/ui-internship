import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import showMessage from '../../actions/actionsNotifications';
import RegisterForm from './RegisterForm';

const mapDispatchToProps = (dispatch) => ({
  showMessage: bindActionCreators(showMessage, dispatch)
});

export default connect(null, mapDispatchToProps)(RegisterForm);
