const express=require("express");

const router = express.Router();

const usuarioController=require('../controller/usuario.controller');

router.get('/findById/:id', usuarioController.findUserByIdController);
router.get('findAll', usuarioController.findAllUsersController);

router.post('/create', usuarioController.createUserController);
router.post('/addAdress/:id', usuarioController.addUserAdressController);
router.post('/addFavProduct/:id', usuarioController.addUserFavProduct);


router.put('update/:id', usuarioController.updateUserController);

router.delete('/remove/:id', usuarioController.deleteUserController);
router.detlete('/removeAdress', usuarioController.removeUserAdressController);
router.delete('/removeFavProduct', usuarioController.removeUserFavProduct);


module.exports = router;