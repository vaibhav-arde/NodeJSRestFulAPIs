const express = require('express');
const app = express();
const Joi = require('joi');

app.use(express.json());

let courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'},
];

app.get('/api/courses', (req, res) =>{
    res.send(courses);
});

app.post('/api/courses', (req, res) => {
    if(!req.body.name || req.body.name.length <3){
        // 400 Bad request
        res.status(400).send(`Name is required and should be minimum 3 characters.`);
        return;
    }
    const course = {
        id : courses.length + 1,
        name : `${req.body.name}${courses.length + 1}`
    };
    courses.push(course);
    res.send(course);
});

app.post('/api/joiCourses', (req, res) => {
    const schema = {
        name: Joi.string().min(3).required()
    };

    const result = Joi.validate(req.body, schema);
    console.log(result);

    if(result.error){
        // 400 Bad request
        res.status(400).send(result.error.details[0].message);
        return;
    }
    const course = {
        id : courses.length + 1,
        name : `${req.body.name}${courses.length + 1}`
    };
    courses.push(course);
    res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));


// npm i joi