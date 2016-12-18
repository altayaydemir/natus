/**
 * Creates a generic Redux Reducer that handles CRUD and select/clear active ACTION_TYPES.
 * ACTION_TYPES param should contain INDEX, SHOW, CREATE, UPDATE, DELETE and
 * SELECT type of ACTION_TYPES
 *
 * @param  {object} initialState
 * @param  {object} ACTION_TYPES to be handled
 * @return {function}
 */
function createCrudReducer(initialState, ACTION_TYPES) {
  const crudReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case ACTION_TYPES.INDEX.REQUEST:
        return {
          ...state,
          list: {
            data: [],
            isLoaded: false,
          },
        };

      case ACTION_TYPES.SHOW.REQUEST:
        return {
          ...state,
          active: {
            ...state.active,
            data: {},
            isLoaded: false,
          },
        };

      case ACTION_TYPES.CREATE.REQUEST:
        return {
          ...state,
          creating: true,
        };

      case ACTION_TYPES.UPDATE.REQUEST:
        return {
          ...state,
          updating: true,
        };

      case ACTION_TYPES.DELETE.REQUEST:
        return {
          ...state,
          deleting: true,
        };

      case ACTION_TYPES.INDEX.SUCCESS:
        return {
          ...state,
          list: {
            data: action.payload.data,
            isLoaded: true,
          },
          error: {},
        };

      case ACTION_TYPES.SHOW.SUCCESS:
        return {
          ...state,
          active: {
            ...state.active,
            data: action.payload.data,
            isLoaded: true,
          },
          error: {},
        };

      case ACTION_TYPES.CREATE.SUCCESS:
        return {
          ...state,
          creating: false,
          error: {},
        };

      case ACTION_TYPES.UPDATE.SUCCESS:
        return {
          ...state,
          active: {
            ...state.active,
            data: action.payload.data,
            isLoaded: true,
          },
          updating: false,
          error: {},
        };

      case ACTION_TYPES.DELETE.SUCCESS:
        return {
          ...state,
          active: {
            data: {},
            isLoaded: false,
          },
          deleting: false,
          error: {},
        };

      case ACTION_TYPES.ACTIVE.SELECT:
        return {
          ...state,
          active: {
            data: state.list.data.filter(item => item.id === action.payload.id)[0],
            isLoaded: true,
          },
          error: {},
        };

      case ACTION_TYPES.ACTIVE.UPDATE:
        return {
          ...state,
          active: {
            isLoaded: true,
            data: action.payload.data,
          },
          error: {},
        };

      case ACTION_TYPES.ACTIVE.CLEAR:
        return {
          ...state,
          active: {
            ...state.active,
            data: {},
            isLoaded: false,
          },
          error: {},
        };

      case ACTION_TYPES.INDEX.FAILURE:
        return {
          ...state,
          list: {
            data: [],
            isLoaded: true,
          },
          error: action.payload.error,
        };

      case ACTION_TYPES.SHOW.FAILURE:
        return {
          ...state,
          active: {
            ...state.active,
            data: {},
            isLoaded: true,
          },
          error: action.payload.error,
        };

      case ACTION_TYPES.CREATE.FAILURE:
        return {
          ...state,
          creating: false,
          error: action.payload.error,
        };

      case ACTION_TYPES.UPDATE.FAILURE:
        return {
          ...state,
          updating: false,
          error: action.payload.error,
        };

      case ACTION_TYPES.DELETE.FAILURE:
        return {
          ...state,
          deleting: false,
          error: action.payload.error,
        };

      default:
        return state;
    }
  };

  return crudReducer;
}

export default createCrudReducer;
