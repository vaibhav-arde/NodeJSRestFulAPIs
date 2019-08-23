const express = require('express');
const app = express();
const Joi = require('joi');

app.use(express.json());

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

// Logic of PUT is as below:
// Look up the course
// If not existing, return 404

// Validate
// If invalid, return 400 - Bad request

// Update course
// Return the updated course

app.put('/api/courses/:id', (req,res) =>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send(`The course with the given ID: ${req.params.id} was not found.`);

    // const schema = {
    //     name : Joi.string().min(3).required()
    // };
    // const result = Joi.validate(req.body, schema);
    // if(result.error){
    //     res.status(400).send(result.error.details[0].message);
    //     return;
    // }

    // const result = validateCourse(req.body);
    // if(result.error){
    //     res.status(400).send(result.error.details[0].message);
    //     return;
    // }

    const { error } = validateCourse(req.body); //Object destructuring feature
    if (error) return res.status(400).send(error.details[0].message);

    course.name = req.body.name;
    res.send(course);
});

// Delete request logic as below:
// Look up the course
// Not existing , retuen 404
// 
// Delete
// 
// Return the same course 

app.delete('/api/courses/:id', (req, res) =>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send(`The course with the given ID: ${req.params.id} was not found.`);

    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course);
})

function validateCourse(course){
    const schema = {
        name : Joi.string().min(3).required()
    };
    return Joi.validate(course, schema);
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));