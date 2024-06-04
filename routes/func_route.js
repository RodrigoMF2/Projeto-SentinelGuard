const express = require('express');
const funcController = require('../controllers/func_controller');
const router = express.Router();

router.post('/func',funcController.createfunc);


router.get('/all_func', funcController.getAllFunc);


router.get('/func/:id', funcController.getfuncByid);


//Essa rota é para procurar um utilizador atraves de algoritmos de reconhecimento facial, o que não sera 
//implementado neste exata momento
router.get('/func/image', funcController.getfuncBy_IMG_FACE);


router.put('/update_func/:id',funcController.updateFunc);


router.delete('/delete_funcionario/:id',funcController.deleteFunc);


module.exports = router;
