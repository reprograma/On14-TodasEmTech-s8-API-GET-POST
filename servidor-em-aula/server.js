const filmesJson = require("./data/ghibli.json")
const express = require("express")
const cors = require("cors")

const app = express() //executando o express

app.use(cors())
app.use(express.json()) //esta fazendo o body parser

app.get("/", (request, response)=>{
    response.status(200).json([
        {
            "mensagem": "API de filmes Ghibli da turma On14"
        }
    ])
})

app.get("/filmes", (request, response)=>{
    response.status(200).send(filmesJson)
})

app.get("/filmes/:id", (request, response)=>{
    let idRequest = request.params.id

    let filmeEncontrado = filmesJson.find(filme => filme.id == idRequest)

    response.status(200).send(filmeEncontrado)
})

app.post("/filmes/criar", (request, response)=>{
    let tituloRequest = request.body.title
    let descricaoRequest = request.body.description

    let novoFilme = {
        id: (filmesJson.length) + 1,
        title: tituloRequest,
        description: descricaoRequest
    }

    filmesJson.push(novoFilme)

    response.status(201).json(
        [{
            "mensagem": "filme cadastrado com sucesso",
            novoFilme
        }])
})

app.listen(3030, ()=>{
    console.log("alo, pepe moreno? to na porta 3030")
})