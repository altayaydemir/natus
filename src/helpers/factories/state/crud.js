export default function createCrudState() {
  return {
    list: {
      data: [],
      isLoaded: false,
    },
    active: {
      data: {},
      isLoaded: false,
    },
    creating: false,
    updating: false,
    deleting: false,
    error: {},
  };
}
