const validator = require('validator');
const chalk = require('chalk');

console.log(chalk.bgGreen(validator.isEmail('@gmail.com')));