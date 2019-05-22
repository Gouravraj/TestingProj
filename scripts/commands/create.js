const { androidHome } = require('../helpers/path');

function createCommand(cwd) {
  return (name, device, api) => {
    return [
      './avdmanager',
      [
        'create',
        'avd',
        '--name',
        `'${name}'`,
        '--package',
        `'system-images;android-${api};google_apis;x86_64'`,
        '--device',
        `'${device}'`
      ],
      {
        cwd,
        shell: true
      }
    ];
  };
}

const create = createCommand(`${androidHome}/tools/bin`);

module.exports = create;
