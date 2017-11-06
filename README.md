# Introduction

npm is the package manager for JavaScript and the world’s largest software registry. Discover packages of reusable code — and assemble them in powerful new ways. 


# To Install NPM:
```sh
  npm install
  ```

### FTPS:
#### Requirements:
FTPS client for node.js, mainly a lftp wrapper.

#### Requirements:
You need to have the executable lftp installed on your computer.

```sh Windows (Chocolatey)
C:\> choco install lftp
OSX (Homebrew)
sudo brew install lftp
Linux
sudo apt-get install lftp
# or
sudo yum install lftp
```
### Installation
``` sh
Npm install ftps
```
After completing npm-ftps installation open index.js in connection folder and setup host, username,password,protocol, port and additionalLftpcommand.
### Test and Requirements:

Tested on windows and linux
``` sh 
python 2.7+
node version 8.6.0
```
To run this application 
``` sh 
node appname <arguments>
```
### Help
This app can perform all the available operations of npm on ftps.
user can use --help to see the available commands.
``` sh
node appname --help
```
