const express = require('express');
const router = express.Router();
const ServiceRequestController = require('../controller/ServiceRequestController');
const checkAuth = require('../middleware/check-auth');
const multer = require('multer');
const upload = multer();

router.get('/',   checkAuth, ServiceRequestController.get_all);

router.post('/add_service_request',  ServiceRequestController.add_service_request);

router.get('/get_single_service_request/:ServiceRequestId', checkAuth, ServiceRequestController.get_single_service_request);

router.patch('/update_service_request/:ServiceRequestId',  checkAuth, ServiceRequestController.update_service_request);

router.delete('/delete_service_request/:ServiceRequestId',  checkAuth, ServiceRequestController.delete_ServiceRequest);

module.exports = router;  