//---------yargs for help-----------


var parserjs = () => {
    require('yargs')
        .options({
            'list': {
                describe: 'List the current files in a directory',
                boolean:true,
                demandOption: true

            },
            'pwd': {
                boolean:false,
                describe: 'Print working directory',
                demandOption: true
            },
            'cd': {
                boolean:false,
                describe: 'for jumping into directory',
                demandOption: true
            },
            'mkdir': {
                boolean:false,
                describe: 'for making a directory with name',
                demandOption: true
            },
            'rmdir': {
                boolean:false,
                describe: 'for removing a directory with name',
                demandOption: true
            },
            'rm': {
                boolean:false,
                describe: 'for removing a file with name',
                demandOption: true
            },
            'addfile': {
                boolean:false,
                describe: 'Add a new file to remote server',
                demandOption: true
            },
            'get': {
                boolean:false,
                describe: 'Download file from remote server to a local system',
                demandOption: true
            },
            'mv': {
                boolean:false,
                describe: 'Move file within remote server',
                demandOption: true
            }
        })
        .help('Help')
        .argv;
};

module.exports = parserjs();
//---------------------------------------------
