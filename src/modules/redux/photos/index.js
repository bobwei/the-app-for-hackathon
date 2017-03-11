import { createAction, handleActions } from 'redux-actions';

export const modulePrefix = 'modules/redux/photos';

/*
  Sync actions
*/
export const setList = createAction(`${modulePrefix}:setList`);

export const initialState = {
  list: [
    {
      id: 1,
      photo: '',
      lat: 25.0452722,
      lon: 121.5289057,
    },
  ],
};

export default handleActions({
  [setList]: (state, action) => ({
    ...state,
    list: [...action.payload],
  }),
}, { ...initialState });
