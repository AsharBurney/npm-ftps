//Arguments parser
arguments = require('./Parser');

//BASE CLASS
if (arguments._.length != 0)
{
    require('./File System Manipulation')(arguments);
}
else
{
    console.log("Arguments required.");
}
