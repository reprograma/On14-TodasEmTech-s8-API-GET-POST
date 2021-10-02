const { response, request } = require("express")
const filmes = require("./filmes.json")//está chamando a lista de filmes criada que esta dentro do .json, eu dei o nome de filmes
const series = require("./series.json")
const express = require("express") // na primeira linha chamar o express
const app = express() // o app vai receber o express, é como se ele fosse executar o express
const cors = require("cors") // serve para evitar que uma requisição entre back e front nao se encontre
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");


// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "ReprogramaFlix API",
      description: "API com filmes e series",
      contact: {
        name: "Ana Carolliny"
      },
      servers: ["http://localhost:3031"]
    }
  },
  // ['.routes/*.js']
  apis: ["server.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(cors()) // ele permite que seja feito manipulação de qualquer servidor, pois nativamente ele é proibido
app.use(express.json())//aqui vai permitir que quando for enviado um body ele vai analisar e transformar em json, seria a dependecia dentro do express instalada


// Routes
/**
 * @swagger
 * /filmes:
 *  get:
 *    description: Use para listar todos os filmes
 *    responses:
 *      '200':
 *        description: Essa é a lista de todos os filmes
 */
   
app.get("/filmes", (request, response) => { // forma de listar os filmes pegando o json já criado a partir do json ghibli.json
    response.status(200).send(filmes)
})

/**
 * @swagger
 * /series:
 *  get:
 *    description: Use para listar todos as series
 *    responses:
 *      '200':
 *        description: Essa é a lista de todas as series
 */
app.get("/series", (request, response) => { // forma de listar os filmes pegando o json já criado a partir do json ghibli.json
    response.status(200).send(series)
})

/**
 * @swagger
 * /filmeseseries:
 *  get:
 *    description: Use para listar todos as series e filmes
 *    responses:
 *      '200':
 *        description: Essa é a lista de todas as series e filmes
 */
app.get("/filmeseseries", (request, response)=>{
    response.status(200).send([filmes, series])
    
})


/**
 * @swagger
 * /filmes/criar:
 *    post:
 *      description: Use para adicionar um filme a lista
 *    parameters:
 *      - name: customer
 *        in: query
 *        description: Name of our customer
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '201':
 *        description: Adicionado com sucesso
 */
app.post("/filmes/criar", (request, response) => {
    console.log(request.body.title)
    

    let tituloRequest = request.body.title
    // as informacoes do tituloRequest e descricaoRequeste estao armazenadas nesse objeto abaixo
    let novoFilme = { // ele recebe um objeto, o titulo e a descricao foram armazenadas em novoFilme
        id: (filmes.length) +1, // ele vai buscar o array de filmes, encontra a ultima posição e adiciona mais um id
        title: tituloRequest
       
    }

    filmes.push(novoFilme) //usei o metodo push para adicionar a ultima inserção no array que é o novoFilme
    
    response.status(201).json([{ "mensagem" : "Filme Cadastrado", novoFilme
}])

})





app.listen(3031, () => { // porta do servidor
    console.log("Meu ServidorNetflix funcionando na porta 3031")
})

