function log(req, res, next){
    console.log('Logging...');
    next(); //this passes control to next 
}

module.exports = log;