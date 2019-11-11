import {
  GET_BLOG_ITEMS_SUCCESS,
  GET_BLOG_ITEMS_ERROR
} from '../constants/actionTypes';

export function getBlogItemsSuccess(blogItems) {
  return {
    type: GET_BLOG_ITEMS_SUCCESS,
    blogItems
  };
}

export function getBlogItemsError(error) {
  return {
    type: GET_BLOG_ITEMS_ERROR,
    error
  };
}
