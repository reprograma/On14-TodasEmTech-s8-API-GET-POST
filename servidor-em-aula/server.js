//AULA DA TARDE
//fazendo get e post:
// VAMOS CADASTRAR UM NOVO FILME NA GHIBLI:


//chamando a variavel "filmes" para o caminho do dado 
//criando a função:
const filmesJson = require("./data/ghibli.json")
const express = require("express") //req o ex
const cors = require("cors") 

const app = express() //o exp fora do parametro está exec uma funç(express)

app.use(cors())
app.use(express.json()) //esta fazendo o body parser

/*1° consultar uma lista dos filmes da ghibli por titulo, id e a lista completa:*/
// exemplo 
app.get("/", (request, response)=>{
    
    response.status(200).json([
        {
            "mensagem": "API de filmes Ghibli da turma On14" //o get retorna essa mensagem
        }
])

}),
//1° - listando todos os filmes:
app.get("/filmes", (request, response)=>{
response.status(200).send(filmesJson) //send = enviar, dentro do parametro chamar a var "filmes"
})

//2° retorno de erro caso o nome do filme for digitado errado.

app.get("/filmes/:id", (request, response)=>{
let idRequest = request.params.id

let filmeEncontrado = filmesJson.find(filme => filme.id == idRequest)

response.status(200).send(filmeEncontrado)
})

/*conceito de parametro: Path params - são enviados direto na rota
Query params - são adicionados na rota através de chave e avlores*/


//3° Cadstrar um novo filme - fazendo o Post - Create(criar):

app.post("/filmes/criar", (request, response)=>{
    let tituloRequest = request.body.title
    let descricaoRequest = request.body.description

    //criando um novo objeto de filme
    
    let novoFilme = {
        id: (filmesJson.length) + 1, // tamanho do Json + 1. //o +1 add item novo
        title: tituloRequest,
        description: descricaoRequest
    }

    filmesJson.push(novoFilme)
    response.status(201).json(
        [{
            "mensagem": "filme cadastrado",
            novoFilme
    }])
})

app.listen(3030, ()=>{
console.log("Alô, pepe moreno? to na porta 3030!")
})

//FIM






