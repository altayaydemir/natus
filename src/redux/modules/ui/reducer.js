// Action Types
import TYPES from './types';

// Initial State
export const initialState = {
  header: {
    title: 'Home',
    subTitle: '',
  },
  notification: {
    title: '',
    message: '',
  },
  modal: {
    name: '',
    visible: false,
    props: {},
  },
};

// UI Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.UPDATE:
      return {
        ...state,
        header: action.payload.data.header,
      };

    case TYPES.RESET:
      return initialState;

    case TYPES.MODAL_SHOW:
      return {
        ...state,
        modal: {
          visible: true,
          name: action.payload,
          props: action.meta,
        },
      };

    case TYPES.MODAL_HIDE:
      return {
        ...state,
        modal: {
          ...state.modal,
          visible: false,
          props: {},
        },
      };

    case TYPES.NOTIFICATION_SHOW:
      return {
        ...state,
        notification: action.payload,
      };

    case TYPES.NOTIFICATION_HIDE:
      return {
        ...state,
        notification: initialState.notification,
      };

    default:
      return state;
  }
};
