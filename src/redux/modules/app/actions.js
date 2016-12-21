// Helpers
import { createAction } from 'helpers/factories';
import tokenStorage from 'helpers/tokenStorage';

// Types
import LOAD_APP from './types';

// External Actions
import fetchInfo from 'modules/user/actions';
import { push } from 'react-router-redux';

// Action Creators: Load App
const loadAppStart = () => createAction(LOAD_APP.START);
const loadAppFinish = () => createAction(LOAD_APP.FINISH);

// Thunk: Load App
const loadApp = () => async (dispatch) => {
  dispatch(loadAppStart());

  const token = tokenStorage.get('token');

  if (token) {
    await dispatch(fetchInfo());
    dispatch(push('/'));
  }

  return dispatch(loadAppFinish());
};

export default loadApp;
