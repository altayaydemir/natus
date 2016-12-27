// Helpers
import { createAction } from 'helpers/factories';

// Types
import { GET_FILES, GET_FILE, CREATE_FOLDER, DELETE_FILES } from './types';

// External Actions
import { push } from 'react-router-redux';

// Action Creators: Get Files
const getFilesRequest = () => createAction(GET_FILES.REQUEST);
const getFilesSuccess = data => createAction(GET_FILES.SUCCESS, { data });
const getFilesFailure = error => createAction(GET_FILES.FAILURE, { error });

// Thunk: Get Files
export const getFiles = (params = {}) => async (dispatch, getState, Api) => {
  dispatch(getFilesRequest());

  try {
    const response = await Api.get('/files/list', { breadcrumbs: true, ...params });
    return dispatch(getFilesSuccess(response.data));
  } catch (error) {
    return dispatch(getFilesFailure(error));
  }
};

// Action Creators: Get Files
const getFileRequest = () => createAction(GET_FILE.REQUEST);
const getFileSuccess = data => createAction(GET_FILE.SUCCESS, { data });
const getFileFailure = error => createAction(GET_FILE.FAILURE, { error });

// Thunk: Get File
export const getFile = (id, params = {}) => async (dispatch, getState, Api) => {
  dispatch(getFileRequest());

  try {
    const response = await Api.get('/files/list', {
      parent_id: id,
      breadcrumbs: true,
      video_metadata_parent: true,
      stream_url_parent: true,
      ...params,
    });
    return dispatch(getFileSuccess(response.data));
  } catch (error) {
    return dispatch(getFileFailure(error));
  }
};

// Action Creators: Create Folder
const deleteFilesRequest = () => createAction(DELETE_FILES.REQUEST);
const deleteFilesSuccess = data => createAction(DELETE_FILES.SUCCESS, { data });
const deleteFilesFailure = error => createAction(DELETE_FILES.FAILURE, { error });

// Thunk: Create Folder
export const deleteFiles = (file_ids = [], params = {}) => async (dispatch, getState, Api) => {
  dispatch(deleteFilesRequest());

  if (file_ids.length === 0) {
    file_ids = getState().files.createdFolders;
  }

  try {
    await Api.post('/files/delete', { file_ids }, params);
    dispatch(deleteFilesSuccess(file_ids));
    return dispatch(push('/files/'));
  } catch (error) {
    return dispatch(deleteFilesFailure(error));
  }
};

// Action Creators: Create Folder
const createFolderRequest = () => createAction(CREATE_FOLDER.REQUEST);
const createFolderSuccess = data => createAction(CREATE_FOLDER.SUCCESS, { data });
const createFolderFailure = error => createAction(CREATE_FOLDER.FAILURE, { error });

// Thunk: Create Folder
export const createFolder = (formData, params = {}) => async (dispatch, getState, Api) => {
  dispatch(createFolderRequest());

  try {
    const { data: { file } } = await Api.post('/files/create-folder', formData, params);

    dispatch(createFolderSuccess(file));

    // Bind delete files action to beforeunload event
    window.onbeforeunload = () => dispatch(deleteFiles());

    return dispatch(push(`/files/${file.id}`));
  } catch (error) {
    return dispatch(createFolderFailure(error));
  }
};
