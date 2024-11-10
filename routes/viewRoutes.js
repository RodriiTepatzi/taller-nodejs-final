const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/', authMiddleware, (req, res) => {
  res.redirect('/dashboard');
});


router.get('/dashboard', authMiddleware, (req, res) => {
  res.render('dashboard');
});

module.exports = router;
