import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getBlogItemsSuccess, getBlogItemsError, getLabel } from '../../actions/actionsBlogPage';

import BlogPage from './BlogPage';

const mapStateToProps = (state) => ({
  blogItems: state.reducerBlogPage.blogItems,
  error: state.reducerBlogPage.error,
  label: state.reducerBlogPage.label
});

const mapDispatchToProps = (dispatch) => ({
  getBlogItemsSuccess: bindActionCreators(getBlogItemsSuccess, dispatch),
  getBlogItemsError: bindActionCreators(getBlogItemsError, dispatch),
  getLabel: bindActionCreators(getLabel, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogPage);
