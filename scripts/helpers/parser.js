function getDevices(stdout) {
  return stdout.split(/\n/g).reduce((acc, line) => {
    if (!line) {
      return acc;
    }

    const trimedLine = line.trim();
    const [, device] = trimedLine.split(': ');

    return [...acc, device];
  }, []);
}

function lineTrim(token) {
  token = token || /\n/g;

  return (out) => {
    return out
      .split(token)
      .filter((m) => m)
      .join('');
  };
}

lineTrim.stream = function stream(token) {
  token = token || /\n/g;

  return (out) => {
    return out.split(token).filter((m) => m);
  };
};

function cut(start, end) {
  return (out = []) => {
    end = end | out.length;

    return out.slice(start, end);
  };
}

function dirOnly(path = '') {
  return path
    .split('/')
    .slice(0, -1)
    .join('/');
}

function addLineNo(replace, out = []) {
  return out
    .split(/\n/g)
    .reduce(
      (acc, line, idx) => [...acc, line.replace(replace, `${idx + 1}.`)],
      []
    )
    .slice(0, -1)
    .join('\n');
}

module.exports = {
  getDevices,
  lineTrim,
  cut,
  dirOnly,
  addLineNo
};
