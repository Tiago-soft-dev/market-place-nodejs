const express = require('express');
require("dotenv.config").config();
const connectToDatabse = require("./src/database/database"); //conexao com o banco
const usuario = require('./src/routes/usuario.router'); // rota do usuario
const auth = require('./src/routes/auth.router');
const produto = require("./src/routes/produto.router") //arquivo de rota de produto
const categoria = require("./src/routes/categoria.router") //arquivo de rota de categoria


const app = express();
const port = 3000;
app.use(express.json());




connectToDatabse(); //conecta ao banco

app.use("/usuario", usuario); //chama as rotas do usuario
app.use("/auth", auth);
app.use("/produto", produto);
app.use("/categoria", categoria); //chama as rotas de categoria



app.get('/', (req, res) =>{
    res.send({message:"bem vindo ao nosso market-place"})
})

app.listen(port, ()=>{
    console.log(`servidor rodando em http://127.0.0.1:${port}`);
})