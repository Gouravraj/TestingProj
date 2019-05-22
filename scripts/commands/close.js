function close(cwd) {
  return () => {
    return [
      './close.sh',
      null,
      {
        cwd
      }
    ];
  };
}

module.exports = close;
