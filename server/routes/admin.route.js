const express = require('express');
const router = express.Router();
const validateToken = require('../middlewares/validateToken');
const admin = require('../controllers/admin.controller');


router.get('/admin', validateToken, (req, res) => {
    if (req.user === 'admin') {
        console.log('WORTHY');
    }
    else {
        return res.status(403).json({
            success: 0,
            message: "Unauthorized"
        })
    }
});

router.get('/admin/statistics', validateToken, admin.getAllStatistics);
router.get('/admin/employee', validateToken, admin.getAllEmployee);
router.get('/admin/customer-info', validateToken, admin.displayCustomerInfo);


module.exports = router;