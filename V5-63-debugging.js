
// npm i debug
// this uses environment variable to enable or disable debuging

const startupDebugger = require('debug')('app:startup');
const bdDebugger = require('debug')('app:db');
const express = require('express');
const morgan = require('morgan');
const app = express();

console.log(`Using console`)

if(app.get('env') === 'development'){
    app.use(morgan('tiny'));
    startupDebugger(`morgan Enabled`);
}

// DB work..
bdDebugger('Connected to the database...');

// export DEBUG=app:startup
    // Using console
    //   app:startup morgan Enabled +0ms

// export DEBUG=app:db
    // Using console
    //   app:db Connected to the database... +0ms

// export DEBUG=app:*
    // Using console
    //   app:startup morgan Enabled +0ms
    //   app:db Connected to the database... +0ms

// export DEBUG=
    // Using console

// DEBUG=app:* nodemon V5-63-debugging.js
    // [nodemon] 1.18.10
    // [nodemon] to restart at any time, enter `rs`
    // [nodemon] watching: *.*
    // [nodemon] starting `node V5-63-debugging.js`
    // Using console
    //   app:startup morgan Enabled +0ms
    //   app:db Connected to the database... +0ms