const formatEnum = ENUM => Object.keys(ENUM).map(key => ({
  value: key,
  label: ENUM[key],
}));

export default formatEnum;
