// routes/apiCaResults.js

const express = require('express');
const {
    getCaReults,
    getCaReultsByTermIdSessionId,
    createCaResult,
    updateCaReult,
    deleteCaReult
} = require('../controllers/apiCaResultsController');

const router = express.Router();
const apiController = require('../controllers/apiCaResultsController');

router.get('/caresults', getCaReults);
router.get('/caresults/:termid:sessionId', getCaReultsByTermIdSessionId);
router.post('/caresults', apiController.createCaResult);
router.put('/caresults/:Id', apiController.updateCaReult);
router.delete('/caresults/:Id', apiController.deleteCaReult);

module.exports = router;
