'use strict';

function _getIdentifiers(obj, propName) {
  const stream = Object.keys(obj);
  const identifiers = stream
    .reduce((acc, key) => {
      const val = obj[key];

      if (key.toLowerCase() === propName) {
        const props = val.reduce(
          (innerAcc, { identifier }) => [...innerAcc, identifier],
          []
        );

        return [...acc, props];
      }

      return acc;
    }, [])
    .flat();

  return identifiers;
}

module.exports = _getIdentifiers;
