const arguments = require('yargs')
    .command('list', 'Get the list of files')
    .command('pwd', 'Print Working Directory')
    .command('cd', 'Change directory provided the path', {
        dir:{
            describe: 'Provide the path to directory',
            alias: 'd',
            demand: true
        }
    })
    .command('cd', 'Change directory provided the path.', {
        dir:{
            describe: 'Provide the path to directory',
            alias: 'd',
            demand: true
        }
    })
    .command('mkdir', 'Make a directory with a name specified.', {
        dir:{
            describe: 'Provide the directory name',
            alias: 'd',
            demand: true
        }
    })
    .command('rmdir', 'Remove a directory with a name specified.', {
        dir:{
            describe: 'Provide the name to directory',
            alias: 'd',
            demand: true
        }
    })
    .command('rm', 'Remove a file with a name specified.', {
        file:{
            describe: 'Provide the name to file',
            alias: 'f',
            demand: true
        }
    })
    .command('addfile', 'Add a file with a path specified.', {
        file:{
            describe: 'Provide the name of file',
            alias: 'f',
            demand: true
        },
        path:{
            describe: 'Provide the path to create file',
            alias: 'p',
            demand: true
        }
    })
    .command('get', 'Get the file to local system from remote server.', {
        file:{
            describe: 'Provide the name to file',
            alias: 'f',
            demand: true
        }
    })
    .command('mv', 'Move a file with a path specified.', {
        file:{
            describe: 'Provide the name of file',
            alias: 'f',
            demand: true
        },
        path:{
            describe: 'Provide the path to create file',
            alias: 'p',
            demand: true
        }
    })
    .help()
    .argv;

module.exports = arguments;