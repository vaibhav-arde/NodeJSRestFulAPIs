const EventEmitter = require('events'); //E in EventEmitter is capital because it is a class
const emitter = new EventEmitter();

//Register a listener
emitter.on('messageLogged', function(){
    console.log('Listner Called');
});

//Raise an Event
emitter.emit('messageLogged');
