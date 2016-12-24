const formatList = (list, key, label) => list.map(item => ({
  value: item[key],
  label: item[label],
}));

export default formatList;
