const findUserByIdController = async (req, res) => {
    try{






    }catch(err){
                console.log(`erro: ${err.message}`)
        return res.status(500).send({message:"Erro inexperado"});
    }
}

const findAllUsersController = async (req,res) => {
    try{






    }catch(err){
                console.log(`erro: ${err.message}`)
        return res.status(500).send({message:"Erro inexperado"});
    }
};


const createUserController = async (req, res) => {
    try{






    }catch(err){
                console.log(`erro: ${err.message}`)
        return res.status(500).send({message:"Erro inexperado"});
    }
};


const updateUserController = async (req, res) =>{
    try{






    }catch(err){
                console.log(`erro: ${err.message}`)
        return res.status(500).send({message:"Erro inexperado"});
    }
};



const deleteUserController = async (req, res) => {
    try{






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
    deleteUserController,
    addUserAdressController,
    removeUserAdressController,
    addUserFavProductController,
    removeUserFavProductController,
}