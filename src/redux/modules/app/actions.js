// Helpers
import { createAction } from 'helpers/factories';
import tokenStorage from 'helpers/tokenStorage';

// Types
import { LOAD_APP, ERROR } from './types';

// External Actions
import fetchInfo from 'modules/user/actions';
import { push } from 'react-router-redux';

// Action Creators: Load App
const loadAppStart = () => createAction(LOAD_APP.START);
const loadAppFinish = () => createAction(LOAD_APP.FINISH);

// Thunk: Load App
export const loadApp = () => async (dispatch, getState) => {
  dispatch(loadAppStart());

  const token = tokenStorage.get('token');

  if (token) {
    await dispatch(fetchInfo());

    let nextRoute = '/';
    const savedNextRoute = localStorage.getItem('nextRoute') || getState().routing.locationBeforeTransitions.pathname;

    if (savedNextRoute) {
      nextRoute = savedNextRoute;
      localStorage.removeItem('nextRoute');
    }

    dispatch(push(nextRoute));
  }

  return dispatch(loadAppFinish());
};

// Action Creators: Error Handler
export const updateError = data => createAction(ERROR.UPDATE, data);
export const clearError = () => createAction(ERROR.CLEAR);
