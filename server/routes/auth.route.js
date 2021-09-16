const express = require('express');
const router = express.Router();
const auth = require('../controllers/auth.controller');
const { addUser, login } = require('../middlewares/validate');
const validateToken = require('../middlewares/validateToken')

router.post('/register', addUser, auth.postRegister);
router.post('/login', login, auth.postLogin);
router.get('/info', validateToken, (req, res) => {
    res.json(req.user);
})

module.exports = router;