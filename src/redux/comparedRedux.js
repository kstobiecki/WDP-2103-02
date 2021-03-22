// selectors
export const getProductsToCompare = ({ comparison }) => comparison;

// action name creator
const reducerName = 'comparison';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
const COMPARE = createActionName('ADD_TO_COMPARE');
const REMOVE_FROM_COMPARSION = createActionName('REMOVE_FROM_COMPARSION');

// action creators
export const compare = payload => ({ payload, type: COMPARE });
export const removeFromComparsion = payload => ({
  payload,
  type: REMOVE_FROM_COMPARSION,
});

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case COMPARE: {
      let index = statePart.findIndex(product => product.id === action.payload.id);
      const maxAmountToCompare = 4;

      return statePart.length < maxAmountToCompare && index === -1
        ? [...statePart, { ...action.payload, id: action.payload.id }]
        : statePart;
    }
    case REMOVE_FROM_COMPARSION: {
      return statePart.filter(product => product.id !== action.payload.id);
    }
    default:
      return statePart;
  }
}
