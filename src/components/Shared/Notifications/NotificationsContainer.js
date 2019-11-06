import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Notifications from './Notifications';
import { isHideNotification, removeItemNotification } from '../../../actions/actionsNotifications';

const mapStateToProps = (state) => ({
  notifications: state.reducerNotifications
});

const mapDispatchToProps = (dispatch) => ({
  isHideNotification: bindActionCreators(isHideNotification, dispatch),
  removeItemNotification: bindActionCreators(removeItemNotification, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
