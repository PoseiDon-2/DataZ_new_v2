const express = require('express');
const app = express();
const indexRouter = require('./routes/index'); // Import your routes

app.set('view engine', 'ejs');



const mongoose = require('mongoose');

// ใช้ Connection string จาก MongoDB Atlas
const uri = "mongodb+srv://suriyabarisi:<Suriya_110920>@cluster0.yhgme.mongodb.net/";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB Atlas');
})
.catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
});






app.use('/', indexRouter); // Use the routes

const port = process.env.PORT || 3000; // Define your port

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// Export the app if needed for testing
module.exports = app;
