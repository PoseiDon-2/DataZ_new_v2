const express = require('express');
const router = express.Router();

// เส้นทางสำหรับหน้า users
router.get('/', (req, res) => {
  res.render('user', { title: 'User Page' });
});

module.exports = router;
