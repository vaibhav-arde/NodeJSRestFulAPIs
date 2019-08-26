// Templating engines
// Most of time we give response in JSON but when we need to provide response in HTML we need templating engines
// Templating engines packages are 
    // Pug //here we will learn Pug
    // Mustache
    // EJS

    const express = require('express');
    const helmet = require('helmet');
    const morgan = require('morgan');
    const app = express();
    const Joi = require('joi');
    
    app.set('view engine', 'pug'); //express will internally load this module, we dont need to import it separately
    app.set('views', './views') //this means we should keep all templates or views inside folder views

    app.use(helmet());
    app.use(morgan('tiny'));
    // GET /api/courses 200 79 - 0.275 ms
    
    
    let courses = [
        {id : 1, name : 'course1'},
        {id : 2, name : 'course2'},
        {id : 3, name : 'course3'},
    ];
    
    // app.get('/api/courses', (req, res) => {
    //     res.send(courses);
    // });

    app.get('/api/courses', (req, res) => {
        res.render('index', {title: 'MyExpressApp', message: 'HelloFromPug'});
    });


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));