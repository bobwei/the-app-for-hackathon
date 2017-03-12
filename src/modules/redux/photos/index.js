/* eslint-disable global-require */
import { createAction, handleActions } from 'redux-actions';

export const modulePrefix = 'modules/redux/photos';

/*
  Sync actions
*/
export const setList = createAction(`${modulePrefix}:setList`);

export const initialState = {
  list: require('./data.json'),
};

export default handleActions({
  [setList]: (state, action) => ({
    ...state,
    list: [...action.payload],
  }),
}, { ...initialState });
