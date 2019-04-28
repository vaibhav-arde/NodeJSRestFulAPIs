var url= 'http://logger.io/log';

function log(message){
    console.log(message);
}

module.exports.log = log;
module.exports.endPoint = url;//external name can be different eg. endPoint

// console.log(module);
console.log(__filename);
console.log(__dirname);