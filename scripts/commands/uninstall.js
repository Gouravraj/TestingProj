function uninstall(cwd) {
  return (id) => {
    return ['./uninstall.sh', [id], { cwd }];
  };
}

module.exports = uninstall;
