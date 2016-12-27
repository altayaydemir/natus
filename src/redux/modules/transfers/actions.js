// Helpers
import { createAction } from 'helpers/factories';

// Types
import { GET_TRANSFERS, GET_TRANSFER, ADD_TRANSFER } from './types';

// External Actions
import { push } from 'react-router-redux';
import { hideModal } from 'modules/ui/actions';

// Action Creators: Get Transfers
const getTransfersRequest = meta => createAction(GET_TRANSFERS.REQUEST, {}, meta);
const getTransfersSuccess = data => createAction(GET_TRANSFERS.SUCCESS, { data });
const getTransfersFailure = error => createAction(GET_TRANSFERS.FAILURE, { error });

// Thunk: Get Transfers
export const getTransfers = (meta = {}, params = {}) => async (dispatch, getState, Api) => {
  dispatch(getTransfersRequest(meta));

  try {
    const { data: { transfers } } = await Api.get('/transfers/list', params);
    return dispatch(getTransfersSuccess(transfers));
  } catch (error) {
    return dispatch(getTransfersFailure(error));
  }
};

// Action Creators: Get Transfer
const getTransferRequest = () => createAction(GET_TRANSFER.REQUEST);
const getTransferSuccess = data => createAction(GET_TRANSFER.SUCCESS, { data });
const getTransferFailure = error => createAction(GET_TRANSFER.FAILURE, { error });

// Thunk: Get Transfer
export const getTransfer = (id, params = {}) => async (dispatch, getState, Api) => {
  dispatch(getTransferRequest());

  try {
    const { data } = await Api.get(`/transfers/${id}`, params);
    return dispatch(getTransferSuccess(data));
  } catch (error) {
    return dispatch(getTransferFailure(error));
  }
};

// Action Creators: Add Transfer
const addTransferRequest = () => createAction(ADD_TRANSFER.REQUEST);
const addTransferSuccess = data => createAction(ADD_TRANSFER.SUCCESS, { data });
const addTransferFailure = error => createAction(ADD_TRANSFER.FAILURE, { error });

// Thunk: Add Transfer
export const addTransfer = (formData, params = {}) => async (dispatch, getState, Api) => {
  dispatch(addTransferRequest());

  try {
    const { data: { transfer } } = await Api.post('/transfers/add', formData, params);
    dispatch(addTransferSuccess(transfer));
    dispatch(hideModal());
    dispatch(getTransfers());
    return dispatch(push('/transfers'));
  } catch (error) {
    return dispatch(addTransferFailure(error.response.data));
  }
};
