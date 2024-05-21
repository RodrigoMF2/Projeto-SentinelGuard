const express = require('express');
const eventosController = require('../controllers/eventos_controler');
const router = express.Router();


router.post('/eventos',eventosController.createevento);

router.get('/all_eventos',eventosController.getAllEventos);

router.get('/eventos/:id', eventosController.getEventoById);

router.put('/eventos/:id', eventosController.updateEvento);

router.delete('/eventos/delete/:id',eventosController.deleteEvento);

router.get('/eventos/:id/location', eventosController.getEventoWithCameraLocation);

module.exports = router
