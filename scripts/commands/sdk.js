function sdk(cwd) {
  return () => {
    return ['./sdk.sh', [], { cwd }];
  };
}

module.exports = sdk;
