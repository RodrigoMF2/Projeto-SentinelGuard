const express = require('express');
const videoControllr = require('../controllers/videos_controller');
const router = express.Router();


router.post('/videos_create', videoControllr.createVideo);

router.get('/videos', videoControllr.getAllVideos);

// Rota para obter vídeo com localização da câmera
router.get('/videos/:id/location', videoControllr.getVideoWithCameraLocation);

// Rota para obter vídeos por câmera
router.get('/cameras/:camara_id/videos', videoControllr.getVideosByCamera);


router.delete('/videos/:id', videoControllr.deleteVideo);

module.exports = router;