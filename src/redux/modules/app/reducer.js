import { LOAD_APP, ERROR } from './types';

const initialState = {
  isLoaded: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_APP.START:
      return {
        ...initialState,
      };

    case LOAD_APP.FINISH:
      return {
        isLoaded: true,
      };

    case ERROR.UPDATE:
      return {
        ...state,
        error: action.payload,
      };

    case ERROR.CLEAR:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
