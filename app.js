const chalk = require('chalk');
const notes = require('./notes.js');
const yargs = require('yargs');
//const greenMsg = chalk.green.bold(msg);
//console.log(greenMsg);
//console.log(process.argv);
yargs.command({
    command: 'add',
    describe: 'Adding a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type:'string'
        }
    },
    handler: function(argv){
        console.log('Adding a new note');
        notes.addNote(argv.title, argv.body);
    }
})
yargs.command({
    command: 'remove',
    describe: 'Removing a new note',
    handler: function(){
        console.log('Removing a new note');
    }
})
yargs.command({
    command: 'list',
    describe: 'Listing all notes',
    handler: function() {
        console.log('Listing all notes');
    }
})
yargs.command({
    command: 'read',
    describe: 'Reading your note',
    handler: function() {
        console.log('Reading a note');
    }
})
yargs.parse();