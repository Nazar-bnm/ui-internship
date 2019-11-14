import {
  GET_BLOG_ITEMS_SUCCESS,
  GET_BLOG_ITEMS_ERROR,
  GET_LABEL
} from '../constants/actionTypes';

const initialState = {
  blogItems: [],
  label: null,
  error: null
};

export default function reducerBlogPage(state = initialState, {
  type, blogItems, error, label
}) {
  switch (type) {
    case GET_BLOG_ITEMS_SUCCESS:
      return {
        ...state,
        blogItems,
        error: null
      };
    case GET_BLOG_ITEMS_ERROR:
      return {
        ...state,
        error
      };
    case GET_LABEL:
      return {
        ...state,
        label
      };
    default:
      return state;
  }
}

export const getBlogItemsSuccess = (state) => state.blogItems;
export const getBlogItemsError = (state) => state.error;
