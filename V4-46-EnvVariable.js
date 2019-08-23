const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`Hello World`);
});

app.get('/api/courses', (req, res) =>{
    res.send([1, 2, 3]);
});

// app.listen(2000, () => console.log(`Listening on the port 2000...`));

// we can set PORT value as => export PORT=5000
// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on the port ${port}...`));

// export PORT=5000
// nodemon V4-46-EnvVariable.js