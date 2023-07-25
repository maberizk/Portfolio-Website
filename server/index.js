
const port = process.env.PORT || 3000;
const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the build directory
app.use(express.static(path.join(__dirname, '..', "public")));

app.use("/", require("./home"));

// Catch-all route to serve index.html
app.get('*', (req, res) => {
    console.log("get index.html")
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Start the server
app.listen(port, () => {
    console.log(`listening on port ${port}`)
});

module.exports = app;