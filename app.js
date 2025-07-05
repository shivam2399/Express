const http = require('http');

const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log('Middleware 1');
    next()
})

app.use((req, res, next) => {
    console.log('Middleware 2');
    res.send('<h1>Hello from Express!</h1>');
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});