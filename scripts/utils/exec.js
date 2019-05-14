const { spawnSync } = require('child_process');
const print = require('./logger');

module.exports = function exec(cmd, args, options = {}) {
  if (!Array.isArray(args)) {
    print('error', 'Argments format is wrong!');

    process.exit(1);
  }

  const out = spawnSync(cmd, args, options);
  const { stdout, stderr = Buffer, error } = out;
  const err = error || stderr.toString();

  if (err) {
    const errMessage = err
      .split(/null\n/g)
      .filter((m) => m)
      .join('');

    print('error', errMessage);

    process.exit(1);
  }

  print('info', stdout.toString());

  return out;
};
