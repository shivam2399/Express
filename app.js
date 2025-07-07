const express = require('express');
const app = express();
const port = 3000

app.use(express.json());

app.get('/orders', (req, res) => {
    res.send('Here is the list of all orders');
})

app.post('/orders', (req, res) => {
    res.send('A new order has been created');
})

app.get('/users', (req, res) => {
    res.send('Here is the list of all users');
})

app.post('/users', (req, res) => {
    res.send('A new user has been created');
})



app.listen(3000, () => {
    console.log(`Server is up and running on port ${port}!.`);
});