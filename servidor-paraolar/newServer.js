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

//filtrando por patch params
app.get("/filmes/:id", (req, res) => {
    let idRequest = req.params.id
    let filmeEncontrado = filmesJson.find(filme => filme.id == idRequest)
    res.status(200).send(filmeEncontrado)
})

app.get("/series", (req, res) => {
    res.status(200).send(seriesJson)
    console.log("passando em todas as series");
})

//em json de series o id é string, usei path params e consegui filtrar por string também    
// app.get("/series/:id", (req, res) => {
//     let idRequest = req.params.id
//     let seriesEncontrado = seriesJson.find(series => series.id == idRequest)
//     res.status(200).send(seriesEncontrado)
// })

//filtrando series por query params
app.get("/seriesid", (req, res) => {
    let id = req.query.id
    let serieEncontrada = seriesJson.find(serie => serie.id == id)
    res.status(200).send(serieEncontrada)
})

app.post("/filmes/criar", (req, res) => {
    let tituloReq = req.body.Title
    let yearReq = req.body.Year
    let ratedReq = req.body.Rated
    let releasedReq = req.body.Released
    let runtimeReq = req.body.Runtime
    let genreReq = req.body.Genre
    let directorReq = req.body.Director
    let writerReq = req.body.Writer
    let actorsReq = req.body.Actors
    let plotReq = req.body.Plot
    let languageReq = req.body.Language
    let countryReq = req.body.Country
    let awardsReq = req.body.Awards

    let novoFilme = {
        id: (filmesJson.length) +1,
        title: tituloReq,
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
        awards: awardsReq
    }
    filmesJson.push(novoFilme)
    
    res.status(201).json(
        [{
            "mensagem": "filme cadastrado com sucesso",
            novoFilme
        }])
    })
    
    app.post("/series/criar", (req, res) => {
        let tituloReq = req.body.title
        let totalSeasonsReq = req.body.totalSeasons
        let genreReq = req.body.genre
        let writersReq = req.body.writers
        let posterReq = req.body.poster
        let actorsReq = req.body.actors
        let ratingsReq = req.body.ratings
        
        let novaSerie = {
            id : (seriesJson.length) +1,
            titulo : tituloReq,
            totalSeasons: totalSeasonsReq,
            genre : genreReq,
            writers : writersReq,
            poster : posterReq,
            actors : actorsReq,
            ratings : ratingsReq,
        }
        seriesJson.push(novaSerie)
        res.status(201).json(
            [{
                "mensagem": "série cadastrada com sucesso",
                novaSerie
            }])
})

//colocar o listen no fim do código
app.listen(3000, () => {
    console.log("servidor rodando na porta 3000");
})