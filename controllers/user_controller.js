const USER = require('../models/user');

exports.createUser = async(req, res) =>{
    USER.create(req.body)
    .then(user =>{
        res.status(201).json(user);
    })
    .catch(error => {
        res.status(500).json({ error: error.message });
    });
};

exports.getAllUsers = (req, res) =>{
    USER.findAll()
    .then(
        users => {
            res.status(200).json(users);
        }) 
    .catch(error => {
        res.status(500).json({ error: error.message });
    });
};

exports.getUserByID = (req,res) =>{
    USER.findByPk(req.params.id)
    .then(user =>{
        if (user){
            res.status(200).json(user)
        }else{
            res.status(404).json({message: 'User not found'});
        }
    })
    .catch(error => {
        res.status(500).json({ error: error.message });
    });
};

exports.updateUser = (req, res) =>{
    USER.update(req.body,{
        where:{id_user: req.params.id}
    }).then(([update]) =>{
        if(update){
            return USER.findByPk(req.params.id); // Corrigi a referência do modelo USER
        }else{
            res.status(404).json({message: 'User not found'})
        }
    }).then(user => {
        res.status(200).json(user);
    }).catch(error => {
        console.error('Error updating user:', error); // Adiciona log para o erro
        res.status(500).json({ error: error.message });
    });
};

exports.deleteUser = (req, res) => {
    USER.destroy({
        where: { id_user: req.params.id }
    })
    .then(deleted => {
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    })
    .catch(error => {
        res.status(500).json({ error: error.message });
    });
};