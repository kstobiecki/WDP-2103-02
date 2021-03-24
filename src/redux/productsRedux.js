/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;
export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

export const comparedProduct = ({ products }) =>
  products.filter(item => item.newFurniture === true);

/* action name creator */
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
export const ADD_TO_FAVORITES = createActionName('ADD_TO_FAVORITES');
export const REMOVE_FROM_FAVORITES = createActionName('REMOVE_FROM_FAVORITES');
export const SET_COMPARE = createActionName('SET_COMPARE');

/* action creators */
export const createAction_addFavorites = payload => ({
  payload,
  type: ADD_TO_FAVORITES,
});
export const createAction_removeFavorites = payload => ({
  payload,
  type: REMOVE_FROM_FAVORITES,
});

export const createAction_setCompare = productId => ({
  payload: { productId },
  type: SET_COMPARE,
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
    case SET_COMPARE: {
      const productIndex = statePart.findIndex(
        ({ id }) => id === action.payload.productId
      );
      const compareLength = statePart.filter(product => product.compare).length;
      if (compareLength === 4 && !statePart[productIndex].compare) {
        return statePart;
      }
      statePart[productIndex] = {
        ...statePart[productIndex],
        compare: !statePart[productIndex].compare,
      };
      return [...statePart];
    }
    default:
      return statePart;
  }
}
