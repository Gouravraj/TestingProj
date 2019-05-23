function sdk(cwd) {
  return () => {
    return ['./sdk.sh', null, { cwd }];
  };
}

module.exports = sdk;
