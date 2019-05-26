'use strict';

function createLineNo(replace) {
  return (out = []) => {
    return out
      .split(/\n/g)
      .reduce((acc, line, idx) => {
        if (!line) {
          return acc;
        }

        return [...acc, line.replace(replace, `${idx + 1}.`)];
      }, [])
      .join('\n');
  };
}

const addLineNo = createLineNo(/^/);

addLineNo.replace = createLineNo;

module.exports = addLineNo;
