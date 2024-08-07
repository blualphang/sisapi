// routes/apiClassCategory.js



const express = require('express');
const {
    getClassCategorys,
    getClassCategorysByClassCategoryCode,
    createClassCategory,
    updateClassCategory,
    deleteClassCategory
} = require('../controllers/apiClassCategoryController');
const router = express.Router();
const apiController = require('../controllers/apiClassCategoryController');

router.get('/classcategory', getClassCategorys);
router.get('/classcategory/:classCategoryCode', getClassCategorysByClassCategoryCode);
router.post('/classCategory', createClassCategory);
router.put('/classCategory/:Id', updateClassCategory);
router.delete('/classCategory/:Id', deleteClassCategory);

module.exports = router;
