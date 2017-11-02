const ftps = require('../Connection');

var executeCommand = (ftpsObj) => {
    ftpsObj.exec(function (req, res) {
        if(res.error == null)
            console.log(res.data);
        else
            console.log(res);
    });
};

var functionality = (arguments) => {
    switch (arguments._[0]){
        // List the current files in a directory
        case 'list':
            executeCommand(ftps.raw('ls'));
            break;

        // Print working directory
        case 'pwd':
            executeCommand(ftps.raw('pwd'));
            break;

        // ------------------------------ DIRECTORY MANIPULATION ------------------------------
        // --dir for jumping to directory
        case 'cd':
            executeCommand(ftps.raw('cd '+arguments.dir)
                .raw('pwd')
                .raw('ls'));
            break;

        // --dir=[NAME] for making a directory with name
        case 'mkdir':
            executeCommand(ftps.raw('mkdir '+arguments.dir)
                .raw('ls'));
            break;

        // --dir=[NAME] for removing a directory with name
        case 'rmdir':
            executeCommand(ftps.raw('rmdir '+arguments.dir)
                .raw('ls'));
            break;

        // ------------------------------- FILE MANIPULATION -------------------------------
        // Removing a file with a name
        // --file=[NAME] for removing a file with name
        case 'rm':
            executeCommand(ftps.raw('rm '+arguments.file)
                .raw('ls'));
            break;

        // Add a new file to remote server
        // --file=[NAME] for adding a file with name
        // --path=[NAME] for specifying a file path
        case 'addfile':
            executeCommand(ftps.put(arguments.file, arguments.path));
            break;

        // Download file from remote server to a local system
        // --file=[NAME] for getting file from remote server
        // --path=[NAME] for specifying a file path for local system
        case 'get':
            executeCommand(ftps.get(arguments.file, arguments.path));
            break;

        // Move file within remote server
        // --file=[NAME] for getting file from remote server
        // --path=[NAME] for specifying a file path for remote server
        case 'mv':
            executeCommand(ftps.mv(arguments.file, arguments.path));
            break;

        default:
            console.log("Unrecognized command: "+ command);
    }
};
module.exports = functionality;