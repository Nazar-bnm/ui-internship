import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NotificationButtons from './NotificationButtons';
import showMessage from '../../actions/actionsNotifications';

const mapStateToProps = (state) => ({
  isShowNotification: state.reducerNotifications.isShowNotification
});

const mapDispatchToProps = (dispatch) => ({
  showMessage: bindActionCreators(showMessage, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(NotificationButtons);
