'use strict';

function _getVM(platform) {
  return (out) => {
    let list;

    if (platform === 'ios') {
      const json = JSON.parse(out);
      const stream = Object.keys(json.devices);

      list = stream
        .reduce((acc, runtimeName) => {
          const info = json.devices[runtimeName];
          const vm = info.reduce((innerAcc, item) => {
            if (item.isAvailable) {
              return [...innerAcc, item];
            }

            return innerAcc;
          }, []);

          if (vm.length) {
            return [...acc, vm];
          }

          return acc;
        }, [])
        .flat();

      return list;
    } else if (platform === 'android') {
      list = out.split(/\n/g).reduce((acc, line) => {
        if (!line) {
          return acc;
        }

        const [, device] = line.trim().split(': ');

        return [...acc, device];
      }, []);
    }

    return list;
  };
}

module.exports = _getVM;
