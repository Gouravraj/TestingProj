const colors = require('colors');
const { spawnSync } = require('child_process');

function exec(message, cmd, args, options = {}) {
  options = Object.assign(
    {},
    {
      encoding: 'utf8'
    },
    options
  );

  console.log('>>> '.green, message);
  const { stdout, stderr } = spawnSync(cmd, args, options);

  if (stderr) {
    console.log('Error(s):'.red);
    console.log(stderr);

    process.exit(1);
  }

  return Promise.resolve({ stdout, stderr });
}

module.exports = { exec };
