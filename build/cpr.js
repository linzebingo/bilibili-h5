var cpr = require('cpr');
//or
var cpr = require('cpr').cpr; //Back compat

cpr('./dist', 'D://Tools//nginx-1.11.10//html', {
    deleteFirst: true, //Delete "to" before
    overwrite: true, //If the file exists, overwrite it
    confirm: true //After the copy, stat all the copied files to make sure they are there
}, function(err, files) {
    //err - The error if any (err.list might be available with an array of errors for more detailed information)
    //files - List of files that we copied
    console.log(err)
});
