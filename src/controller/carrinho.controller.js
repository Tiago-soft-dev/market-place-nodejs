const CarrinhoService = require("../services/carrinho.service");

const findCarrinhoByIdController = async (req, res) => {
    try{
        res.status(200).send(await CarrinhoService.findCarrinhoByIdService(req.params.id))
    }catch(err){
        res.status(500).send({message: " erro inesperado!"});
        console.log(err.message)
    }
}

const findAllCarrinhoService = async (req, res) => {
    try{
        res.status(200).send(await CarrinhoService.findAllCarrinhoService());
    }catch(err){
        res.status(500).send({message: " erro inesperado!"});
        console.log(err.message)
    }
}

const createCarrinhoService = async (body) => {
    try{
        const corpo = {
            ...req.body,
            userId: req.userId,
            creatdAt: new Date(),
        }
        res.status(201).send(await CarrinhoService.createCarrinhoService(req.params.id, corpo));
    }catch(err){
        res.status(500).send({message: " erro inesperado!"});
        console.log(err.message)
    }
}

const updateCarrinhoService = async (id, body) => {
    try{
        res.status(200).send(await CarrinhoService.updateCarrinhoService(req.params.id, req.body))
    }catch(err){
        res.status(500).send({message: " erro inesperado!"});
        console.log(err.message)
    }
}

const deleteCarrinhoService = async (req, res) =>{
    try{
        res.status(200).send(await CarrinhoService.deleteCarrinhoService(req.params.id))
    }catch(err){
        res.status(500).send({message: " erro inesperado!"});
        console.log(err.message)
    }
}

module.exports = {
    findCarrinhoByIdController,
    findAllCarrinhoService,
    createCarrinhoService,
    updateCarrinhoService,
    deleteCarrinhoService
}