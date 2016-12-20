import { combineReducers } from 'redux';

// External Reducers
import { routerReducer as routing } from 'react-router-redux';
import { reducer as form } from 'redux-form';

// Internal Reducers
import user from 'modules/user/reducer';

export default combineReducers({
  user,
  routing,
  form,
});
