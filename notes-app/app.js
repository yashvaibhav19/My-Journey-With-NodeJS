const yargs = require('yargs');
const chalk = require('chalk');
const getNotes = require('./notes.js');

// lets make a display function
yargs.command({
    command: 'display',
    description: 'displays line',
    handler: function(){
        console.log(chalk.bgGreen("A rolling stone gathers no moss"));
    }
});
yargs.command({
    command: 'list',
    description: 'list in a note',
    builder: {
        title: {
            description: 'Has Title String',
            type: 'string',
            demandOption: true
        },
        body: {
            description: 'Has Body String',
            type: 'string',
            demandOption: true
        }
    },
    handler: function(argv) {
        console.log('Title: ',argv.title);
        console.log('Body: ',argv.body);
    }
})
yargs.command({
    command: 'read',
    description: 'Reads the node(s)',
    handler: ()=>{
        console.log('Reading values');
    }
})
yargs.parse();
// console.log(yargs.argv);