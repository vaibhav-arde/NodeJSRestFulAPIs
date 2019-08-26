const config = require('config'); 

// npm i config
// npm i rc //now using config only

console.log('Application Name: ' + config.get('name'));
console.log('Mail Server: ' + config.get('mail.host'));
console.log('Mail Password: ' + config.get('mail.password'));

// "app_password is an environment varible that we created" 
// export app_passowrd =1234

// export NODE_ENV=development
// result as below:
// Application Name: My express App - Development
// Mail Server: dev-mail-server
// Mail Password: 1234

// export NODE_ENV=production
// result as below:
// Application Name: My express App - Production
// Mail Server: prod-mail-server
// Mail Password: 1234



