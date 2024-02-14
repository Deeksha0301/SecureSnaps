// routes/upload.js

const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');

router.get('/dashboard', (req, res) => {
  // In a real-world scenario, implement proper authentication and authorization
  const files = fs.readdirSync('./public/uploads/');
  res.render('dashboard', { user: req.session.user, files: files });
});

router.post('/upload', (req, res) => {
  // In a real-world scenario, implement proper authentication and authorization
  const upload = multer({ dest: './public/uploads/' }).single('image');
  upload(req, res, (err) => {
    if (err) {
      return res.status(400).send('Error uploading file.');
    }
    res.redirect('/upload/dashboard');
  });
});

module.exports = router;
