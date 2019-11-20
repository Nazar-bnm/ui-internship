import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LoginPage from './LoginPage';
import showMessage from '../../actions/actionsNotifications';

const mapDispatchToProps = (dispatch) => ({
  showMessage: bindActionCreators(showMessage, dispatch)
});

export default connect(null, mapDispatchToProps)(LoginPage);
