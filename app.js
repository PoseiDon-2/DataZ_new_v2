const express = require('express');
const path = require('path');
const app = express();

// ตั้งค่า view engine เป็น EJS (หรืออื่นๆ เช่น Pug, Handlebars)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// ใช้ Routes
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

app.use('/', indexRouter); // ใช้เส้นทางจาก index.js
app.use('/users', usersRouter); // ใช้เส้นทางจาก users.js

// เริ่มเซิร์ฟเวอร์
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
