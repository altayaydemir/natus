import LOAD_APP from './types';

const initialState = {
  isLoaded: false,
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

    default:
      return state;
  }
};
