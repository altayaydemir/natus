// import isURL from 'validator/lib/isURL';
// const isMagnet = value => value.match(/magnet:\?xt=urn:[a-z0-9]{20,50}/i) !== null;

// Redux Form Compatible Validators
const required = value => !value && 'This field is required';
// const magnetOrURL = value => isMagnet(value) && 'Please enter a valid URI';

export default {
  required,
  // magnetOrURL,
};
