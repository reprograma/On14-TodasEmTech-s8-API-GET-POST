const filmesJson = require("./data/filmes.json")
const seriesJson = require("./data/series.json")
const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).json([
        {
            "mensagem": "API de filmes e series da Atividades para o lar da turma On14"
        }
    ])
})

app.get("/todos", (req, res) => {
    res.status(200).json(
        [{
            filmesJson, seriesJson
        }])
    })
    
    app.get("/filmes", (req, res) => {
        res.status(200).send(filmesJson)
    })
    
    app.get("/filmes/:id", (req, res) => {
        let idRequest = req.params.id
        let filmeEncontrado = filmesJson.find(filme => filme.id == idRequest)
        res.status(200).send(filmeEncontrado)
    })
    
    app.get("/series", (req, res) => {
        res.status(200).send(seriesJson)
    })
    
    app.get("/series/:id", (req, res) => {
        let idRequest = req.params.id
        let seriesEncontrado = seriesJson.find(series => series.id == idRequest)
        res.status(200).send(seriesEncontrado)
    })
    
    app.post("/filmes/criar", (req, res) => {
        let tituloReq = req.body.title
        let descricaoReq = req.body.description
        let yearReq = req.body.year
        let ratedReq = req.body.rated
        let releasedReq = req.body.released
        let runtimeReq = req.body.runtime
        let genreReq = req.body.genre
        let directorReq = req.body.director
        let writerReq = req.body.writer
        let actorsReq = req.body.actors
        let plotReq = req.body.plot
        let languageReq = req.body.language
        let countryReq = req.body.country
        let awardsReq = req.body.awards
        
        let novoFilme = {
            id: (filmesJson.length) + 1,
            title: tituloReq,
            description: descricaoReq,
            year: yearReq,
            rated: ratedReq,
            released: releasedReq,
            runtime: runtimeReq,
            genre: genreReq,
            director: directorReq,
            writer: writerReq,
            actors: actorsReq,
            plot: plotReq,
            language: languageReq,
            country: countryReq,
            awards: awardsReq,
        }
        filmesJson.push(novoFilme)
        
        res.status(201).json(
            [{
                "mensagem": "filme cadastrado com sucesso",
                novoFilme
            }])
        })
        
        //no fim do código
        app.listen(3000, () => {
            console.log("servidor rodando na porta 3000");
        })