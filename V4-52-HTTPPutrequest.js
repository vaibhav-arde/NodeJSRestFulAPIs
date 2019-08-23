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
    if(!course) res.status(404).send(`The course with the given ID: ${req.params.id} was not found.`);
    res.send(course);
})

// Logic of PUT is as below:
// Look up the course
// If not existing, return 404

// Validate
// If invalid, return 400 - Bad request

// Update course
// Return the updated course

app.put('/api/courses/:id', (req,res) =>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send(`The course with the given ID: ${req.params.id} was not found.`);

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
    if(error){
        res.status(400).send(error.details[0].message);
        return;
    }

    course.name = req.body.name;
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