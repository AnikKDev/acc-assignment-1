const express = require('express')
const app = express()
const cors = require("cors");
const port = process.env.PORT || 5000;
const userRoute = require('./routes/user.route');
const fs = require("fs");
app.use(express.json());
app.use(cors());

app.use('/user', userRoute)

// app.get('/user', userRoute)



app.get('/', (req, res) => {
    res.send('This is Home')
})

app.all('*', (req, res) => {
    res.send("No route found")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})