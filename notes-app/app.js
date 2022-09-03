const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');

console.log(chalk.bgGreen(validator.isEmail('@gmail.com')));
console.log(yargs.argv); 