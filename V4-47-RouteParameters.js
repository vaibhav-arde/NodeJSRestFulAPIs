const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Route Parameters');
});

// req.params.id
app.get('/api/courses/:id', (req, res) =>{
    res.send(req.params.id);
});
// http://localhost:5000/api/courses/12345

//req.params
app.get('/api/posts/:year/:month', (req,res) =>{
    res.send(req.params);
});
// http://localhost:5000/api/posts/2019/7
// {
//     "year": "2019",
//     "month": "7"
//     }

// query string parameter is as below: it is for optional
// http://localhost:5000/api/posts/2019/7/1?sortBy=name
//req.query
app.get('/api/posts/:year/:month/:day', (req,res) =>{
    res.send(req.query);
});
// {
// "sortBy": "name"
// }

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
