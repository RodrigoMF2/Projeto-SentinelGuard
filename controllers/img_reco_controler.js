const image_recognition = require('../models/image_recognition');

exports.createImageRecognition = (req, res, next) => {
    image_recognition.create(req.body)
        .then(imageRecognition => {
            res.status(201).json(imageRecognition);
        })
        .catch(error => {
            res.status(500).json({ error: error.message });
        });
};

exports.getAllImageRecognitions = (req, res, next) => {
    image_recognition.findAll()
        .then(imageRecognitions => {
            res.status(200).json(imageRecognitions);
        })
        .catch(error => {
            res.status(500).json({ error: error.message });
        });
};

exports.getImageRecognitionById = (req, res, next) => {
    image_recognition.findByPk(req.params.id)
        .then(imageRecognition => {
            if (imageRecognition) {
                res.status(200).json(imageRecognition);
            } else {
                res.status(404).json({ message: 'Entrada de reconhecimento facial não encontrada' });
            }
        })
        .catch(error => {
            res.status(500).json({ error: error.message });
        });
};

exports.updateImageRecognition = (req, res, next) => {
    image_recognition.update(req.body, {
        where: { facial_id: req.params.id }
    })
    .then(([updated]) => {
        if (updated) {
            return image_recognition.findByPk(req.params.id);
        } else {
            res.status(404).json({ message: 'Entrada de reconhecimento facial não encontrada' });
        }
    })
    .then(imageRecognition => {
        res.status(200).json(imageRecognition);
    })
    .catch(error => {
        res.status(500).json({ error: error.message });
    });
};

exports.deleteImageRecognition = (req, res, next) => {
    image_recognition.destroy({
        where: { facial_id: req.params.id }
    })
    .then(deleted => {
        if (deleted) {
            res.status(200).json({ message: 'Entrada de reconhecimento facial deletada com sucesso' });
        } else {
            res.status(404).json({ message: 'Entrada de reconhecimento facial não encontrada' });
        }
    })
    .catch(error => {
        res.status(500).json({ error: error.message });
    });
};

exports.getFuncionarioByFacialId = (req, res, next) => {
    image_recognition.findByPk(req.params.id, {
        include: [{
            model: Funcionario,
            as: 'funcionario',
            required: true
        }]
    })
    .then(imageRecognition => {
        if (imageRecognition) {
            res.status(200).json(imageRecognition.funcionario);
        } else {
            res.status(404).json({ message: 'Entrada de reconhecimento facial não encontrada' });
        }
    })
    .catch(error => {
        res.status(500).json({ error: error.message });
    });
};
