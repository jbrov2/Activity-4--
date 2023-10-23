require('dotenv').config()
const express = require('express')
const app = express()


app.get('/',(req,res) => {
    res.send('Hello World')
})


//Wild card page make always ensure it ends up on the bottom.
app.get('*',(req,res) =>{
    res.status.send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT)