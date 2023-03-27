const express=require("express");

const router = express.Router();

const usuarioController=require('../controller/usuario.controller');


const authMiddleware = require("../middleware/auth.middleware");

//rotas get
router.get('/findById/:id',authMiddleware, usuarioController.findUserByIdController);
router.get('/findAll', usuarioController.findAllUsersController);

//rotas post
router.post('/create', usuarioController.createUserController);
router.post('/addAdress/:id', usuarioController.addUserAdressController);
router.post('/addFavProduct/:id', usuarioController.addUserFavProductController);

//rotas put
router.put('update/:id', usuarioController.updateUserController);

//rotas delete
router.delete('/remove/:id', usuarioController.removeUserController);
router.delete('/removeAdress', usuarioController.removeUserAdressController);
router.delete('/removeFavProduct', usuarioController.removeUserFavProductController);


module.exports = router;