const produtoService=require('../services/produto.service');

const findProductByIdController = async (req, res) =>{
    try{
        res.send(await produtoService.findProductByIdService(req.params.id));

}catch(err){
            console.log(`erro: ${err.message}`)
    return res.status(500).send({message:"Erro inexperado"});
}
}

const findAllProductsController = async (req, res) =>{
    try{
        res.send(await produtoService.findAllProductsService());

}catch(err){
            console.log(`erro: ${err.message}`)
    return res.status(500).send({message:"Erro inexperado"});
}
}

const createProductController = async (req, res) =>{
    try{
        const corpo = {
            ...req.body,
            userId: req.userId,
            createdAt: new Date();
        }
        res.send(await produtoService.createProductService(corpo));


}catch(err){
            console.log(`erro: ${err.message}`)
    return res.status(500).send({message:"Erro inexperado"});
}
}


const updateProductController = async (req, res) =>{
    try{
        res.send(await produtoService.updateProductService(req.params.id, req.body));
}catch(err){
            console.log(`erro: ${err.message}`)
    return res.status(500).send({message:"Erro inexperado"});
}
}

const deleteProductController = async (req, res) =>{
    try{
        res.send(await produtoService.deleteProductService(req.params.id));
}catch(err){
            console.log(`erro: ${err.message}`)
    return res.status(500).send({message:"Erro inexperado"});
}
}

module.exports = {
    findProductByIdController,
    findAllProductsController,
    updateProductController,
    createProductController,
    deleteProductController
}