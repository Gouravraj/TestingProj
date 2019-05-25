function loading(message = '') {
  (function() {
    const spinner = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
    let i = 0;

    return setInterval(() => {
      i = i > spinner.length - 1 ? 0 : i;

      process.stdout.write(`\r ${message} ${spinner[i]}`);

      i++;
    }, 80);
  })();
}

// loading('Loading...');

module.exports = loading;
