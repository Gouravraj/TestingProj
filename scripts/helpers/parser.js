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

module.exports = {
  getDevices
};
