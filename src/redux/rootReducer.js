import { combineReducers } from 'redux';

// External Reducers
import { routerReducer as routing } from 'react-router-redux';
import { reducer as toastr } from 'react-redux-toastr';
import { reducer as form } from 'redux-form';

export default combineReducers({
  routing,
  form,
  toastr,
});
