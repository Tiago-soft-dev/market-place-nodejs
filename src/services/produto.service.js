const Produto = require("../model/produto");

const findProductByIdService = (id) =>{
    return Produto.findById(id);
}

const findAllProductsService = () =>{
    return Produto.find();
}


const createProductService =   (body) =>{
    return Produto.create(body);
}

const updateProductService =   (id, body) =>{
    return Produto.findByIdAndUpdate(id, body, {returnDocument: "after"});
}

const deleteProductService =   (id) =>{
    return Produto.findByIdAndRemove(id);
}

const addCategoriaProdutoService = (id, categoria) => {
    return Produto.findOneAndUpdate({
        _id: id
    },
    {
        $push: {
            categoria: {
                _id: categoria._id,
                createdAt: categoria.createdAt
            },
        },
    },
    {
        rawResult: true,
    }
    
    );
}

const removeCategoriaProdutoService = (categoria) => {
    return Produto.findOneAndUpdate({
        _id:  id,
    },
    {
        $pull: {
            categoria: {
                _id: categoria._id,
            },
        },
    },
    {
        rawResult: true,
    },

    );
}



module.exports = {
    findProductByIdService,
    findAllProductsService,
    updateProductService,
    deleteProductService,
    createProductService,
    addCategoriaProdutoService,
    removeCategoriaProdutoService
}