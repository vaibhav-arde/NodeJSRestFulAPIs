const express = require('express');
const app = express();
const logger = require('./V5-58-logger')

app.use(express.json());

// app.use(function(req, res, next){
//     console.log('Logging...');
//     next(); //this passes control to next 
// }); 

app.use(logger); 

let courses = [
    {id : 1, name : 'course1'},
    {id : 2, name : 'course2'},
    {id : 3, name : 'course3'},
];

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));