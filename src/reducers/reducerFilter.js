// import { CHECK_CHECKBOX, UNCHECK_CHECKBOX } from '../constants/actionTypes';

// const initialState = {
//   price: {},
//   categories: {},
//   colors: {},
//   brandes: {}
// };

// function deleteItem(array, value) {
//   return array.filter((item) => item !== value);
// }

// export default function reducerFilter(state = initialState, action) {
//   const { field, value } = action.payload;

//   switch (action.type) {
//     case CHECK_CHECKBOX:
//       return {
//         ...state,
//         [field]: [...state[field], value]
//       };
//     case UNCHECK_CHECKBOX:
//       return {
//         ...state,
//         [field]: deleteItem(state[field], value)
//       };
//     default:
//       return state;
//   }
// }
