import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NotificationButtons from './NotificationButtons';
import showMessage, { addItemNotification } from '../../actions/actionsNotifications';

const mapStateToProps = (state) => ({
  isShowNotification: state.reducerNotifications.isShowNotification,
  addItemNotification: state.reducerNotifications.addItemNotification
});

const mapDispatchToProps = (dispatch) => ({
  showMessage: bindActionCreators(showMessage, dispatch),
  addItemNotification: bindActionCreators(addItemNotification, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(NotificationButtons);
