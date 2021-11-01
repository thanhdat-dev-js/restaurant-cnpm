const express = require('express');
const router = express.Router();
const validateAdmin = require('../middlewares/validateAdmin');
const admin = require('../controllers/admin.controller');
const category = require('../controllers/category.controller');


// router.get('/admin', validateAdmin, (req, res) => {
//     if (req.user === 'admin') {
//         console.log('WORTHY');
//     }
//     else {
//         return res.status(403).json({
//             success: 0,
//             message: "Unauthorized"
//         })
//     }
// });

router.get('/admin/statistics', admin.getFilteredOrders);
router.get('/admin/employee', validateAdmin, admin.getAllEmployee);
// router.get('/admin/customer-info', validateAdmin, admin.displayCustomerInfo);

// For CRUD category/product
router.post('/admin/category', category.postCategory);
router.post('/admin/category/:categoryID', category.postProduct);

router.put('/admin/category/:categoryID', category.putCategory);
router.put('/admin/category/:categoryID/:productID', category.putProduct);

router.delete('/admin/category/:categoryID', category.deleteCategory);
router.delete('/admin/category/:categoryID/:productID', category.deleteProduct);


module.exports = router;