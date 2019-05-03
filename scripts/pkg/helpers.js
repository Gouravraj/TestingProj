const colors = require('colors'); // eslint-disable-line
const { spawnSync } = require('child_process');

function exec(message, cmd, args, options = {}) {
  options = Object.assign(
    {},
    {
      encoding: 'utf8'
    },
    options
  );

  console.log('>>> '.green, message); // eslint-disable-line
  const { stdout, stderr } = spawnSync(cmd, args, options);

  if (stderr) {
    console.log('Error(s):'.red); // eslint-disable-line
    console.log(stderr); // eslint-disable-line

    process.exit(1);
  }

  return Promise.resolve({ stdout, stderr });
}

module.exports = { exec };
