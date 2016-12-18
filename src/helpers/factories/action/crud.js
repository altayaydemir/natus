/**
 * Creates CRUD Action Creators
 * @param  {object} TYPES
 * @return {object}
 */
import createAction from './plain';

export default function createCrudActions(TYPES) {
  const { INDEX, SHOW, CREATE, UPDATE, DELETE, ACTIVE } = TYPES;

  return {
    index: {
      request: () => createAction(INDEX.REQUEST),
      success: data => createAction(INDEX.SUCCESS, { data }),
      failure: error => createAction(INDEX.FAILURE, { error }),
    },

    show: {
      request: id => createAction(SHOW.REQUEST, { id }),
      success: data => createAction(SHOW.SUCCESS, { data }),
      failure: error => createAction(SHOW.FAILURE, { error }),
    },

    create: {
      request: formData => createAction(CREATE.REQUEST, { formData }),
      success: data => createAction(CREATE.SUCCESS, { data }),
      failure: error => createAction(CREATE.FAILURE, { error }),
    },

    update: {
      request: (id, formData) => createAction(UPDATE.REQUEST, { id, formData }),
      success: data => createAction(UPDATE.SUCCESS, { data }),
      failure: error => createAction(UPDATE.FAILURE, { error }),
    },

    delete: {
      request: data => createAction(DELETE.REQUEST, { data }),
      success: () => createAction(DELETE.SUCCESS),
      failure: error => createAction(DELETE.FAILURE, { error }),
    },

    active: {
      select: id => createAction(ACTIVE.SELECT, { id }),
      update: data => createAction(ACTIVE.UPDATE, { data }),
      clear: () => createAction(ACTIVE.CLEAR),
    },
  };
}
