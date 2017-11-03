var myArgs = require('optimist').argv,
     help = '';
const readline = require('readline');
var FTPS = require('ftps');
var ftps = new FTPS({
  host: 'ftps://172.21.2.25', // required 
  username: 'dih', // Optional. Use empty username for anonymous access. 
  password: 'DiHhacker_46', // Required if username is not empty, except when requiresPassword: false 
  protocol: 'ftps', // Optional, values : 'ftp', 'sftp', 'ftps', ... default: 'ftp' 
  // protocol is added on beginning of host, ex : sftp://domain.com in this case 
  port: 8888, // Optional 
  // port is added to the end of the host, ex: sftp://domain.com:22 in this case 
  escape: true, // optional, used for escaping shell characters (space, $, etc.), default: true 
  retries: 2, // Optional, defaults to 1 (1 = no retries, 0 = unlimited retries) 
  timeout: 10, // Optional, Time before failing a connection attempt. Defaults to 10 
  retryInterval: 5, // Optional, Time in seconds between attempts. Defaults to 5 
  retryMultiplier: 1, // Optional, Multiplier by which retryInterval is multiplied each time new attempt fails. Defaults to 1 
  requiresPassword: true, // Optional, defaults to true 
  autoConfirm: true, // Optional, is used to auto confirm ssl questions on sftp or fish protocols, defaults to false 
  cwd: '', // Optional, defaults to the directory from where the script is executed 
  additionalLftpCommands: 'set ssl:verify-certificate false', // Additional commands to pass to lftp, splitted by ';' 
  requireSSHKey:  false, //  Optional, defaults to false, This option for SFTP Protocol with ssh key authentication 
  sshKeyPath: '' // Required if requireSSHKey: true , defaults to empty string, This option for SFTP Protocol with ssh key authentication 
});
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var stdin = process.openStdin();
console.log("what action do you want to perform:");
console.log("1 = list everything");
console.log("2 = make new directory");
console.log("3 = remove directory");
console.log("4 = enter the name directory in which you want to create the file");
console.log("5 = enter in particular directory");
console.log("6 = remove file");
console.log("7 = copy file from remote to local(get)");
console.log("8 = copy file from local to remote(put)");
console.log("9 = move file");
stdin.addListener("data", function(d,a) {   
 // note:  d is an object, and when converted to a string it will  
  // end with a linefeed.  so we (rather crudely) account for that      
// with toString() and then trim() 
	var name=d;
	var filename=a;
//console.log("enter the name of directory/file:");
//console.log("what action do you want to perform:");
	if(name== '1')
	{
    ftps.raw('ls').exec(function(req,res){
      console.log(res);
    });
   
		
	}
	else if(name=='2')
	{
    rl.question('enter the name of directory? ', (filename) => {
    
    ftps.raw('mkdir '+ filename).exec(function(req,res){console.log(res);});
  
      });
		
	}
  else if(name=='3')
  {
    rl.question('enter the name of file you want to remove? ', (rmfile) => {
    ftps.raw('rm '+ rmfile).exec(function(req,res){ console.log(res);});
    });
  }
  else if(name=='4')
  {
    rl.question('enter the name of directory in which you want to create the file? ', (dirname) => {
      rl.question('enter the name of file which you want to create? ', (filecrname) => {
    //ftps.raw('rm '+ rmfile).exec(function(req,res){ console.log(res);});
    ftps.cd(dirname+'/').addFile('./'+filecrname).exec(function(req,res){ console.log(res);});
    });
    });
  }
  else if(name=='5')
  {
    rl.question('enter the name of directory you want to enter? ', (dirnamee) => {

    ftps.cd(dirnamee).exec(function(req,res){ console.log(res);});

    });

  }
  else if(name=='6')
  {
    rl.question('enter the name of file which you want to delete? ', (delefile) => {

    ftps.rm(delefile).exec(function(req,res){ console.log(res);});

    });

  }
   else if(name=='7')
  {
     rl.question('enter the name of remote file: ', (remfilename) => {
      rl.question('enter the name of local file: ', (localfile) => {
    //ftps.raw('rm '+ rmfile).exec(function(req,res){ console.log(res);});
   ftps.get('./'+remfilename, './'+localfile).exec(function(req,res){ console.log(res);});

    });
    });
  }
  else if(name=='8')
  {
     rl.question('enter the name of local file: ', (localFile) => {
      rl.question('enter the name of remote file: ', (remoteFile) => {
    //ftps.raw('rm '+ rmfile).exec(function(req,res){ console.log(res);});
   ftps.put('./'+localFile, './'+remoteFile).exec(function(req,res){ console.log(res);});

    });
    });
  }
  else if(name=='9')
  {
     rl.question('enter the name of directory and name of file which you want to move(dirname/filename): ', (fromfile) => {
      rl.question('enter the name of directory and name of file which you want to move(dirname/filename): ', (tofile) => {
    //ftps.raw('rm '+ rmfile).exec(function(req,res){ console.log(res);});
    ftps.mv(fromfile, tofile).exec(function(req,res){ console.log(res);});

    });
    });
  }

 });

 if ((myArgs.h)||(myArgs.help)) {
   console.log(help);
   process.exit(0);
 }

 switch (myArgs._[0]) {
   case 'mkdir':
	ftps.raw('mkdir hello1').exec(function(req,res){console.log(res);});
     //console.log(myArgs.n || myArgs.name, 'smells quite badly.');
     break;
   case 'rm':
     ftps.raw('rm new.js').exec(function(req,res){console.log(res);});
     break;
   default:
     console.log(help);
 }

 //console.log('myArgs: ', myArgs);

