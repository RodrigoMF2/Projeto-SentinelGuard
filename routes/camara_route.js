const express = require('express');
const camaraController = require('../controllers/camara_controller');
const router = express.Router();

//'/sentinels/create' => POST
router.post('/sentinels/create', camaraController.createCamara);

//'/sentinel/all-sentinel' => GET
router.get('/sentinel/all-sentinel', camaraController.getAllCamaras);

//'/sentinel/:id' => GET
router.get('/sentinel/:id', camaraController.getCamaraById);

//'/sentinel/update-sentinel/:id => PUT
router.put('/sentinel/update-sentinel/:id',camaraController.updateCamara);

//'/sentinel/delete_sentinel/:id => DELETE
router.delete('/sentinel/delete_sentinel/:id',camaraController.deleteCamara);

module.exports = router;


