const fs = require('fs');

var files = fs.readdirSync('./');
console.log(`readdirSync: ${files}`);

fs.readdir('./', function(err, files1){
    if (err) console.log('Error', err);
    else console.log('Result', files1);
});

console.log(`files`,files);

console.log('Test this');
