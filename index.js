const express = require("express");
const bodyParser = require('body-parser') //porcesa etcion a travez de POST lo procesaremos con bodyparser
const users = require('./routes/users');
const path = require('path');
const app = express();


//creo middleware
app.use( (req, res, next) => {
    console.log("Se ha recibido peticion");
    console.log("fecha y hora", new Date() )
    next();
}); // el next una vez que llego a este middleware con next ira a el otro middleware


app.use(bodyParser.urlencoded({extended: false}))//Va actuar en peticiones del tipo application/x-www-form-urlencoded

app.get("/", (req, res) => {
    res.send("<h1> Usuario </h1>");
}); //peticiones a localhost

app.use(users);

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
})

app.listen(3000);