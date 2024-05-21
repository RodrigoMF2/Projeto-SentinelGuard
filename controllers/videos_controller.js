const Video = require('../models/videos');
const Camara = require('../models/camara');

exports.createVideo = (req, res, next) => {
    Video.create(req.body)
        .then(video => {
            res.status(201).json(video);
        })
        .catch(error => {
            res.status(500).json({ error: error.message });
        });
};


exports.getAllVideos = (req, res, next) => {
    Video.findAll()
        .then(videos => {
            res.status(200).json(videos);
        })
        .catch(error => {
            res.status(500).json({ error: error.message });
        });
};

exports.getVideoWithCameraLocation = (req, res, next) => {
    Video.findByPk(req.params.id, {
        include: [{
            model: Camara,
            attributes: ['localizacao']
        }]
    })
    .then(video => {
        if (video && video.Camara) {
            res.status(200).json({
                video,
                localizacao: video.Camara.localizacao
            });
        } else {
            res.status(404).json({ message: 'Vídeo não encontrado ou Câmera não associada' });
        }
    })
    .catch(error => {
        res.status(500).json({ error: error.message });
    });
};

// Obter vídeos por câmera
exports.getVideosByCamera = (req, res, next) => {
    Video.findAll({ where: { camara_id: req.params.camara_id } })
        .then(videos => {
            res.status(200).json(videos);
        })
        .catch(error => {
            res.status(500).json({ error: error.message });
        });
};

// Deletar um vídeo
exports.deleteVideo = (req, res, next) => {
    Video.destroy({ where: { videos_id: req.params.id } })
        .then(rowsDeleted => {
            if (rowsDeleted > 0) {
                res.status(200).json({ message: 'Vídeo deletado com sucesso' });
            } else {
                res.status(404).json({ message: 'Vídeo não encontrado' });
            }
        })
        .catch(error => {
            res.status(500).json({ error: error.message });
        });
};
