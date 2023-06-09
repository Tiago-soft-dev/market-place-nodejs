const Categoria = require("../model/categoria");


const findCategoriaByIdService = (id) =>{
    return Categoria.findById(id);
}

const findAllCategoriaService = ()=> {
    return Categoria.find();


}

const createCategoriaService = (body) =>{
    return Categoria.create(body);

}

const updateCategoriaService = (id, body) =>{
    return Categoria.findByIdAndUpdate(id, body, {returnDocument: "after"});
}

const deleteCategoriaService = (id)=>{
    return Categoria.findByIdAndRemove(id);
}

module.exports = {
    findAllCategoriaService,
    findCategoriaByIdService,
    updateCategoriaService,
    createCategoriaService,
    deleteCategoriaService
}