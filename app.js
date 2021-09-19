const express = require('express')
const app = express()
const path = require('path')
app.use(express.static('public'))
app.get('/',(req,res) => {
    res.sendFile(path.resolve(__dirname,'./public/index.html'))
})
app.all("*",(req,res) => {
    res.status(404).send("Error 404 Not Found...")
})
app.listen(80)