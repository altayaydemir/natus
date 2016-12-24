// Helpers
import { createAction } from 'helpers/factories';
import tokenStorage from 'helpers/tokenStorage';

// Types
import FETCH_INFO from './types';

// Action Creators: Fetch Info
const fetchInfoRequest = () => createAction(FETCH_INFO.REQUEST);
const fetchInfoSuccess = data => createAction(FETCH_INFO.SUCCESS, { data });
const fetchInfoFailure = error => createAction(FETCH_INFO.FAILURE, { error });

// Thunk: Fetch Info (https://api.put.io/v2/docs/account.html#get--account-info)
const fetchInfo = () => async (dispatch, getState, Api) => {
  dispatch(fetchInfoRequest());

  try {
    const response = await Api.get('/account/info');
    return dispatch(fetchInfoSuccess(response.data.info));
  } catch (error) {
    return dispatch(fetchInfoFailure(error));
  }
};

export const logOut = () => {
  tokenStorage.destroy();
  return window.location.reload();
};

export default fetchInfo;
