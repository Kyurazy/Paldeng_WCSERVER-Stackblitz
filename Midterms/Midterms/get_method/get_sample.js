// Paldeng, Carl Lester P.
// WD - 303
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World! | Hello Carl from WD - 303!');
});

app.get('/user', (req, res) => {
    const userID = req.query.id;
    res.send(`User ID is ${userID}`);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});