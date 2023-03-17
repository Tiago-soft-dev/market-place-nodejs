const Usuario = require('../model/Usuario');


const findUserByIdService = (id) =>{
    return Usuario.findById(id);

};

const findAllUsersService = () =>{
    return Usuario.find();
};

const createUserService = (body) =>{
    return Usuario.create(body);
};

const updateUserService = (id, body) =>{
    return Usuario.findByIdAndUpdate(id, body, {returnDocument: "after"});
};

const removeUserService = (id) =>{
    return Usuario.findByIdAndRemove(id);
};

const addUserAddressService = (id, endereco) =>{

};

const removeUserAddressService = (id) => {
    
};

const addUserFavProductUserService = (id, produto) => {

};

const removeUserFavProductUserService = (produto) => {

};

module.exports = {
    findAllUsersService,
    findUserByIdService,
    createUserService,
    updateUserService,
    addUserAddressService,
    removeUserService,
    removeUserAddressService,
    addUserFavProductUserService,
    removeUserFavProductUserService


}