const EventEmitter = require('events');

class Logger extends EventEmitter{
    log(message){
        //Sent HTTP request
        console.log(message);

        //Raise an Event
        this.emit('messageLogged', {id: 1, url: 'https://'});
    }
}

module.exports = Logger;