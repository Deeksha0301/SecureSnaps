// routes/auth.js

const express = require('express');
const router = express.Router();

// Mock user data (replace with database logic in a real app)
const users = [
  { username: 'user1', password: 'pass1' },
  { username: 'user2', password: 'pass2' },
];

router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if the entered credentials match any user (mock validation)
  const user = users.find((user) => user.username === username && user.password === password);

  if (user) {
    req.session.user = user;
    res.redirect('/upload/dashboard');
  } else {
    res.redirect('/auth/login');
  }
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.post('/signup', (req, res) => {
  const { username, password } = req.body;

  // Check if the username is already taken (mock validation)
  const isUsernameTaken = users.some((user) => user.username === username);

  if (isUsernameTaken) {
    res.redirect('/auth/signup'); // Redirect to signup page with an error message
  } else {
    // Mock registration (replace with database registration logic)
    const newUser = { username, password };
    users.push(newUser);
    req.session.user = newUser;
    res.redirect('/upload/dashboard');
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    res.redirect('/auth/login');
  });
});

module.exports = router;
