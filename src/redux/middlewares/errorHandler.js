import { updateError } from 'modules/app/actions';
import { hideModal } from 'modules/ui/actions';

const errorHandler = store => next => (action) => {
  if (action.payload && action.payload.error) {
    const { error } = action.payload;

    if (error.response && (error.response.status === 404 || error.response.status === 500)) {
      store.dispatch(hideModal());
      return store.dispatch(updateError(error.response.status));
    }
  }

  return next(action);
};

export default errorHandler;
