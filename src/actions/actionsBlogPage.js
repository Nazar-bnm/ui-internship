import {
  GET_BLOG_ITEMS_SUCCESS,
  GET_BLOG_ITEMS_ERROR
} from '../constants/actionTypes';

export const getBlogItemsSuccess = (blogItems) => ({
  type: GET_BLOG_ITEMS_SUCCESS,
  blogItems
});

export const getBlogItemsError = (error) => ({
  type: GET_BLOG_ITEMS_ERROR,
  error
});
