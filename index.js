const express = require('express');
const connectToDatabse = require("./src/database/database");

const app = express();
const port = 3000;
app.use(express.json());

connectToDatabse();


app.get('/', (req, res) =>{
    res.send({message:"bem vindo ao nosso market-place"})
})

app.listen(port, ()=>{
    console.log(`servidor rodando em http://127.0.0.1:${port}`);
})