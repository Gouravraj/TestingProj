function list(cwd) {
  return () => {
    return [
      './list.sh',
      null,
      {
        cwd
      }
    ];
  };
}

module.exports = list;
