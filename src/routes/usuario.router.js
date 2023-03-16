const express=require("express");

const router = express.Router();

const usuarioController=require('../controller/usuario.controller');

router.get('/findById/:id');
router.get('findAll');

router.post('/creste');
router.post('/addAdress/:id');
router.post('/addFavProduct/:id');


router.put('update/:id');

router.delete('/remove/:id');
router.detlete('/removeAdress');
router.delete('/removeFavProduct');


module.exports = router;