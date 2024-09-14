const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); 

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

let users = [
  { id: 1, name: 'Carmela', email: 'mela@gmail.com', age: 25, salary: 25000 },
  { id: 2, name: 'Joseph', email: 'joe@yahoo.com', age: 30, salary: 45000 },
  { id: 3, name: 'James', email: 'james@msn.com', age: 35, salary: 30000 },
  { id: 4, name: 'John', email: 'john@gmail.com', age: 40, salary: 25000 },
  { id: 5, name: 'Frank', email: 'frank@yahoo.com', age: 45, salary: 45000 },
  { id: 6, name: 'Alex', email: 'alex@msn.com', age: 21, salary: 33000 }
];

app.get('/api/add-user', (req, res) => {
  res.sendFile(path.join(__dirname, 'add-user.html'));
});

app.get('/', (req, res) => {
  res.send({
    message: 'Welcome to the RESTful API',
    routes: {
      'GET /api/users': 'Fetch all users',
      'GET /api/users/:id': 'Fetch a user by ID',
      'POST /api/users': 'Add a new user',
      'DELETE /api/users/:id': 'Delete a user by ID',
      'GET /api/add-user': 'HTML form to add a user'
    }
  });
});

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.get('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);
  
  if (user) {
    res.json(user);
  } else {
    res.status(404).send({ message: 'User not found' });
  }
});

app.post('/api/users', (req, res) => {
  const newUser = {
    id: users.length + 1, 
    name: req.body.name,
    age: req.body.age,
    email: req.body.email, 
    salary: req.body.salary 
  };

  users.push(newUser);
  res.send(`
    <p>New user added successfully!</p>
    <p>Total users: ${users.length}</p>
    <a href="/api/add-user">Add another user</a>
  `);
});

app.delete('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const userIndex = users.findIndex(u => u.id === id);

  if (userIndex !== -1) {
    const deletedUser = users.splice(userIndex, 1);
    res.json({ message: 'User deleted', user: deletedUser[0] });
  } else {
    res.status(404).send({ message: 'User not found' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
