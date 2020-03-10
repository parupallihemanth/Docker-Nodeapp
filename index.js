const express = require('express')
const app = express()


app.get('/', (req, res) =>{
    res.send("Welcome to docker node")
})

app.get('/login', (req, res) =>{
    res.send("welcome to docker login")
})

app.get('/logout' , (req, res) =>{
    res.send("docker logout")
})

app.listen(8000, () =>{
    console.log("App is working on port 8000 ")
})
