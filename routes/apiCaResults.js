// routes/apiCaResults.js

const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiCaResultsController');

router.get('/caresult', apiController.getCaReults);
router.post('/caresult', apiController.createCaResult);
router.put('/caresult/:id', apiController.updateCaReult);
router.delete('/caresult/:id', apiController.deleteCaReult);

module.exports = router;