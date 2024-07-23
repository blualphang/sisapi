// routes/apiCaResults.js

const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiCaResultsController');

router.get('/caresults', apiController.getCaReults);
router.post('/caresults', apiController.createCaResult);
router.put('/caresults/:id', apiController.updateCaReult);
router.delete('/caresults/:id', apiController.deleteCaReult);

module.exports = router;