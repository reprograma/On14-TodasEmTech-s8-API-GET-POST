const express = require("express");
//chamando express
const app = express();
//inicializando o express

app.get("/oi", (req, res) => {
    console.log(req);
    res.status(200).json(["Salve, Mozinho é totozo!!"])
})

app.get("/mozao", (req, res) => {
    res.status(200).json(["atencioso","lindo","gato", "engracado","inteligente","desenrolado","comunicativo","da voz totoza","paladar sofisticado","cuidadozo","carinhoso","detalista","master chef de ovo mechido","dramatico","cheiroso", "delicia", "melhor gamer cs ever", "autoestima top", "viciado em suvaco"])
})

app.get("/", (req, res) => {
    res.status(200).json(["Salvou desgraçaaa!"])
})

app.get("/send", (req, res) => {
    res.status(200).send("oi")
})

app.listen(8080, () => {
    console.log("eita, meu servidor tá rodando na porta 8080");
}) // criando a porta com a função listen
// o linsten deve ser sempre o ultimo, pq?

