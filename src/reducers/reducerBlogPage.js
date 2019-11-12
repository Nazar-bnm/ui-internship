import {
  GET_BLOG_ITEMS_SUCCESS,
  GET_BLOG_ITEMS_ERROR
} from '../constants/actionTypes';

const initialState = {
  blogItems: [],
  error: null
};

export default function reducerBlogPage(state = initialState, { type, blogItems, error }) {
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
    default:
      return state;
  }
}

export const getBlogItemsSuccess = (state) => state.blogItems;
export const getBlogItemsError = (state) => state.error;
