// Helpers
import { createAction } from 'helpers/factories';

// Types
import { GET_FILES, GET_FILE, CREATE_FOLDER } from './types';

// External Actions
import { push } from 'react-router-redux';

// Action Creators: Get Files
const getFilesRequest = () => createAction(GET_FILES.REQUEST);
const getFilesSuccess = data => createAction(GET_FILES.SUCCESS, { data });
const getFilesFailure = error => createAction(GET_FILES.FAILURE, { error });

// Thunk: Get Files (https://api.put.io/v2/docs/files.html#get)
export const getFiles = (params = {}) => async (dispatch, getState, Api) => {
  dispatch(getFilesRequest());

  try {
    const response = await Api.get('/files/list', params);
    return dispatch(getFilesSuccess(response.data));
  } catch (error) {
    return dispatch(getFilesFailure(error));
  }
};

// Action Creators: Get Files
const getFileRequest = () => createAction(GET_FILE.REQUEST);
const getFileSuccess = data => createAction(GET_FILE.SUCCESS, { data });
const getFileFailure = error => createAction(GET_FILE.FAILURE, { error });

// Thunk: Get Files (https://api.put.io/v2/docs/files.html#get)
export const getFile = (id, params = {}) => async (dispatch, getState, Api) => {
  dispatch(getFileRequest());

  try {
    const response = await Api.get(`/files/${id}`, params);
    return dispatch(getFileSuccess(response.data.file));
  } catch (error) {
    return dispatch(getFileFailure(error));
  }
};

// Action Creators: Create Folder
const createFolderRequest = () => createAction(CREATE_FOLDER.REQUEST);
const createFolderSuccess = data => createAction(CREATE_FOLDER.SUCCESS, { data });
const createFolderFailure = error => createAction(CREATE_FOLDER.FAILURE, { error });

// Thunk: Create Folder (https://api.put.io/v2/docs/files.html#get)
export const createFolder = (formData, params = {}) => async (dispatch, getState, Api) => {
  dispatch(createFolderRequest());

  try {
    const response = await Api.post('/files/create-folder', formData, params);

    dispatch(createFolderSuccess(response.data.file));
    return dispatch(push(`/files/${response.data.file.id}`));
  } catch (error) {
    return dispatch(createFolderFailure(error));
  }
};
