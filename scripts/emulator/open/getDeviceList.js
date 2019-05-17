const readlineSync = require('readline-sync');

function getDeviceList(stdout) {
  // TODO: if multiple
  const deviceList = stdout
    .toString()
    .split(/\n/g)
    .reduce((acc, line) => {
      if (!line) {
        return acc;
      }

      const [, device] = line.trim().startsWith('Name') ? line.split(': ') : [];

      return device ? [...acc, device] : acc;
    }, []);

  const idx = readlineSync.keyInSelect(deviceList, 'Select a device');

  return deviceList[idx];
}

module.exports = getDeviceList;
