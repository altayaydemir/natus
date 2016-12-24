// Types
import TYPES from './types';

/**
 * Update UI: updates UI with given data.
 * @param  {object} data: Next UI State
 * @return {object}
 */
export function updateUI(data) {
  return {
    type: TYPES.UPDATE,
    payload: {
      data,
    },
  };
}

/**
 * Reset UI: returns UI state to initial.
 * @return {object}
 */
export function resetUI() {
  return {
    type: TYPES.RESET,
  };
}

/**
 * Show Modal
 * @param  {string} name (unique)
 * @return {object}
 */
export function showModal(name, props = {}) {
  return {
    type: TYPES.MODAL_SHOW,
    payload: name,
    meta: props,
  };
}

/**
 * Hide Modal
 * @return {object}
 */
export function hideModal() {
  return {
    type: TYPES.MODAL_HIDE,
  };
}

/**
 * Show Notification
 * @param  {object} props
 * @return {object}
 */
export function showNotification(data) {
  return {
    type: TYPES.NOTIFICATION_SHOW,
    payload: data,
  };
}

/**
 * Hide Notification
 * @return {object}
 */
export function hideNotification() {
  return {
    type: TYPES.NOTIFICATION_HIDE,
  };
}
