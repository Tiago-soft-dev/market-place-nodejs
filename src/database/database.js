const mongoose = require('mongoose');

function connectToDatabse() {
    mongoose.connect("mongodb://127.0.0.1:27017", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=> {
        console.log("MONGODB CONECTADO");
    }).catch((err) =>{
        return console.log(`ERRO NA CONEXÃO: ${err}`)
    })
    
}

module.exports = connectToDatabse;