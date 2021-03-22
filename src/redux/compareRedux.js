export const getAllToCompare = ({ compare }) => compare;

const reducerName = 'compare';

const createActionName = name => `app/${reducerName}/${name}`;
const ADD_PRODUCT = createActionName('ADD_PRODUCT');
const REMOVE_PRODUCT = createActionName('REMOVE_PRODUCT');

export const addProductToCompare = payload => ({ type: ADD_PRODUCT, payload });
export const removeProductFromCompare = payload => ({ type: REMOVE_PRODUCT, payload });

export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...statePart, action.payload];
    case REMOVE_PRODUCT:
      if (action.payload) {
        return statePart.filter(products => products.id !== action.payload);
      } else {
        return [];
      }
    default:
      return statePart;
  }
}
