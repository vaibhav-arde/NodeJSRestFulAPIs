// const EventEmitter = require('events'); //E in EventEmitter is capital because it is a class
const Logger = require('./02-21-logger');
const logger = new Logger;

//Register a listener
logger.on('messageLogged', (arg) => {
    console.log('Listner Called', arg);
});

logger.log('Test Message');