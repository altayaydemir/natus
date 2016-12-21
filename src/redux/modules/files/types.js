import { createAsyncActionTypes } from 'helpers/factories';

export const CREATE_FOLDER = createAsyncActionTypes('files', 'CREATE_FOLDER');
export const GET_FILES = createAsyncActionTypes('files', 'GET_FILES');
export const GET_FILE = createAsyncActionTypes('files', 'GET_FILE');
