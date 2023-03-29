const categoriaService = require("../services/categoria.service");


const findCategoriaByIdController = async (req, res ) =>{
    try{
        res.status(200).send(await categoriaService.findCategoriaByIdService(req.params.id));
    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({message: "Erro inexperado"});
    }
}

const findAllCategoriaController = async (req, res)=> {
    try{
        res.status(200).send(await categoriaService.findAllCategoriaService(req.params.id));
    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({message: "Erro inexperado"});
    }


}

const createCategoriaController = async (req, res) =>{
    try{
        const corpo = {
            ...req.body,
            createdAt: new Date(),
        }
        res.status(201).send(await categoriaService.createCategoriaService(corpo));
    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({message: "Erro inexperado"});
    }
}

const updateCategoriaController = async (req, res) =>{
    try{
        res.status(200).send(await categoriaService.updateCategoriaService(req.params.id, req.body));
    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({message: "Erro inexperado"});
    }
}

const deleteCategoriaController = async (req, res)=>{
    try{
        res.status(200).send(await categoriaService.deleteCategoriaService(req.params.id));
    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({message: "Erro inexperado"});
    }
}

module.exports = {
    findAllCategoriaController,
    findCategoriaByIdController,
    createCategoriaController,
    updateCategoriaController,
    deleteCategoriaController
}