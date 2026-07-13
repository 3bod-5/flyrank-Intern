const express = require("express")
const app = express()

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Welcome to my website"
    });
});

app.get('/home', (req, res) => {
    res.status(200).json({
        message: "Welcome to my home page"
    });
});

app.listen(3000,
    console.log('server is runnig on port 3000')
)