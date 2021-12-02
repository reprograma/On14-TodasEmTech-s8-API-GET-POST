const { response, request } = require("express")
const filmes = require("./data/ghibli.json")//está chamando a lista de filmes criada que esta dentro do .json, eu dei o nome de filmes
const express = require("express") // na primeira linha chamar o express
const app = express() // o app vai receber o express, é como se ele fosse executar o express
const cors = require("cors") // serve para evitar que uma requisição entre back e front nao se encontre


// app.get("/filmes",(request,response) =>{ // rota para listar filmes, uma pratica não muito boa 
//     response.status(200).json([//aqui eu to listando o json na propria tela mas nao é boa pratica
//         {
//           "id":1,
//           "title": "Castle in the Sky",
//           "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world."
//         },
//         {
//           "id":2,
//           "title": "Grave of the Fireflies",
//           "description": "In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle."
//         },
//         {
//           "id":3,
//           "title": "My Neighbor Totoro",
//           "description": "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her."
//         },
//         {
//           "id":4,
//           "title": "Kiki's Delivery Service",
//           "description": "A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service."
//         },
//         {
//           "id":5,
//           "title": "Only Yesterday",
//           "description": "It’s 1982, and Taeko is 27 years old, unmarried, and has lived her whole life in Tokyo. She decides to visit her family in the countryside, and as the train travels through the night, memories flood back of her younger years: the first immature stirrings of romance, the onset of puberty, and the frustrations of math and boys. At the station she is met by young farmer Toshio, and the encounters with him begin to reconnect her to forgotten longings. In lyrical switches between the present and the past, Taeko contemplates the arc of her life, and wonders if she has been true to the dreams of her childhood self."
//        }
//       ])
// })

app.use(cors()) // ele permite que seja feito manipulação de qualquer servidor, pois nativamente ele é proibido
app.use(express.json())//aqui vai permitir que quando for enviado um body ele vai analisar e transformar em json, seria a dependecia dentro do express instalada

app.get("/filmes", (request, response) => { // forma de listar os filmes pegando o json já criado a partir do json ghibli.json
    response.status(200).send(filmes)
})

app.post("/filmes/criar", (request, response) => {
    console.log(request.body.title)
    console.log(request.body.description)

    let tituloRequest = request.body.title
    let descricaoRequest = request.body.description
    // as informacoes do tituloRequest e descricaoRequeste estao armazenadas nesse objeto abaixo
    let novoFilme = { // ele recebe um objeto, o titulo e a descricao foram armazenadas em novoFilme
        id: (filmes.length) +1, // ele vai buscar o array de filmes, encontra a ultima posição e adiciona mais um id
        title: tituloRequest,
        description: descricaoRequest
    }

    filmes.push(novoFilme) //usei o metodo push para adicionar a ultima inserção no array que é o novoFilme
    response.status(201).json([{ "mensagem" : "Filme Cadastrado", novoFilme
}])

})



app.listen(3030, () => { // porta do servidor
    console.log("Meu Servidor funcionando na porta 3030")
})

// app.get("/filmes/:id", (request, response) => { // o que for enviado depois do /filmes ele vai entender que é id e isso vai ser usado pra pesquisa
//     console.log("O id de entrada foi : " + request.params.id)//pedir pra mostrar no console o que ta virando no parametro
//    let idRequest = request.params.id //criei uma variavel para armazenar a request do id

//    let filmeEncontrado = filmes  // criei uma variavel para armazenar o metodo find usado no filmes
//    .find( movie => movie.id == idRequest) // aui eu apelidei cada item de movie

//    response.status(200).send(filmeEncontrado)
// })

app.get("/filmes/:id", (request, response) => { // o que for enviado depois do /filmes ele vai entender que é id e isso vai ser usado pra pesquisa
    console.log("O id de entrada foi : " + request.params.id)//pedir pra mostrar no console o que ta virando no parametro
    let idRequest = request.params.id //criei uma variavel para armazenar a request do id

    let filmeEncontrado = filmes  // criei uma variavel para armazenar o metodo find usado no filmes
        .find(movie => movie.id == idRequest) // aui eu apelidei cada item de movie

    response.status(200).send(filmeEncontrado.title)
})