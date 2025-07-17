// Express app with a real-world vulnerability (CVE-2018-11646)
const express = require('express');
const app = express();

// Vulnerable: No body-parser, so req.body is undefined, but let's add a real XSS vector
app.get('/greet', (req, res) => {
    // Vulnerable to reflected XSS if user input is not sanitized
    const name = req.query.name || 'Guest';
    res.send(`<h1>Hello, ${name}</h1>`);
});

app.listen(3000, () => {
    console.log('Vulnerable app listening on port 3000');
});
