// import ProductListNavigation from './ProductListNavigation';

// const mockStore = configureStore();
// const initialState = {
//   selectReducer: {
//     selectedAvatar: 0,
//   },
//   avatars: [
//     {
//       name: 'Green Gator',
//       image: 'https://cdn.alligator.io/images/avatars/green-gator.jpg',
//     },
//     {
//       name: 'Yellow Gator',
//       image: 'https://cdn.alligator.io/images/avatars/yellow-gator.jpg',
//     },
//     {
//       name: 'Blue Gator',
//       image: 'https://cdn.alligator.io/images/avatars/blue-gator.jpg',
//     },
//   ],
// };
// const store = mockStore(initialState);

// describe('<ProductListNavigation />', () => {
//   test('dispatches event to show the avatar selection list', () => {
//     const wrapper = shallow(<ProductListNavigation store={store} />);
//     const component = wrapper.dive();

//     component.find(Avatar).props().onPress();

//     expect(store.getActions()).toMatchSnapshot();
//   });
// });