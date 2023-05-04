const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("Bem vindo ao meu site");
})

app.get("/dois", function(req, res){
    res.send("<h1>Segunda parte<h1>");
})

app.get("/tres", function(req, res){
    res.send("<h1>Terceira parte<h1>");
})

app.listen(2012, function(erro){
    if(erro){
        console.log("Erro ao iniciar");
    } else {
        console.log("Servidor iniciado");
    }
})
