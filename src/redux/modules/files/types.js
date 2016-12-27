import { createAsyncActionTypes } from 'helpers/factories';

export const GET_FILES = createAsyncActionTypes('files', 'GET_FILES');
export const GET_FILE = createAsyncActionTypes('files', 'GET_FILE');
export const CREATE_FOLDER = createAsyncActionTypes('files', 'CREATE_FOLDER');
export const DELETE_FILES = createAsyncActionTypes('files', 'DELETE_FILES');

export const CONVERSION = {
  START: 'files/CONVERSION_START',
  UPDATE: 'files/CONVERSION_UPDATE',
  FINISH: 'files/CONVERSION_FINISH',
  FAILURE: 'files/CONVERSION_FAILURE',
};
