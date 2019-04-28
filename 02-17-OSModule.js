const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(`totalMemory is : ${totalMemory}`);
console.log(`freeMemory is : ${freeMemory}`);
