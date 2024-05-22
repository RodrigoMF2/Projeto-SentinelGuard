const express = require('express');
const videoControllr = require('../controllers/videos_controller');
const router = express.Router();


// admin/users/create => POST
router.post('/users/create', userController.createUser);

//admin/users => GET
router.get('/users', userController.getAllUsers);

//admin/users/:id => GET
router.get('/users/:id', userController.getUserByID);

//admin/users/update/:id => PUT
router.put('/users/update/:id', userController.updateUser);

//admin/users/delete/:id => DELETE
router.delete('/users/delete/:id', userController.deleteUser);


module.exports = router;