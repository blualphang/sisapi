// routes/apiClassCategory.js



const express = require('express');
const {
    getClassCategory,
    getClassCategoryByclassCategoryCode,
    createClassCategory,
    updateClassCategory,
    deleteClassCategory
} = require('../controllers/apiClassCategoryController');
const router = express.Router();
const apiController = require('../controllers/apiClassCategoryController');

router.get('/classcategory', getClassCategory);
router.get('/classcategory/:classCategoryCode', getClassCategoryByClassCategoryCode);
router.post('/classCategory', createClassCategory);
router.put('/classCategory/:Id', apiController.updateClassCategory);
router.delete('/classCategory/:Id', apiController.deleteClassCategory);

module.exports = router;
