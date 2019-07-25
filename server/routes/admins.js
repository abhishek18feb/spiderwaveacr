var express = require('express');
var router = express.Router();
var AdminController = require('../controller/AdminController');
var check_auth = require('../middleware/check-auth');

/* GET users listing. */
router.post('/login', AdminController.login);
router.post('/signup', AdminController.signup);

module.exports = router;