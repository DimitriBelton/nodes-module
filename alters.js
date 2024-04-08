// alter.js
const chalk = require('chalk');

function addNumbers(x, y) {
  const sum = x + y;
  console.log(chalk.blue(`Die Summe von Zahlen ${chalk.yellow(x)} und ${chalk.yellow(y)} ist ${chalk.green(sum)}.`));
}

module.exports = addNumbers;
