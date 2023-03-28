const mongoose = require('mongoose');

function connectToDatabse() {
    mongoose.connect(process.env.URLDATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=> {
        console.log("MONGODB CONECTADO");
    }).catch((err) =>{
        return console.log(`ERRO NA CONEXÃO: ${err}`)
    })
    
}

module.exports = connectToDatabse;