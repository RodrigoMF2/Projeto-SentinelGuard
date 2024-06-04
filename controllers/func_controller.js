const funcionario = require('../models/funcionarios');

exports.createfunc = (req, res, next) =>{
    const { first_name, last_name, tipo_funcionario } = req.body;
    const image_face_funcionario = req.body;

    funcionario.create({ 
        first_name, 
        last_name, 
        tipo_funcionario, 
        image_face_funcionario })
    .then(func =>{
        res.status(201).json(func);
    })
    .catch(error => {
        res.status(500).json({error: error.message})
    })
}

exports.getAllFunc = (req, res, next) =>{
    funcionario.findAll()
    .then(
        func => {
            res.status(200).json(func);
        }) 
    .catch(error => {
        res.status(500).json({ error: error.message });
    });
}

exports.getfuncByid  = (req,res) =>{
    funcionario.findByPk(req.params.id)
    .then(func =>{
        if (func){
            res.status(200).json(func)
        }else{
            res.status(404).json({message: 'Funcionario nao encontrado'});
        }
    })
    .catch(error => {
        res.status(500).json({ error: error.message });
    });
};

exports.getfuncBy_IMG_FACE = (req, res, next) =>{
    const image_face_funcionario = req.body;

    if(!image_face_funcionario) {
        return res.status(400).json({error: 'A imagem facial é necessária'});   
    }
    funcionario.findOne({ where: {image_face_funcionario}})
    .then(func =>{
        if(func) {
            res.status(200).json(func);
        }else {
            res.status(404).json({ message: 'Funcionario não encontrado' });
        }
    })
    .catch(error => {
        res.status(500).json({ error: error.message });
    })
}

exports.updateFunc = (req, res) =>{
    funcionario.update(req.body,{
        where:{id_funcionario: req.params.id}
    }).then(([update]) =>{
        if(update){
            return funcionario.findByPk(req.params.id);
        }else{
            res.status(404).json({message: 'Funcionario Nao encontrado'})
        }
    }).then(user => {
        res.status(200).json(user);
    }).catch(error => {
        res.status(500).json({ error: error.message });
    });
};

exports.deleteFunc = (req,res) =>{
    funcionario.destroy({
        where: { id_funcionario: req.params.id }
    })
    .then(deleted => {
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Funcionario not found' });
        }
    })
    .catch(error => {
        res.status(500).json({ error: 'Erro ao excluir funcionário: ' + error.message });
    });
}
