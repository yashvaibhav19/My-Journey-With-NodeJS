const fs = require('fs');
const book = {
    title: 'Focus: the hidden driver of excellence',
    author: 'Daniel Goleman'
}

const bookJSON = JSON.stringify(book);
fs.writeFileSync('book.json',bookJSON); //fileName, string