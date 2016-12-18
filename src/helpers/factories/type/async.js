/**
 * Generates Async Action Types from Given Parameters
 *
 * @param {string} moduleName
 * @param {string} actionName
 * @returns {object}
 */
function createAsyncActionType(moduleName, actionName) {
  return {
    REQUEST: `${moduleName}/${actionName}_REQUEST`,
    SUCCESS: `${moduleName}/${actionName}_SUCCESS`,
    FAILURE: `${moduleName}/${actionName}_FAILURE`,
  };
}

export default createAsyncActionType;
