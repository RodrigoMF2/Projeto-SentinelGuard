const Camara = require('../models/camara');

exports.createCamara = (req, res) => {
    Camara.create(req.body)
        .then(camara => {
            res.status(201).json(camara);
        })
        .catch(error => {
            res.status(500).json({ error: error.message });
        });
};

exports.getAllCamaras = (req, res) => {
    Camara.findAll()
        .then(camaras => {
            res.status(200).json(camaras);
        })
        .catch(error => {
            res.status(500).json({ error: error.message });
        });
};

exports.getCamaraById = (req, res) => {
    Camara.findByPk(req.params.id)
        .then(camara => {
            if (camara) {
                res.status(200).json(camara);
            } else {
                res.status(404).json({ message: 'Camara not found' });
            }
        })
        .catch(error => {
            res.status(500).json({ error: error.message });
        });
};

exports.updateCamara = (req, res) => {
    Camara.update(req.body, {
        where: { camara_id: req.params.id }
    })
    .then(([updated]) => {
        if (updated) {
            return Camara.findByPk(req.params.id);
        } else {
            res.status(404).json({ message: 'Camara not found' });
        }
    })
    .then(camara => {
        res.status(200).json(camara);
    })
    .catch(error => {
        res.status(500).json({ error: error.message });
    });
};

exports.deleteCamara = (req, res) => {
    Camara.destroy({
        where: { id: req.params.id }
    })
    .then(deleted => {
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Camara not found' });
        }
    })
    .catch(error => {
        res.status(500).json({ error: error.message });
    });
};