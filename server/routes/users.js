var express = require('express');
var router = express.Router();
var UsersController = require('../controller/UsersController');
var check_auth = require('../middleware/check-auth');

/* GET users listing. */
router.post('/login', UsersController.login);
router.post('/signup', UsersController.signup);
router.post('/forgot_password', UsersController.forgot_password);
router.post('/reset_password', UsersController.reset_password);

module.exports = router;