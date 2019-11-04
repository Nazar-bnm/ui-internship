import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Notifications from './Notifications';
import { isHideNotification, removeItemNotification } from '../../../actions/actionsNotifications';

const mapStateToProps = (state) => ({
  notifications: state.reducerNotifications
  // isShowNotification: state.reducerNotifications.isShowNotification,
  // isHideNotification: state.reducerNotifications.isHideNotification,
  // addItemNotification: state.reducerNotifications.addItemNotification,
  // removeItemNotification: state.reducerNotifications.removeItemNotification,
  // type: state.reducerNotifications.type,
  // title: state.reducerNotifications.title,
  // message: state.reducerNotifications.message
});

const mapDispatchToProps = (dispatch) => ({
  isHideNotification: bindActionCreators(isHideNotification, dispatch),
  removeItemNotification: bindActionCreators(removeItemNotification, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
