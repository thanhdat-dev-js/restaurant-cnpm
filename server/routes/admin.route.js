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
router.get('/admin/employee', admin.getAllEmployee);
router.get('/admin/employee/email', admin.getCustomer);
router.put('/admin/employee/email', admin.putCustomer);
// router.get('/admin/customer-info', validateAdmin, admin.displayCustomerInfo);


module.exports = router;