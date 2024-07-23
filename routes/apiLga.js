// routes/apiLga.js

const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiLgaController');

router.get('/lgas', apiController.getLgas);
router.post('/lgas', apiController.createLga);
router.put('/lgas/:id', apiController.updateLga);
router.delete('/lgas/:id', apiController.deleteLga);

module.exports = router;