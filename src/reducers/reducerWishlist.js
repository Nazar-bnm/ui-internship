/* eslint-disable max-len */
import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from '../constants/actionTypes';

const initialState = {
  wishlist: [{
    'id': 1,
    'photo': 'https://static.massimodutti.net/3/photos/2019/I/0/1/p/5685/614/900/5685614900_1_1_16.jpg?t=1570214503646&impolicy=massimodutti-itxmediumhigh&imwidth=900',
    'title': 'Vintage For Her',
    'collection': 'spring collection 2016',
    'category': 'woman',
  },
  {
    'id': 2,
    'photo': 'https://static.massimodutti.net/3/photos/2019/I/0/1/p/6677/619/594/6677619594_2_6_16.jpg?t=1570437488265&impolicy=massimodutti-itxmediumhigh&imwidth=900',
    'title': 'Vintage For Her',
    'collection': 'spring collection 2016',
    'category': 'woman',
  },
  {
    'id': 3,
    'photo': 'https://static.massimodutti.net/3/photos/2019/I/0/1/p/5038/545/800/5038545800_1_1_16.jpg?t=1569943856172&impolicy=massimodutti-itxmediumhigh&imwidth=900',
    'title': 'Vintage For Her',
    'collection': 'spring collection 2016',
    'category': 'woman',
  }],
};

export default function reducerWishlist(state = initialState, action) {
  switch (action.type) {
  case ADD_TO_WISHLIST:
    return {
      ...state,
      wishlist: [...state.wishlist, action.payload],
    };
  case REMOVE_FROM_WISHLIST:
    return {
      ...state,
      wishlist: state.wishlist.filter((item) => {
        return item.id !== action.payload.id;
      }),
    };
  default:
    return state;
  };
};
