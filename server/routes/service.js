const express = require('express');
const router = express.Router();
const ServiceController = require('../controller/ServiceController');
const checkAuth = require('../middleware/check-auth');
const multer = require('multer');
const upload = multer();

router.get('/', ServiceController.get_all);

router.post('/addService',  checkAuth, upload.none(), ServiceController.addService);

router.post('/check_unique',  checkAuth, ServiceController.check_unique);

router.get('/get_single_service/:serviceId', checkAuth, ServiceController.get_single_service);

router.patch('/update_service/:serviceId',  checkAuth, ServiceController.update_service);

router.delete('/delete_service/:serviceId',  checkAuth, ServiceController.delete_service);

module.exports = router;
