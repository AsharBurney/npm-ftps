//Arguments parser
const arguments = require('yargs').argv;

//BASE CLASS
if (arguments._.length != 0)
{
    require('./File System Manipulation')(arguments);
}
else
{
    console.log("Arguments required.");
}