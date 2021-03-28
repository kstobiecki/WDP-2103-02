/* selectors */
export const getAll = ({ opinions }) => opinions;

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
