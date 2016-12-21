import { GET_FILES, GET_FILE, CREATE_FOLDER } from './types';

const initialState = {
  list: {
    data: {},
    isLoaded: false,
    error: {},
  },
  active: {
    data: {},
    isLoaded: false,
    error: {},
  },
  uploading: {
    isLoading: false,
    error: {},
  },
  creating: {
    isLoading: false,
    error: {},
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FILES.REQUEST:
      return {
        ...state,
        list: {
          ...state.list,
          isLoaded: false,
        },
      };

    case GET_FILES.SUCCESS:
      return {
        ...state,
        list: {
          data: action.payload.data,
          isLoaded: true,
          error: {},
        },
      };

    case GET_FILES.FAILURE:
      return {
        ...state,
        list: {
          ...state.list,
          error: action.payload.error,
          isLoaded: true,
        },
      };

    case GET_FILE.REQUEST:
      return {
        ...state,
        active: {
          ...state.active,
          isLoaded: false,
        },
      };

    case GET_FILE.SUCCESS:
      return {
        ...state,
        active: {
          data: action.payload.data,
          isLoaded: true,
          error: {},
        },
      };

    case GET_FILE.FAILURE:
      return {
        ...state,
        active: {
          ...state.active,
          error: action.payload.error,
          isLoaded: true,
        },
      };

    case CREATE_FOLDER.REQUEST:
      return {
        ...state,
        creating: {
          ...state.creating,
          isLoading: true,
        },
      };

    case CREATE_FOLDER.SUCCESS:
      return {
        ...state,
        active: {
          data: action.payload.data,
          isLoaded: true,
          error: {},
        },
        creating: {
          isLoading: false,
          error: {},
        },
      };

    case CREATE_FOLDER.FAILURE:
      return {
        ...state,
        creating: {
          ...state.creating,
          isLoading: false,
          error: action.payload.error,
        },
      };

    default:
      return state;
  }
};
