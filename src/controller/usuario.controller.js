const userService = require("../services/usuario.service");



const findUserByIdController = async (req, res) => {
    try{


        const user = await userService.findUserByIdService(req.params.id);

        if (!user){
            return res.status(404).send({message: " Usuario nao encontrado"});
        }

        return res.status(200).send(user);

    }catch(err){
        if(err.kind == "ObjectId"){
            console.log(err.kind == "ObjectId");
            return res.status(400).send({message:"ID informado está incorreto, tente nnovamente"});
        }
                console.log(`erro: ${err.message}`)
        return res.status(500).send({message:"Erro inexperado"});
    }
}

const findAllUsersController = async (req,res) => {
    try{
            res.status(200).send(await userService.findAllUsersService());

    }catch(err){
                console.log(`erro: ${err.message}`)
        return res.status(500).send({message:"Erro inexperado"});
    }
};


const createUserController = async (req, res) => {
    try{
        const body = req.body;
        if(!body.nome){
            return res.status(400).send({message:"Campo NOME precisa ser preenchido"});
        }   

        return res.status(201).send(await userService.createUserService(body));

    }catch(err){
                console.log(`erro: ${err.message}`)
        return res.status(500).send({message:"Erro inexperado"});
    }
};


const updateUserController = async (req, res) =>{
    try{ 
        const body = req.body;
        if(!body.nome){
            return res.status(400).send({message:"Campo NOME precisa ser preenchido"});
        }
        return res.send(await userService.updateUserService(req.params.id, body));


    }catch(err){
                console.log(`erro: ${err.message}`)
        return res.status(500).send({message:"Erro inexperado"});
    }
};



const removeUserController = async (req, res) => {
    try{
        const deletedUser = await userService.removeUserService(req.params.id);
        console.log(deletedUser);
       
        if(deletedUser == null) {
            res.status(404).send({message:"Usuario nao encontrado"});
        } else {
            res.status(200).send({message: `Sucesso, usuário deletado`});
        }



    }catch(err){
                console.log(`erro: ${err.message}`)
        return res.status(500).send({message:"Erro inexperado"});
    }
    
};

const addUserAdressController = async (req, res) => {
    try{






    }catch(err){
                console.log(`erro: ${err.message}`)
        return res.status(500).send({message:"Erro inexperado"});
    }
};

const removeUserAdressController = async (req, res) => {
    try{






    }catch(err){
                console.log(`erro: ${err.message}`)
        return res.status(500).send({message:"Erro inexperado"});
    }
};

const addUserFavProductController = async (req, res) => {
    try{






    }catch(err){
                console.log(`erro: ${err.message}`)
        return res.status(500).send({message:"Erro inexperado"});
    }
};

const removeUserFavProductController = async (req, res) => {
    try{






    }catch(err){
                console.log(`erro: ${err.message}`)
        return res.status(500).send({message:"Erro inexperado"});
    }
};



module.exports = {
    findUserByIdController,
    findAllUsersController,
    createUserController,
    updateUserController,
    removeUserController,
    addUserAdressController,
    removeUserAdressController,
    addUserFavProductController,
    removeUserFavProductController,
}