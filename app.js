const chalk = require('chalk')
const yargs = require('yargs')

const Notes = require('./notes.js')

const msg = Notes.getNotes()
console.log(msg)

const greenMsg = chalk.green.inverse.bold('Success!')
console.log(greenMsg)

console.log(process.argv[2])

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
             type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true, 
            type: 'string'
        }
    },
    handler (argv) {
        Notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }

    },
    handler (argv) {
        Notes.removeNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler () {
        console.log('Listing out all notes')
        Notes.listNotes()
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title:{
            describe:'Read a note!',
            demandOption: true,
            type: 'string' 
        }
    },
    handler (argv) {
        console.log('Reading a note')
        Notes.readNote(argv.title)
    }
})

yargs.parse()