const Notificacao = require('../models/nofificação');


exports.createNotification = (req, res, next) => {
    Notificacao.create(req.body)
        .then(notification => {
            res.status(201).json(notification);
        })
        .catch(error => {
            res.status(500).json({ error: error.message });
        });
};


exports.getAllNotifications = (req, res, next) => {
    Notificacao.findAll()
        .then(notifications => {
            res.status(200).json(notifications);
        })
        .catch(error => {
            res.status(500).json({ error: error.message });
        });
};


exports.getNotificationById = (req, res, next) => {
    Notificacao.findByPk(req.params.id)
        .then(notification => {
            if (notification) {
                res.status(200).json(notification);
            } else {
                res.status(404).json({ message: 'Notificação não encontrada' });
            }
        })
        .catch(error => {
            res.status(500).json({ error: error.message });
        });
};

// Deletar uma notificação pelo ID
exports.deleteNotification = (req, res, next) => {
    Notificacao.destroy({
        where: { notificacao_id: req.params.id }
    })
    .then(deleted => {
        if (deleted) {
            res.status(200).json({ message: 'Notificação deletada com sucesso' });
        } else {
            res.status(404).json({ message: 'Notificação não encontrada' });
        }
    })
    .catch(error => {
        res.status(500).json({ error: error.message });
    });
};