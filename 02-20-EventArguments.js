const EventEmitter = require('events'); //E in EventEmitter is capital because it is a class
const emitter = new EventEmitter();

//Register a listener
emitter.on('messageLogged', (arg) => {
    console.log('Listner Called', arg);
});

//Raise an Event
emitter.emit('messageLogged', {id: 1, url: 'https://'});
