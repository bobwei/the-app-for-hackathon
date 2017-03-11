import { createAction, handleActions } from 'redux-actions';
import R from 'ramda';
import axios from 'axios';

export const modulePrefix = 'modules/redux/contents';

/*
  Sync actions
*/
export const setList = createAction(`${modulePrefix}:setList`);

/*
  Async actions
*/
export const fetchList = () => dispatch =>
  axios
    .get('/api/instagram/v1/locations/search?lat=48.858844&lng=2.294351&access_token=110379.60788ca.022de8f0f7a546afb64a6dd1746c5895')
    .then(R.compose(dispatch, setList, R.path(['data', 'data'])));

export const initialState = {
  list: [{ id: '1' }],
};

export default handleActions({
  [setList]: (state, action) => ({
    ...state,
    list: [...action.payload],
  }),
}, { ...initialState });
