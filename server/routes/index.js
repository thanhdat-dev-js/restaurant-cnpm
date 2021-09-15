const express = require('express');
const router = express.Router();
const category = require('./category.route');
const auth = require('./auth.route');

router.use('/', auth);
router.use('/', category);

module.exports = router;