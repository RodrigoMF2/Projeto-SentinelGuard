const express = require('express');
const router = express.Router();
const imageRecognitionController = require('../controllers/img_reco_controler');


router.post('/image_recognition', imageRecognitionController.createImageRecognition);

router.get('/image_recognition', imageRecognitionController.getAllImageRecognitions);

router.get('/image_recognition/:id', imageRecognitionController.getImageRecognitionById);

router.put('/image_recognition/:id', imageRecognitionController.updateImageRecognition);

router.delete('/image_recognition/:id', imageRecognitionController.deleteImageRecognition);

router.get('/image_recognition/facial/:id', imageRecognitionController.getFuncionarioByFacialId);

module.exports = router;