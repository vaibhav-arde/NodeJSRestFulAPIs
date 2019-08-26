const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const app = express();
const Joi = require('joi');
 
app.use(helmet());
app.use(morgan('tiny'));
// GET /api/courses 200 79 - 0.275 ms


let courses = [
    {id : 1, name : 'course1'},
    {id : 2, name : 'course2'},
    {id : 3, name : 'course3'},
];

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) =>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send(`The course with the given ID: ${req.params.id} was not found.`);
    res.send(course);
});

app.post('/api/courses', (req, res) => {
    const { error } = validateCourse(req.body); //Object destructuring feature
    if (error) return res.status(400).send(error.details[0].message);

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

function validateCourse(course){
    const schema = {
        name : Joi.string().min(3).required()
    };
    return Joi.validate(course, schema);
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));