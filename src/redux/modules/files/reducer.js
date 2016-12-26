import { GET_FILES, GET_FILE, CREATE_FOLDER, DELETE_FILES, CONVERSION } from './types';

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
  deleting: {
    isLoading: true,
    error: {},
  },
  converting: {
    isLoading: true,
    data: {},
    error: {},
  },
  createdFolders: [],
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
        creating: {
          isLoading: false,
          error: {},
        },
        createdFolders: [...state.createdFolders, action.payload.data.id],
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

    case DELETE_FILES.REQUEST:
      return {
        ...state,
        deleting: {
          ...state.deleting,
          isLoading: true,
        },
      };

    case DELETE_FILES.SUCCESS:
      return {
        ...state,
        deleting: {
          isLoading: false,
          error: {},
        },
        createdFolders: state.createdFolders.filter(i => action.payload.data.indexOf(i) < 0),
      };

    case DELETE_FILES.FAILURE:
      return {
        ...state,
        deleting: {
          ...state.deleting,
          isLoading: false,
          error: action.payload.error,
        },
      };

    case CONVERSION.START:
      return {
        ...state,
        converting: {
          ...state.converting,
          isLoading: true,
        },
      };

    case CONVERSION.UPDATE:
      return {
        ...state,
        converting: {
          ...state.converting,
          isLoading: true,
          data: action.payload.data,
        },
      };

    case CONVERSION.FINISH:
      return {
        ...state,
        converting: {
          ...state.converting,
          isLoading: false,
          data: action.payload.data,
        },
      };

    default:
      return state;
  }
};
