const express = require("express")
const app = express()

app.get('/',(req,res)=>{
    res.send('<h1>Welcome to my website</h1>')
})

app.get('/home',(req,res)=>{
    res.send('<h1>Welcome to my Home page</h1>')
})

app.listen(3000,
    console.log('server is runnig on port 3000')
)