// Name: Mark Eroll D. Quiambao
// Section: WD - 303
// Class Code: 2164-6WDCSERVER

const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/',(req, res) => {
    res.render('index', {title: 'My EJS APP'});
});

app.use(express.static('public'));

app.listen(3000, () => {
    console.log('Server started on port 3000');
});