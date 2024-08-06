// routes/apiState.js

const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiStateController');

router.get('/states', apiController.getStates);
router.post('/states', apiController.createState);
router.put('/states/:id', apiController.updateState);
router.delete('/states/:id', apiController.deleteState);

module.exports = router;