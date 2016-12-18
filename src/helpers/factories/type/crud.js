import createAsyncActionType from './async';
import createActiveActionType from './active';

/**
 * Creates CRUD + Select Action Types
 * @param  {string} moduleName
 * @return {object}
 */
export default function createCrudActionTypes(moduleName) {
  return {
    INDEX: createAsyncActionType(moduleName, 'INDEX'),
    SHOW: createAsyncActionType(moduleName, 'SHOW'),
    CREATE: createAsyncActionType(moduleName, 'CREATE'),
    UPDATE: createAsyncActionType(moduleName, 'UPDATE'),
    DELETE: createAsyncActionType(moduleName, 'DELETE'),
    ACTIVE: createActiveActionType(moduleName),
  };
}
