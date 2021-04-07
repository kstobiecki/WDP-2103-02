/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;
export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);
export const getTopRated = ({ products }) =>
  products.filter(product => product.userStars > 2);
export const comparedProducts = ({ products }) =>
  products.filter(products => products.compare === true);

/* action name creator */
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
export const ADD_TO_FAVORITES = createActionName('ADD_TO_FAVORITES');
export const REMOVE_FROM_FAVORITES = createActionName('REMOVE_FROM_FAVORITES');
export const CHANGE_USER_STARS = createActionName('CHANGE_USER_STARS');
export const COMPARING_TOGGLE = createActionName('COMPARING_TOGGLE');

/* action creators */
export const createAction_addFavorites = payload => ({
  payload,
  type: ADD_TO_FAVORITES,
});
export const createAction_removeFavorites = payload => ({
  payload,
  type: REMOVE_FROM_FAVORITES,
});
export const createAction_changeUserStars = payload => ({
  payload,
  type: CHANGE_USER_STARS,
});
export const comparingToggle = productId => ({
  payload: { productId },
  type: COMPARING_TOGGLE,
});

/* reducer */

export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return statePart.map(product => {
        if (product.id === action.payload.id) {
          product.favorites = true;
        }
        return product;
      });
    case REMOVE_FROM_FAVORITES:
      return statePart.map(product => {
        if (product.id === action.payload.id) {
          product.favorites = false;
        }
        return product;
      });
    case CHANGE_USER_STARS: {
      const newState = [...statePart];
      const index = newState.findIndex(product => product.id === action.payload.id);
      if (
        newState[index].userStars &&
        newState[index].userStars === action.payload.star
      ) {
        newState[index].userStars = null;
      } else {
        newState[index].userStars = action.payload.star;
      }
      return newState;
    }
    case COMPARING_TOGGLE: {
      const index = statePart.findIndex(({ id }) => id === action.payload.productId);
      const compareLength = statePart.filter(product => product.compare).length;

      const maxToCompare = 4;

      if (compareLength === maxToCompare && !statePart[index].compare) {
        return statePart;
      }
      statePart[index] = { ...statePart[index], compare: !statePart[index].compare };
      return [...statePart];
    }
    default:
      return statePart;
  }
}
