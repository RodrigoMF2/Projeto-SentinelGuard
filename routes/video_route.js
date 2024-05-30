const express = require('express');
const videoControllr = require('../controllers/videos_controller');
const router = express.Router();


router.post('/videos', videoControllr.createVideo);


router.get('/videos/historico', videoControllr.getAllVideos);


router.get('/video/:id/location', videoControllr.getVideoWithCameraLocation);


router.delete('/videos/delete/:id', videoControllr.deleteVideo);


module.exports = router;