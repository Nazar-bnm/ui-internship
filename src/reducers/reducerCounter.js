import { INCREMENT, DECREMENT } from '../constants/actionTypes';

const initialState = {
  count: 0,
};

export default function reducerCounter(state = initialState, action) {
  switch (action.type) {
  case INCREMENT:
    return {
      count: state.count + 1,
    };
  case DECREMENT:
    return {
      count: state.count - 1,
    };
  default:
    return state;
  };
};
