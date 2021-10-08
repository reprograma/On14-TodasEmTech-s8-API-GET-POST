const express = require("express");
const app = express();

app.get("/", (request, response)=>{
    response.status(200).json(["salve Mundão"])
})

app.get("/oi", (request, response)=>{
    response.status(200).json(["ola"])
})


app.listen(8080, ()=>{
    console.log("eita, meu servidor ta rodando na porta 8080")
})