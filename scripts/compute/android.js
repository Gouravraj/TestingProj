'use strict';

function open(out) {
  return out.split(/\n/g).reduce((acc, line) => {
    if (!line) {
      return acc;
    }

    const [, device] = line.trim().split(': ');

    return [...acc, device];
  }, []);
}

exports.open = open;
