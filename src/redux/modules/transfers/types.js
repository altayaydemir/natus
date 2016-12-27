import { createAsyncActionTypes } from 'helpers/factories';

export const GET_TRANSFERS = createAsyncActionTypes('transfers', 'GET_TRANSFERS');
export const GET_TRANSFER = createAsyncActionTypes('transfers', 'GET_TRANSFER');
export const ADD_TRANSFER = createAsyncActionTypes('transfers', 'ADD_TRANSFER');
export const CLEAR_ADDED_TRANSFERS = 'transfers/CLEAR_ADDED_TRANSFERS';
