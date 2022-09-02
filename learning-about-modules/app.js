const fs = require('fs');
fs.writeFileSync("random.txt","Loren Ipsum"); //will create file and write
fs.appendFileSync('random.txt',"\nAppended to a new line :thumbsup:"); //will append text
fs.writeFileSync('random.txt',"Lets see how far this goes"); //will overwrite