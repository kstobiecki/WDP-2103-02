export const getVPMode = ({ vpMode }) => vpMode;

const reducerName = 'viewport';
const createActionName = name => `app/${reducerName}/${name}`;

const SET_VIEWPORT = createActionName('SET_VIEWPORT');

export const setVP = payload => ({ payload, type: SET_VIEWPORT });

export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case SET_VIEWPORT: {
      return action.payload;
    }
    default:
      return statePart;
  }
}
