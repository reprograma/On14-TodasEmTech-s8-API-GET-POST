//AULA: API - GET & POST
/*O Node.JS tem dois pacotes gerenciadores de projetos: npm install e yarn.
/*obs: criar um arquivo na raiz do projeto que vise ignorar o node_modules.
No próprio git colocar: touch .gitignore.*/

//iniciando uma variavel 
const express = require("express"); //requeri uma express
//a variavel app vai receber a express para executar.
const app = express(); //ativando a minha express



//Criando a minha porta pelo metodo GET:
//Get - função de leitura
    
//segundo exemplo abaixo - criando outra rota:
 app.get("/frutas", (request, response)=>{
     response.status(200).json(["jaca", "abacaxi", "banana", "morango", "melancia"])
 })

 //terceiro exemplo abaixo - criando outra rota:
app.get("/", (request, response)=>{
    response.status(200).json(["salve, mundão"])
}) 

//quarto exemplo: 
app.get("/oi", (request, response)=>{ //toda rota/recurso terá uma request e response.
response.status(200).send("oi") //usar o send ou json
/*se for usar o json colocar a estrutura ([""]), o send é só ("")*/
})


//antes de criar uma rota, é preciso criar uma porta.
//usando a função listen do express, para criar a porta do servidor.
app.listen(8080, () =>{ 
    console.log("eita, meu servidor ta rodando na porta 8080") //essa msg é p aparecer no console
})

// AULA DA TARDE
//fazendo get e post:
// VAMOS CADASTRAR UM NOVO FILME NA GHIBLI:



























/* Anotações: 
o app vai executar a função express fora dos parametros. - 
*get - metodo e função de leitura - o "oi" é a configuração da rota - 
ex: http://localhost:8080/oi */
//os (200 é um status que representa (ok))
//a rota vai receber uma request e vai enviar uma response. - //criando outra rota
//o get conf uma rota -  //criando outra rota
//o get conf uma rota

//conf uma rota

/*todo servidor tem a porta exata, essa é 8080 ( chutamos numeros altos) - 
    usamos a função de listem para conf o servidor */