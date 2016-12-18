/**
 * Generates ACTIVE.select and ACTIVE.clear action types for the given module.
 *
 * @param {string} moduleName
 * @returns {object}
 */
function createActiveActionType(moduleName) {
  return {
    SELECT: `${moduleName}/SELECT_ACTIVE`,
    UPDATE: `${moduleName}/UPDATE_ACTIVE`,
    CLEAR: `${moduleName}/CLEAR_ACTIVE`,
  };
}

export default createActiveActionType;
