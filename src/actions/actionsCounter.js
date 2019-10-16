import { INCREMENT, DECREMENT } from '../constants/actionTypes';

export function increment() {
  return {
    type: INCREMENT
  };
}

export function decrement() {
  return {
    type: DECREMENT
  };
}
