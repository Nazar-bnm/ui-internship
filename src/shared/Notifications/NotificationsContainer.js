import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Notifications from './Notifications';
import { isHideNotification } from '@/actions/actionsNotifications';

const mapStateToProps = (state) => ({
  isShowNotification: state.reducerNotifications.isShowNotification,
  isHideNotification: state.reducerNotifications.isHideNotification,
  type: state.reducerNotifications.type,
  title: state.reducerNotifications.title,
  message: state.reducerNotifications.message
});

const mapDispatchToProps = (dispatch) => ({
  isHideNotification: bindActionCreators(isHideNotification, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
