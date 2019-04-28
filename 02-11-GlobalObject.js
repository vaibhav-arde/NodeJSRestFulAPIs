// console.log(); //global;

// setTimeout();
// clearTimeout();

// setInterval();
// clearInterval();

// In beowser we have window object
//but in node we dont have window but global object
//variables declared using var are not part of global object ex as below.
// varibales and functions defined in module are available only in respective module and not in global object 
var message ="Test";
console.log(global.message);// output is undefined

