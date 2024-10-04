const express = require('express');
const app = express();
const indexRouter = require('./routes/index'); // Import your routes

app.set('view engine', 'ejs');


app.use('/', indexRouter); // Use the routes

const port = process.env.PORT || 3000; // Define your port

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// Export the app if needed for testing
module.exports = app;
