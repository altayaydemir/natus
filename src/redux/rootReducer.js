import { combineReducers } from 'redux';

// External Reducers
import { routerReducer as routing } from 'react-router-redux';
import { reducer as form } from 'redux-form';

// Internal Reducers
import app from 'modules/app/reducer';
import user from 'modules/user/reducer';
import files from 'modules/files/reducer';
import transfers from 'modules/transfers/reducer';

export default combineReducers({
  app,
  user,
  files,
  transfers,
  routing,
  form,
});
