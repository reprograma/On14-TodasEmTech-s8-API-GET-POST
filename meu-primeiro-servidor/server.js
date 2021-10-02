const express = require("express");
const app = express();

//configurando a rota
app.get("/oi", (request, response) => {
    response.status(200).json(["Dale, mundão!"])
})

app.get("/frutas", (request, response)=>{
    response.status(200).json(["abacaxi", "banana", "morango"])

})

app.listen(8081, ()=>{
    console.log("eita, meu servidor veio ai na porta 8081")
})