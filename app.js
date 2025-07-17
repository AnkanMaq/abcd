// Express app with XSS vulnerability fixed
const express = require('express');
const app = express();
const xss = require('xss');

app.get('/greet', (req, res) => {
    // Sanitize user input to prevent XSS
    const name = xss(req.query.name || 'Guest');
    res.send(`<h1>Hello, ${name}</h1>`);
});

app.listen(3000, () => {
    console.log('Secure app listening on port 3000');
});
