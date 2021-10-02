const { application } = require("express");
const express = require("express");
const app = express();

app.get("/oi", (request, response) => {
    response.status(200).json(["Hello, world!"])
});

app.get("/frutas", (request, response) => {
    response.status(200).send("jaca", "banana", "mamão")
});

app.listen(8080, () => {
    console.log("meu servidor está rodando na porta 8080!")
});
