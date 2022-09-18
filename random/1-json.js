const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./book.json').toString());
console.log(data); //prints the extracted object