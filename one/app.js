const express = require('express')

const app = express()

app.get('/app', (req,res)=>{
    res.send('Hello world mchn')
})
app.listen(3000, ()=>{
    console.log('App runs on port 3000');
})