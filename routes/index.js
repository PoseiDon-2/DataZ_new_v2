const express = require('express');
const router = express.Router();

// เส้นทางสำหรับหน้าแรก
router.get('/', (req, res) => {
  res.render('index', { title: 'Home Page' });
});

module.exports = router;
