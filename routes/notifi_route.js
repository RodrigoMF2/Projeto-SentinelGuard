const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificação_controler');

// Rota para criar uma nova notificação
router.post('/notifications', notificationController.createNotification);

// Outras rotas CRUD
router.get('/notifications', notificationController.getAllNotifications);

router.get('/notifications/:id', notificationController.getNotificationById);

router.delete('/notifications/:id', notificationController.deleteNotification);


module.exports = router;
