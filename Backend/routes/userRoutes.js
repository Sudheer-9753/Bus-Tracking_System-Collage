const express = require('express');
const router = express.Router();

// Mock user data, replace this with your model and database logic
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
];

// Get all users
router.get('/', (req, res) => {
  res.json(users);
});

// Register new user
router.post('/register', (req, res) => {
  const { name, email } = req.body;
  if (name && email) {
    const newUser = { id: users.length + 1, name, email };
    users.push(newUser);
    res.status(201).json(newUser);
  } else {
    res.status(400).json({ message: 'Name and Email are required' });
  }
});

// Get user by ID
router.get('/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

module.exports = router;
