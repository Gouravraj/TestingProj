function _getExtractInfo(propName) {
  return (obj) => {
    const parent = obj[propName];
    const isArray = Array.isArray(parent);
    const stream = isArray ? parent : Object.keys(parent);

    return stream.reduce((acc, key) => {
      if (isArray) {
        return [...acc, key];
      }

      return [...acc, ...parent[key]];
    }, []);
  };
}

module.exports = _getExtractInfo;
