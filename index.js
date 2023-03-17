const express = require('express');
const connectToDatabse = require("./src/database/database"); //conexao com o banco
const usuario = require('./src/routes/usuario.router'); // rota do usuario

const app = express();
const port = 3000;
app.use(express.json());




connectToDatabse(); //conecta ao banco

app.use("/usuario", usuario); //chama as rotas do usuario


app.get('/', (req, res) =>{
    res.send({message:"bem vindo ao nosso market-place"})
})

app.listen(port, ()=>{
    console.log(`servidor rodando em http://127.0.0.1:${port}`);
})