import FETCH_INFO from './types';

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  data: {},
  error: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INFO.REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_INFO.SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        data: action.payload.data,
      };

    case FETCH_INFO.FAILURE:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
};
