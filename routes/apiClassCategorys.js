// routes/apiCaResults.js

const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiClassCategoryController');

router.get('/classcategory', apiController.getClassCategorys);
router.post('/caresult', apiController.createClassCategorys);
router.put('/caresult/:id', apiController.updateClassCategorys);
router.delete('/caresult/:id', apiController.deleteClassCategorys);

module.exports = router;